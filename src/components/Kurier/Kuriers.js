import React, { useState, useEffect } from 'react'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import Card from '@material-ui/core/Card'
import InputBase from '@material-ui/core/InputBase'
import SearchIcon from '@material-ui/icons/Search'
import IconButton from '@material-ui/core/IconButton'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TablePagination from '@material-ui/core/TablePagination'
import TableRow from '@material-ui/core/TableRow'
import { Link, useHistory, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { getKur } from '../../actions/userActions'
const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
}))

const columns = [
  { id: 'name', label: 'Ismi', minWidth: 170 },
  { id: 'soname', label: 'Familiyasi', minWidth: 100 },
  {
    id: 'tel_nomer',
    label: 'Telefon raqam',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'state',
    label: 'status',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
]
const Index = ({ costum, getKur }) => {
  const classes = useStyles()
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)
  //   const [data, setData] = useState([])

  useEffect(() => {
    getKur()
  }, [])
  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  const history = useHistory()

  const routeChange = () => {}
  return (
    <div>
      <div>
        {' '}
        <Button variant="contained" style={{ color: '#3f51b5' }}>
          <AddIcon></AddIcon> Kurier
        </Button>
      </div>
      <div>
        <Card style={{ width: '250px', margin: '10px 0' }}>
          {' '}
          <InputBase
            className={classes.input}
            placeholder="Qidirish"
            inputProps={{ 'aria-label': 'search google maps' }}
          />
          <IconButton
            type="submit"
            className={classes.iconButton}
            aria-label="search"
          >
            <SearchIcon />
          </IconButton>
        </Card>
        <Card>
          <Paper className={classes.root}>
            <TableContainer className={classes.container}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    {columns.map((column) => (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        style={{ minWidth: column.minWidth }}
                      >
                        {column.label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {costum
                    ? costum
                        .slice(
                          page * rowsPerPage,
                          page * rowsPerPage + rowsPerPage,
                        )
                        .map((row) => {
                          return (
                            <TableRow
                              component={Link}
                              to={`/kuriers/${row.Id}`}
                              hover
                              role="checkbox"
                              tabIndex={-1}
                              key={row.code}
                              onClick={routeChange}
                              style={{ cursor: 'pointer' }}
                            >
                              {columns.map((column) => {
                                const value = row[column.id]
                                return (
                                  <TableCell
                                    key={column.id}
                                    align={column.align}
                                  >
                                    {value}
                                  </TableCell>
                                )
                              })}
                            </TableRow>
                          )
                        })
                    : null}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[10, 25, 100]}
              component="div"
              count={costum.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
            />
          </Paper>
        </Card>
      </div>
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    costum: state.labbay.kurs,
  }
}
export default connect(mapStateToProps, { getKur })(Index)

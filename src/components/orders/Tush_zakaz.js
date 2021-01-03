import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TablePagination from '@material-ui/core/TablePagination'
import TableRow from '@material-ui/core/TableRow'
import { connect } from 'react-redux'
import { Link, useHistory, Redirect } from 'react-router-dom'
const columns = [
  { id: 'time_create', label: 'Sana', minWidth: 170 },
  { id: 'Id', label: 'Id', minWidth: 100 },
  {
    id: 'u_ismi',
    label: "Iste'molchi",
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'u_fam',
    label: 'Address',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'element_nomi',
    label: 'Summa',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
]

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
})

function StickyHeadTable({ orders }) {
  const classes = useStyles()
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)
  const [data, setData] = useState([])
  useEffect(() => {
    const fil = orders.filter((or) => or.status == 0)
    setData(fil)
  }, [orders])
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
            {data
              ? data
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow
                        component={Link}
                        to={`/orders/${row.Id}`}
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
                            <TableCell key={column.id} align={column.align}>
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
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  )
}
const mapStateToProps = (state) => {
  return {
    orders: state.labbay.orders,
  }
}

export default connect(mapStateToProps, {})(StickyHeadTable)

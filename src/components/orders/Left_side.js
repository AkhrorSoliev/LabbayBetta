import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import { connect } from 'react-redux'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import PhoneIcon from '@material-ui/icons/Phone'
import SaveIcon from '@material-ui/icons/Save'
import { FormControlLabel, Switch } from '@material-ui/core'

const status = [
  'Zakaz tushdi',
  'Oshxonada',
  'Tayyor',
  'Kurierda',
  'Yetkazildi',
  'Bekor Qilindi',
]
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  button: {
    margin: theme.spacing(1),
  },
}))

const Left_side = ({ editCostum ,orders, taom, id }) => {
  let i = 0
  const curOrder = orders.filter((or) => or.Id == id)
  const classes = useStyles()
  const [state, setState] = React.useState({
    age: '',
    name: 'hai',
  })

  useEffect(() => {
    setState({
      ...state,
      age: curOrder[0].status,
    })
  }, [])
  const handleChange = (event) => {
    const name = event.target.name
    setState({
      ...state,
      [name]: event.target.value,
    })
  }
  return (
    <div style={{ width: '20%' }}>
      <Link to="/orders">
        <Button
          style={{
            'margin-bottom': '20px',
            'margin-top': '10px'
          }}
          variant="contained"
          color="primary"
          className={classes.button}
          startIcon={<ArrowBackIosIcon />}
        >
          Orqaga
        </Button>
      </Link>
      <h2>{curOrder[0].Id}-Zakaz</h2>
      <span>Sana</span>
      <p>{curOrder[0].time_create}</p>
      <FormControl variant="filled" className={classes.formControl}>
        <InputLabel htmlFor="filled-age-native-simple">Status</InputLabel>
        <Select
          native
          value={state.age}
          onChange={handleChange}
          value={state.age}
          inputProps={{
            name: 'age',
            id: 'filled-age-native-simple',
          }}
        >
          {status.map((co) => (
            <option value={i++}>{co}</option>
          ))}
        </Select>
      </FormControl>
      <h2>Iste'molchi</h2>
      <Link to={'/costumers/' + curOrder[0].user_id}>
        <h3 style={{ color: '#3F51B5' }}>
          {curOrder[0].u_ismi} {curOrder[0].u_fam}
        </h3>
      </Link>
      <a href={'tel:' + curOrder[0].u_tel}>
        <h3 style={{ color: '#3F51B5' }}>
          {curOrder[0].u_tel}
          <PhoneIcon
            style={{
              'margin-left': '3px',
              'margin-top': '5px',
            }}
          ></PhoneIcon>
        </h3>
      </a>
      <div className="mt-2">
        <Button
          style={{top: '100px'}}
          variant="contained"
          color="primary"
          size="small"
          className={classes.button}
          startIcon={<SaveIcon />}
        >
          Saqlash
        </Button>
      </div>
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    taom: state.labbay.taom,
    orders: state.labbay.orders,
  }
}
export default connect(mapStateToProps)(Left_side)

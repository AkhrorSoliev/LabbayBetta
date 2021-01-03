import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { getCostum1 } from '../../actions/userActions'
import { Card } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import Button from '@material-ui/core/Button'
import InputLabel from '@material-ui/core/InputLabel'
import InputAdornment from '@material-ui/core/InputAdornment'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import FilledInput from '@material-ui/core/FilledInput'
import IconButton from '@material-ui/core/IconButton'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Switch from '@material-ui/core/Switch'
import MuiPhoneNumber from 'material-ui-phone-number'
import SaveIcon from '@material-ui/icons/Save'
import { editCostum } from '../../actions/userActions'
import { Link } from 'react-router-dom'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  button: {
    margin: theme.spacing(1),
  },
}))
const Costum = ({ editCostum, getCostum1, costum }) => {
  const classes = useStyles()
  const { id } = useParams()
  const [values, setValues] = React.useState({
    ismi: 'sardor',
    fam: 'abrorvo',
    address: '',
    region: '1',
    phone: '+9982132123',
    showPassword: false,
    parol: '',
    parol1: '',
    status: false,
    id: 3,
  })
  useEffect(() => {
    const costum1 = costum.filter((c) => c.Id == id)
    setValues({
      ...values,
      ismi: costum1[0].nomi,
      fam: costum1[0].familya,
      phone: costum1[0].tel_nomer,
      status: costum1[0].state == '0' ? true : false,
      id: costum1[0].Id,
    })
  }, [])

  const handleChange = (e) => {
    console.log(e.target.value)
    setValues({ ...values, [e.target.name]: e.target.value })
  }
  const handleChange1 = (e) => {
    setValues({ ...values, [e.target.name]: e.target.checked })
  }
  const handleChange2 = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value })
  }
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword })
  }

  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }
  return (
    <Card style={{ padding: '10px', display: 'flex' }}>
      <div style={{ width: '50%' }}>
        <Link to="/oshxona">
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            startIcon={<ArrowBackIosIcon />}
          >
            Orqaga
          </Button>
        </Link>
        <h2>Iste'molchi ma'lumotlari</h2>
        <TextField
          onChange={(e) => handleChange(e)}
          name="ismi"
          style={{ marginRight: '15px' }}
          id="filled-basic1"
          label="Ismi"
          variant="filled"
          value={values.ismi}
        />
        <div className="mt-2 mb-2">
          <h2>Telefon raqam</h2>
          <MuiPhoneNumber
            defaultCountry={'uz'}
            onChange={() => handleChange2('phone')}
            name="phone"
            value={values.phone}
          />
        </div>
        <TextField
          id="filled-select-currency1"
          select
          label="Region"
          value={values.region}
          name="region"
          onChange={(e) => handleChange(e)}
          helperText="iltimos regionni tanlang"
          variant="filled"
        >
          <MenuItem key="2" value="1">
            Fargona
          </MenuItem>
          <MenuItem key="2" value="2">
            Fargona
          </MenuItem>
        </TextField>

        <h2>Parol</h2>
        <div style={{ display: 'flex' }}>
          <div style={{ marginRight: '15px' }}>
            <InputLabel htmlFor="filled-adornment-password">Parol</InputLabel>
            <FilledInput
              id="filled-adornment-password2"
              type={values.showPassword ? 'text' : 'password'}
              value={values.parol}
              name="parol"
              onChange={(e) => handleChange(e)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </div>
          <div>
            <InputLabel htmlFor="filled-adornment-password">
              Parolni tasdiqlang
            </InputLabel>
            <FilledInput
              id="filled-adornment-password"
              type={values.showPassword ? 'text' : 'password'}
              value={values.parol1}
              name="parol1"
              onChange={(e) => handleChange(e)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
            <br />
            <span>Parol mos tushmadi</span>
          </div>
        </div>
        <div className="mt-2">
          <Button
            variant="contained"
            color="primary"
            size="small"
            className={classes.button}
            startIcon={<SaveIcon />}
            onClick={() => editCostum(values)}
          >
            Saqlash
          </Button>
        </div>
      </div>
      <div style={{ width: '50%' }}>
        <FormControlLabel
          control={
            <Switch
              name="status"
              checked={values.status}
              onChange={(e) => handleChange1(e)}
              color="primary"
            />
          }
          label="Status"
        />
      </div>
    </Card>
  )
}
const mapStateToProps = (state) => {
  return {
    costum: state.labbay.oshxona,
    oshxona: state.labbay.oshxona,
  }
}
export default connect(mapStateToProps, { getCostum1, editCostum })(Costum)

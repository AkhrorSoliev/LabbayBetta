import React, { useState } from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import { useDispatch } from 'react-redux'
import { loginUser } from '../actions/userActions'
import LoginAnimation from './login-animation.gif'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}))

export default function SignIn() {
  function handleClick(e) {
    // e.preventdefault()
    dispatch(loginUser(login))
  }
  function handleChange(e) {
    const { name, value } = e.target
    setLogin((prev) => {
      return {
        ...prev,
        [name]: value,
      }
    })
  }


  const [login, setLogin] = useState({
    login: '',
    parol: '',
  })
  const classes = useStyles()
  const dispatch = useDispatch()
  return (
    <Container component="main">
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <div style={{
            'margin-top': '150px',
            'margin-left': '150px',
            'alignItems': 'center'
          }}>
            <img src={LoginAnimation} alt="login-animation" style={{
              height: "300px",
              'background-color': 'white',
      
            }}/>
            </div>
        </Grid>
        <Grid
          item
          xs={4}
          style={{
            width: '25%',
            alignItems: 'center',
            'margin-left': '105px',
          }}
        >
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Tizimga kirish
            </Typography>
            <form onSubmit={(e)=> {
              e.preventDefault()
            }} className={classes.form} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Elektron Pochta yoki Telefon raqamingiz "
                name="login"
                onChange={handleChange}
                autoComplete="email"
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="parol"
                label="Parolingiz"
                type="password"
                id="password"
                onChange={handleChange}
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Eslab qolish"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                onClick={handleClick}
                className={classes.submit}
              >
                Kirish
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Parolni unudingizmi ?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Ro'yxatdan o'tish !"}
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
        </Grid>
      </Grid>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  )
}

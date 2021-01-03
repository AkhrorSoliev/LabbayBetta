import React, { useEffect } from 'react'
import clsx from 'clsx'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import List from '@material-ui/core/List'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import PeopleIcon from '@material-ui/icons/People'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Button from '@material-ui/core/Button'
import HomeIcon from '@material-ui/icons/Home'
import Avatar from '@material-ui/core/Avatar'
import Order_item from './orders/Order_item'
import Costumers from './Costumers/Costumer'
import Kuriers from './Kurier/Kuriers'
import Oshxona from './Oshxona/Oshxona'
import AddAlarmIcon from '@material-ui/icons/AddAlarm'
import MotorcycleIcon from '@material-ui/icons/Motorcycle'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Orders from './Orders'
import { getOrders, logOut } from '../actions/userActions'
import { connect, useSelector, useDispatch } from 'react-redux'
import Costum from './Costumers/Costum'
import PageNotFound from './notFound/404.jsx'
import Oshxonak from './Oshxona/Oshxonak'
import KurierCos from './Kurier/KurierCos'

function MiniDrawer({ getOrders, loading, user }) {
  const classes = useStyles()
  const theme = useTheme()
  const [open, setOpen] = React.useState(true)
  const [anchorEl, setAnchorEl] = React.useState(null)
  const dispatch = useDispatch() // qoladi kerakli
  useEffect(() => {
    setInterval(() => {
      getOrders()
    }, 1000)
  }, [])
  const handleDrawerOpen = () => {
    setOpen(true)
  }
  const handleDrawerClose = () => {
    setOpen(false)
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }
  const handleLogOut = () => {
    window.localStorage.removeItem('Ismi')
    window.location.reload()
    dispatch(logOut())
  }
  return (
    <Router>
      {/* ketadi */}
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, {
                [classes.hide]: open,
              })}
            >
              <MenuIcon />
            </IconButton>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
                alignItems: 'center',
              }}
            >
              <Typography variant="h6" noWrap style={{ color: 'white' }}>
                <Link to="/" style={{ color: 'white' }}>
                  Labbay
                </Link>
              </Typography>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                {loading ? (
                  <div>
                    <img src="/load_anim.svg" width="30px"></img>
                  </div>
                ) : (
                  <div>
                    <img src="/load_static.svg" width="30px"></img>
                  </div>
                )}

                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  aria-controls="simple-menu"
                  aria-haspopup="true"
                  onClick={handleClick}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <Avatar alt="Remy Sharp" src="/avatar.webp" />
                    <span style={{ marginLeft: '5px' }}>
                      {window.localStorage.getItem('Ismi')}
                    </span>

                    {/*  */}
                  </div>
                </Button>
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem>Profile</MenuItem>
                  <MenuItem>My account</MenuItem>
                  <MenuItem onClick={handleLogOut}>Logout</MenuItem>
                </Menu>
              </div>
            </div>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            }),
          }}
        >
          <div className={classes.toolbar}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'rtl' ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </div>
          <Divider />
          <List>
            <Link to="/">
              <ListItem button key="Home">
                <ListItemIcon>
                  <HomeIcon></HomeIcon>
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItem>
            </Link>
            <Link to="/orders">
              <ListItem button key="Orders">
                <ListItemIcon>
                  <ShoppingCartIcon></ShoppingCartIcon>
                </ListItemIcon>
                <ListItemText primary="Orders" />
              </ListItem>
            </Link>
            <Link to="/costumers">
              <ListItem button key="costumers">
                <ListItemIcon>
                  <PeopleIcon></PeopleIcon>
                </ListItemIcon>
                <ListItemText primary="Costumers" />
              </ListItem>
            </Link>
            <Link to="/kuriers">
              <ListItem button key="kuriers">
                <ListItemIcon>
                  <MotorcycleIcon></MotorcycleIcon>
                </ListItemIcon>
                <ListItemText primary="Kuryerlar" />
              </ListItem>
            </Link>
            <Link to="/oshxona">
              <ListItem button key="kuriers">
                <ListItemIcon>
                  <AddAlarmIcon></AddAlarmIcon>
                </ListItemIcon>
                <ListItemText primary="Oshxona" />
              </ListItem>
            </Link>
          </List>
          <Divider />
          <List></List>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />

          <Switch>
            <Route exact path="/orders">
              <Orders />
            </Route>
            <Route exact path="/">
              Home
            </Route>
            <Route path="/orders/:id">
              <Order_item></Order_item>
            </Route>
            <Route exact path="/costumers">
              <Costumers></Costumers>
            </Route>
            <Route path="/costumers/:id">
              <Costum></Costum>
            </Route>

            <Route exact path="/kuriers">
              <Kuriers></Kuriers>
            </Route>
            <Route path="/kuriers/:id">
              <KurierCos></KurierCos>
            </Route>
            <Route exact path="/oshxona">
              <Oshxona></Oshxona>
            </Route>
            <Route path="/oshxona/:id">
              <Oshxonak></Oshxonak>
            </Route>
            <Route component={PageNotFound}>
              <PageNotFound></PageNotFound>
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  )
}
const mapStateToProps = (state) => {
  return {
    loading: state.labbay.loading,
    user: state.labbay.currentUser,
  }
}
export default connect(mapStateToProps, { getOrders })(MiniDrawer)

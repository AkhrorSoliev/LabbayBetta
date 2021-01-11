import React, { useEffect, useState } from 'react'
import Order_item from './orders/Order_item'
import Costumers from './Costumers/Costumer'
import Kuriers from './Kurier/Kuriers'
import Oshxonaa from './Oshxonaa/Oshxona'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Orders from './Orders'
import { getOrders, logOut } from '../actions/userActions'
import { connect, useDispatch } from 'react-redux'
import Costum from './Costumers/Costum'
import PageNotFound from './notFound/404.jsx'
import Oshxonak from './Oshxona/Oshxonak'
import KurierCos from './Kurier/KurierCos'
import Deliveries from './orders/Deliveries'
import { Menu } from 'antd'
import {
  FieldTimeOutlined,
  HomeOutlined,
  SkinOutlined,
  TeamOutlined,
} from '@ant-design/icons'
import logo from './logo2.svg'
import LogOut from './LogOut.svg'
import HistoryTable from './orders/HistoryTable'
import Users from '../components/Users/Users'
import Bekor from './orders/Bekor'
import Curiers from './Curiermans/Curiers'

const { SubMenu } = Menu

function MiniDrawer({ getOrders, loading, user }) {
  const [collapsed, setCollapsd] = useState(false)

  const handleClick1 = (e) => {
    console.log('click ', e)
  }

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
      <div style={{ display: 'flex', width: '100%' }}>
        <div style={{ width: '20%' }}>
          <div>
            <img src={logo} alt="logo" style={{ marginLeft: '10px' }} />
          </div>
          <Menu
            onClick={handleClick1}
            style={{ width: 256 }}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
          >
            <Menu.Item key="1" icon={<HomeOutlined />}>
              <Link to="/">Home</Link>
            </Menu.Item>
            <SubMenu key="sub1" icon={<TeamOutlined />} title="Orders">
              <Menu.ItemGroup>
                <Menu.Item key="2">
                  <Link to="/orders">Orders</Link>
                </Menu.Item>
                <Menu.Item key="3">
                  <Link to="/delivers">Deliveries</Link>
                </Menu.Item>
                <Menu.Item key="4">
                  <Link to="/history">History</Link>
                </Menu.Item>
                <Menu.Item key="5">
                  <Link to="/bekor">Canceelled Deliveries</Link>
                </Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>
            <Menu.Item key="6" icon={<FieldTimeOutlined />}>
              <Link to="/oshxona">Oshxona</Link>
            </Menu.Item>
            <Menu.Item key="7" icon={<TeamOutlined />}>
              <Link to="/users">Users</Link>
            </Menu.Item>
            <Menu.Item key="8" icon={<SkinOutlined />}>
              <Link to="/curiers">Curiermans</Link>
            </Menu.Item>
          </Menu>
        </div>

        <main style={{ width: '80%' }}>
          <div style={{ height: '60px', backgroundColor: '#5A57DC' }}>
            <div
              style={{
                float: 'right',
                color: 'white',
                marginRight: 30,
                marginTop: 15,
              }}
            >
              <img src={LogOut} alt="logout" /> Logout
            </div>
          </div>
          <div />
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
              <div style={{ display: 'flex' }}>
                <Oshxonaa></Oshxonaa>
              </div>
            </Route>
            <Route path="/oshxona/:id">
              <Oshxonak></Oshxonak>
            </Route>
            <Route exact path="/delivers">
              <Deliveries></Deliveries>
            </Route>
            <Route exact path="/history">
              <HistoryTable></HistoryTable>
            </Route>
            <Route exact path="/bekor">
              <Bekor></Bekor>
            </Route>
            <Route exact path="/users">
              <Users></Users>
            </Route>
            <Route exact path="/curiers">
              <Curiers></Curiers>
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

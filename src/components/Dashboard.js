import React, { useEffect, useState } from 'react'
import Order_item from './orders/Order_item'
import Costumers from './Costumers/Costumer'
import Kuriers from './Kurier/Kuriers'
import Oshxona from './Oshxona/Oshxona'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Orders from './Orders'
import { getOrders, logOut } from '../actions/userActions'
import { connect, useSelector, useDispatch } from 'react-redux'
import Costum from './Costumers/Costum'
import PageNotFound from './notFound/404.jsx'
import Oshxonak from './Oshxona/Oshxonak'
import KurierCos from './Kurier/KurierCos'
import { Menu } from 'antd';
import { FieldTimeOutlined, HomeOutlined, MailOutlined, PlusSquareOutlined, TeamOutlined } from '@ant-design/icons';
import logo from './logo2.svg'
import { PieChartOutlined } from '@ant-design/icons';
import LogOut from './LogOut.svg'
import Mapside from './orders/Map_side'
import { Input } from 'antd';
import { Select } from 'antd';




const { SubMenu } = Menu;

function MiniDrawer({ getOrders, loading, user }) {

  const [collapsed, setCollapsd] = useState(false)

  const handleClick1 = e => {
    console.log('click ', e);
  };

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


    <Router >
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
              <Link to="/">
                Home
              </Link>
            </Menu.Item>
            <SubMenu key="sub1" icon={<TeamOutlined />} title="Costumers">
              <Menu.Item key="1" icon={<PieChartOutlined />}>
                Option 1
          </Menu.Item>
              <Menu.ItemGroup>
                <Menu.Item key="3">Option 3</Menu.Item>
                <Menu.Item key="4">Option 4</Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>

            <Menu.Item key="2" icon={<PlusSquareOutlined />}>
              <Link to="/orders">
                Orders
            </Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<FieldTimeOutlined />}>
              <Link to='/oshxona'>
                Oshxona
            </Link>
            </Menu.Item>
          </Menu>
        </div>

        <main style={{ width: '80%' }}>
          <div style={{ height: '60px', backgroundColor: '#5A57DC', }}>
            <div style={{ float: 'right', color: 'white', marginRight: 30, marginTop: 15 }}>
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
                <Oshxona></Oshxona>
              </div>
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
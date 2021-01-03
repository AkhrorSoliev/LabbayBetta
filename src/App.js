import React from 'react'
import './App.css'
import Login from './components/Login'
import { connect } from 'react-redux'
import Dashboard from './components/Dashboard'
function App({ isLogged }) {
  const ismi = window.localStorage.getItem('Ismi')
  if (isLogged || ismi) {
    return <Dashboard></Dashboard>
  } else {
    return <Login></Login>
  }
}
const mapStateToProps = (state) => {
  return {
    isLogged: state.labbay.isLogged,
  }
}
export default connect(mapStateToProps, {})(App)

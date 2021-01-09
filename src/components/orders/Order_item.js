import React, { useEffect } from 'react'
import Card from '@material-ui/core/Card'
import { useParams } from 'react-router-dom'
import Map_side from './Map_side'
import Left_side from './Left_side'
import { getKur, getTaom } from '../../actions/userActions'
import { connect } from 'react-redux'
const Order_item = ({ getKur, getTaom }) => {
  const { id } = useParams()
  useEffect(() => {
    getTaom(id)
    const inter = setInterval(() => {
      getKur()
    }, 1000)
    return () => {
      clearInterval(inter)
    }
  }, [])
  return (
    <Card style={{ display: 'flex' }}>
      <Left_side id={id}></Left_side>
      <Map_side id={id}></Map_side>
    </Card>
  )
}

export default connect(null, { getKur, getTaom })(Order_item)

import React from 'react'
import { connect } from 'react-redux'
import Map from './Map'
import GetLocation from './getLocation'
import Location from '../placeholder.svg'

const Map_side = ({ id, orders }) => {
  let order
  if (orders && id) {
    order = orders.filter((or) => or.Id == id)
  }
  return (
    <div
      style={{
        height: '500px',
        width: '100%',
        marginLeft: '7px',
        boxShadow: 'box-shadow: rgba(0, 0, 255, 0.2) 2px 2px 10px 1px;',
      }}
    >
      <div style={{ backgroundColor: 'rgb(90, 87, 220)', display: 'flex' }}>
        <div
          style={{
            width: '25px',
            height: '25px',
            margin: '5px',
          }}
        >
          <img src={Location} alt="location" />
        </div>
        {order && id ? (
          <h3
            style={{ color: 'white', fontFamily: 'monospace', margin: 'auto' }}
          >
            <GetLocation lat={order[0].user_latit} lng={order[0].user_longit} />
          </h3>
        ) : null}
      </div>
      <Map id={id}></Map>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    orders: state.labbay.orders,
  }
}

export default connect(mapStateToProps)(Map_side)

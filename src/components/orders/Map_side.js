import React from 'react'
import { connect } from 'react-redux'
import Map from './Map'
import getLocation from './getLocation'
const Map_side = ({ id, lat, lng }) => {
  return (
    <div
      style={{
        height: '500px',
        width: '100%',
        border: '2px solid #3F51B5',
        margin: '5px',
      }}
    >
      <div>
        <getLocation />
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

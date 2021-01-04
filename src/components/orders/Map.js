import React, { useState } from 'react'
import parse from 'html-react-parser'
import { Tooltip } from 'antd'
import { connect } from 'react-redux'
import GoogleMapReact from 'google-map-react'
import 'antd/dist/antd.css'

// const PhoneIc = [
//   <PhoneIcon></PhoneIcon>,
// ]
const Kurs = ({ info }) => (
  <Tooltip
    title={parse(
      `${info.name}<br><a href='tel:${info.tel_nomer}'>${info.tel_nomer}
      </a>`,
    )}
  >
    <span style={{ cursor: 'pointer' }}>
      <img
        style={{ transform: `rotate(210deg)` }}
        src="/kur.svg"
        width="30px"
        alt="kursvg"
      ></img>
    </span>
  </Tooltip>
)

const Osh = ({ info }) => (
  <Tooltip
    title={parse(
      `${info.e_nomi}<br><a href='tel:${info.e_tel}'>${info.e_tel}</a>`,
    )}
  >
    <span style={{ cursor: 'pointer' }}>
      <img src="/osh.svg" alt="" width="30px"></img>
    </span>
  </Tooltip>
)

const User = ({ info }) => (
  <Tooltip
    title={parse(
      `${info.u_ismi}<br><a href='tel:${info.u_tel}'>${info.u_tel}</a>`,
    )}
  >
    <span style={{ cursor: 'pointer' }}>
      <img src="/icon.png" width="30px"></img>
    </span>
  </Tooltip>
)

const SimpleMap = ({ kurs, taom, id, orders }) => {
  const [center, setCenter] = useState({
    lat: 40.387223,
    lng: 71.781686,
  })
  const user = orders.filter((or) => or.Id == id)

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '500px', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyDxF24Z9B8BW68bh1gRqaS6TP4z8YkpXNA' }}
        defaultCenter={center}
        defaultZoom={15}
      >
        {kurs
          ? kurs.map((k) => <Kurs lat={k.lat} lng={k.lan} info={k}></Kurs>)
          : null}

        {user
          ? user.map((e) => <Osh lat={e.lat} lng={e.lan} info={e}></Osh>)
          : null}

        {user
          ? user.map((k) => (
              <User lat={k.user_latit} lng={k.user_longit} info={k}></User>
            ))
          : null}
      </GoogleMapReact>
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    kurs: state.labbay.kurs,
    taom: state.labbay.taom,
    orders: state.labbay.orders,
  }
}
export default connect(mapStateToProps)(SimpleMap)

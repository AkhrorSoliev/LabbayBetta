import React from 'react'
import Map from './Map'
const Map_side = ({ id }) => {
  return (
    <div
      style={{
        height: '500px',
        width: '100%',
        border: '2px solid #3F51B5',
        margin: '5px',
      }}
    >
      <Map id={id}></Map>
    </div>
  )
}

export default Map_side

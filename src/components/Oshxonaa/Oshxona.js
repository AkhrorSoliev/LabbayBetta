import React from 'react'
import Category from './Category'
import Item from './Itme'
import Tamolar from './Tamolar'

function Oshxona() {
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        margin: '30px',
        justifyContent: 'space-between',
      }}
    >
      <div style={{ width: '28%' }}>
        <Category />
      </div>
      <div style={{ width: '28%' }}>
        <Item />
      </div>
      <div style={{ width: '38%' }}>
        <Tamolar />
      </div>
    </div>
  )
}

export default Oshxona

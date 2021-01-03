import React, { useState } from 'react'
import {Marker, InfoWindow } from "react-google-maps"
const KMarker = ({info}) => {
    const [open, setOpen] = useState(false)
    console.log(info.lat, info.lan)
    return (
        <Marker
        icon= {{ 
          url: '/kur.svg',
          scaledSize: new window.google.maps.Size(30, 30)
        }}
        onClick={()=> setOpen(true)}
       position={{ lat: Number(info.lat), lng:Number(info.lan) }} >
         {open ? <InfoWindow onCloseClick={()=> setOpen(false)}>
             <div>
             <h3>{info.name}</h3>
             <a href={`tel:${info.tel_nomer}`}>Qo'ng'iroq qilish</a>
             </div>
         </InfoWindow>: null}
       </Marker>
    )
}

export default KMarker

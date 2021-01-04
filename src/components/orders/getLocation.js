import React, { useState } from 'react'
import Geocode from 'react-geocode'

const GetAddress = ({ lat, lng }) => {
  const [add, setAdd] = useState()
  Geocode.setApiKey('AIzaSyDxF24Z9B8BW68bh1gRqaS6TP4z8YkpXNA')

  // set response language. Defaults to english.
  Geocode.setLanguage('en')

  // set response region. Its optional.
  // A Geocoding request with region=es (Spain) will return the Spanish city.
  Geocode.setRegion('es')

  // Enable or disable logs. Its optional.
  Geocode.enableDebug()

  // Get address from latitude & longitude.
  Geocode.fromLatLng(lat, lng).then(
    (response) => {
      const address = response.results[0].formatted_address
      setAdd(address)
    },
    (error) => {},
  )
  return <div>{add ? add : null}</div>
}

export default GetAddress

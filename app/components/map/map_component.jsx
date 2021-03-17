import React from 'react'
import GoogleMapReact from 'google-map-react'
import './map.css'
import LocationPin from './LocationPin.jsx' 

const location = {
  address: '1600 Amphitheatre Parkway, Mountain View, california.',
  lat: 37.42216,
  lng: -122.08427,
}

const MapComponent = ({ zoomLevel }) => {
  return (
    <div className="map">
      <h2 className="map-h2">Look at our map!</h2>
      <div className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY }}
          defaultCenter={location}
          // defaultZoom={zoomLevel}
          defaultZoom = {17}
        >
          <LocationPin
            lat={location.lat}
            lng={location.lng}
            text={location.address}
          />
        </GoogleMapReact>
      </div>
    </div>
  )
}
export default MapComponent;

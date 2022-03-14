import GoogleMapReact from 'google-map-react';
import React from 'react';
const MapMarker = ({ text }) => <div>{text}</div>;

export default function GeoMap() {
  const center = {
    lat: 59.95,
    lng: 30.33,
  };
  const zoom = 11;

  return (
    <>
      <div className="w-100" style={{ height: '350px' }}>
        <GoogleMapReact defaultCenter={center} defaultZoom={zoom}>
          <MapMarker lat={59.955413} lng={30.337844} text="UiFort" />
        </GoogleMapReact>
      </div>
    </>
  );
}

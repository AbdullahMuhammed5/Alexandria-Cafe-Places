import React from 'react';
import { compose, withProps, withStateHandlers } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps"


export const Map = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyDAPrsddryOaEdtf101LMvqwjPjskS9hpY&libraries=geometry,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100vh`, width: `100%`, zIndex: -1 }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withStateHandlers(() => ({
        showInfow: '0'
    }), {
        onToggleOpen: ({ isOpen }) => () => ({
            isOpen: !isOpen,
        }),
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={props.setZoom}
    defaultCenter={props.setCenter}
  >
  {props.locations.map((loc, index) => {
          return (

            <Marker
              position={{ lat: loc.location.lat, lng: loc.location.lng }}
              icon={ (props.showInfoIndex === index ) ? props.markerIcon : props.defaultIcon}
              key={loc.location.lat}
              className="marker"
              onClick={ (event)=>{ props.showInfo(event, { lat: loc.location.lat, lng: loc.location.lng }, index)} }>

              { (props.showInfoIndex === index ) && <InfoWindow
                    onCloseClick={props.onToggleOpen}
                  >
                    <div style={{ opacity: 0.75, padding: `12px` }}>
                      <div style={{ fontSize: `16px` }}>
                        <strong>{loc.name}</strong>
                             <p>{loc.location.city}</p>
                             <p>{loc.location.address}</p>
                             <p>{loc.location.country}</p>
                        <a href={ "https://www.google.com/maps/?q=" + loc.location.lat + "," + loc.location.lng }>View in google maps</a> 
                      </div>
                    </div>
                    
                  </InfoWindow>}
              </Marker>
            )
        })}
</GoogleMap>
);
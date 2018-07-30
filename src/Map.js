import React from 'react';
import { compose, withProps, withStateHandlers, lifecycle } from "recompose"
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
  lifecycle({
        componentDidCatch(error) {
            console.log(error)
            alert("Error while trying to render google maps API, Please check your credentials")
        }
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
                      <div style={{ fontSize: `16px` }} tabIndex="0">
                        <strong>{loc.name}</strong>
                             <div tabIndex="0">{loc.location.city}</div>
                             <div tabIndex="0">{loc.location.address}</div>
                             <div tabIndex="0">{loc.location.country}</div>
                        <a href={ "https://www.google.com/maps/?q=" + loc.location.lat + "," + loc.location.lng } tabIndex="0">View in google maps</a> 
                      </div>
                    </div>
                    
                  </InfoWindow>}
              </Marker>
            )
        })}
</GoogleMap>
);

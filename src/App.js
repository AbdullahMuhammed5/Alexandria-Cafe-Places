import React, { Component } from 'react';
import './App.css';
import { Map } from './Map.js';
import SideMenu from './SideMenu.js'
import * as LocationsAPI from './LocationsAPI'
import escapeRegExp from 'escape-string-regexp'

class App extends Component {
	state = {
	  query: '',
      locations: [], // all locations
      isOpen: false,
      selectedMarkerIndex: 0,
      showInfoIndex: -1 ,
      filteredLocations: [], 
      newCenter: { lat: 31.274827, lng: 30.0236666 },
      newZoom: 14,
      menuStatus: false,
      markerIcon: {},
      iconUrl: "http://maps.google.com/mapfiles/ms/icons/blue.png"
  	}

	componentDidMount() { // will work right after page UI loading

     LocationsAPI.getAll().then((locations) => {
        this.setState({locations})
        console.log(locations)
      }).catch(() => {
        alert('Failed while fetching api request, it maybe hppened when you have error in your connection or you have wrong api key, please check them.');
        console.log(
          'Failed while fetching api request, it maybe hppened when you have error in your connection or you have wrong api key, please check them.'
        );
      });

    }

    handleMarkerClicked = (event, latlng, indx) => {
      this.setState({
        showInfoIndex: indx,
        newCenter : latlng,
        markerIcon: '',
        zoom: 17
      })
      document.getElementById("mySidenav").style.width = "0";
    }
    
    openNav = () => { // open side menu
        document.getElementById("mySidenav").style.width = "400px";
          this.setState({ menuStatus: !this.state.menuStatus })
    }

    closeNav = () => { // close side menu
        document.getElementById("mySidenav").style.width = "0";
          this.setState({ menuStatus: !this.state.menuStatus })
    }
    
    updateQuery = (query) => {
        this.setState({ query })
    }

  render() {
    const { query, showInfoIndex, newCenter, newZoom } = this.state
    let filteredLocations = []

    if(query) { // if user search for a place 
        const match = new RegExp(escapeRegExp(query), 'i');
        filteredLocations = this.state.locations.filter((place) => match.test(place.name))
    } else { // defualt mode, all locations are shown
        filteredLocations = this.state.locations
    }

    return (
    	<main>
	        <Map 
	        	locations={filteredLocations}
	        	showInfo={this.handleMarkerClicked}
	        	showInfoIndex = {showInfoIndex}
	        	setCenter={newCenter}
	        	setZoom={newZoom}
            markerIcon={this.state.markerIcon}
            defaultIcon={this.state.iconUrl} />

	        <SideMenu 
	        	query={query}
	        	update={this.updateQuery}
	        	filteredLocations={filteredLocations}
	        	onLocationsClicked={this.handleMarkerClicked}
	        	showInfoIndex = {showInfoIndex}
            menuStatus={this.state.menuStatus}
            onOpenMenu={this.openNav}
            onCloseMenu={this.closeNav} />
        </main>
    );
  }
}

export default App;

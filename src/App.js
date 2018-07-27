import React, { Component } from 'react';
import './App.css';
import { Map } from './Map.js';
import SideMenu from './SideMenu.js'
import * as LocationsAPI from './LocationsAPI'
import escapeRegExp from 'escape-string-regexp'

class App extends Component {
	state = {
	  query: '',
      locations: [],
      isOpen: false,
      selectedMarkerIndex: 0,
      showInfoIndex: -1 ,
      filteredLocations: [], 
      newCenter: { lat: 31.274827, lng: 30.0236666 },
      newZoom: 14
  	}

	componentDidMount() {

     LocationsAPI.getAll().then((locations) => {
        this.setState({locations})
      })
    }

    updateQuery = (query) => {
        this.setState({ query })
    }
    // changecolor(){
    // 	    document.getElementById('marker').style.color="yellow"
    // }
    handleLocationClickEvent = (index, lat2, lng2) => {
    	this.setState({ showInfoIndex: index ,
    					isOpen: !this.state.isOpen, 
    					newCenter: { lat: lat2, lng: lng2 },
    					newZoom: 7 })
    	document.getElementById("mySidenav").style.width = "0";
    	// this.changecolor
    }

  render() {
    const { query, showInfoIndex, newCenter, newZoom } = this.state
    let filteredLocations = []

    if(query) {
        const match = new RegExp(escapeRegExp(query), 'i');
        filteredLocations = this.state.locations.filter((place) => match.test(place.name))

    } else {
        filteredLocations = this.state.locations
    }

    return (
    	<main>
	        <Map 
	        	locations={filteredLocations}
	        	showInfo={this.handleLocationClickEvent}
	        	showInfoIndex = {showInfoIndex}
	        	setCenter={newCenter}
	        	setZoom={newZoom}/>
	        <SideMenu 
	        	query={query}
	        	update={this.updateQuery}
	        	filteredLocations={filteredLocations}
	        	onLocationsClicked={this.handleLocationClickEvent}
	        	showInfoIndex = {showInfoIndex} />
        </main>
    );
  }
}

export default App;

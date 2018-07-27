import React, { Component } from 'react';
import './App.css';


class SideMenu extends Component {

	openNav() {
	    document.getElementById("mySidenav").style.width = "400px";
	}

	closeNav() {
	    document.getElementById("mySidenav").style.width = "0";
	}

  render() {

    return (
    	<div id='menu-content'>

    	<span id='menu-icon' onClick={this.openNav}>&#9776; Open Menu</span>
    	
		<div id="mySidenav" className="sidenav">
				<div className="search-form">
                    <input type="text" placeholder="Search Here" role="textbox" aria-label = "Enter Your Cafe Name" onChange={(e) => {
                    	this.props.update(e.target.value)
                    	}} value={this.props.query}/>
                </div>
                <ul className="search-result">
                    {this.props.filteredLocations.map((loc, index) => (
                        <li className="item" key={loc.id}><a className="cafe-link" href="#" onClick={ () => {this.props.onLocationsClicked(index, loc.location.lat, loc.location.lng) }}>{loc.name}</a></li>
                    ))}
                </ul>
		  	<a href="javascript:void(0)" className="closebtn" onClick={this.closeNav}>&times;</a>  
		</div>
    	
    	</div>
    );
  }
}
export default SideMenu;
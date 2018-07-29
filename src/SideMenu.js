import React, { Component } from 'react';
import './App.css';


class SideMenu extends Component {

    
  render() {
    let tabindex = -1; // set tabindex value to -1, this default case when the menu is hidden to prevent tab key event. 

    if(this.props.menuStatus == true){
        tabindex = 0; // set tabindex to 0 if the menu is opened 
    }

    return (
    	<div id='menu-content'>

    	<span id='menu-icon' onClick={this.props.onOpenMenu}>&#9776; Open Menu</span>
    	
		<div id="mySidenav" className="sidenav">
				<div className="search-form">
                    <input  type="text" 
                            tabIndex={tabindex} 
                            placeholder="Search Here" 
                            role="textbox" 
                            aria-label = "Enter Your Cafe Name" 
                            onChange={(e) => {
                    	this.props.update(e.target.value)
                    	}} value={this.props.query}/>
                </div>
                <ul className="search-result" role ="menu" tabIndex={tabindex} 
                    arial-label="List of cafe places">
                    {this.props.filteredLocations.map((loc, index) => (
                        <li className="item" 
                            tabIndex={tabindex} 
                            role="none" 
                            key={loc.id}>
                            <a className="cafe-link" href="#" role ="menuitem"
                            onClick={ (event) => {this.props.onLocationsClicked(event, { lat: loc.location.lat, lng: loc.location.lng }, index) }}>{loc.name}</a></li>
                    ))}
                </ul>
		  	<a href="javascript:void(0)" className="closebtn" onClick={this.props.onCloseMenu}>&times;</a>  
		</div>
    	
    	</div>
    );
  }
}
export default SideMenu;
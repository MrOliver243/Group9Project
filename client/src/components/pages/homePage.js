

import React, { Component } from 'react';
//import './Assets/css/default.css';
import steak from '../imag/steak.jpg';
import cherries from '../imag/cherries.png';
import croissant from '../imag/croissant.jpg';
import popsicle from '../imag/popsicle.jpg';
import salmon from '../imag/salmon.jpg';
import sandwich2 from '../imag/sandwich2.jpg';
import wine from '../imag/wine.jpg';
import sandwich from '../imag/sandwich.jpg';

class Homepage extends Component {
  render() {
    return (
	
      <div>
  <title>W3.CSS Template</title>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Karma" />
  <style dangerouslySetInnerHTML={{__html: "\nbody,h1,h2,h3,h4,h5,h6 {font-family: \"Karma\", sans-serif}\n.w3-bar-block .w3-bar-item {padding:20px}\n" }} />
  {/* Sidebar (hidden by default)*/ }
  <nav className="w3-sidebar w3-bar-block w3-card w3-top w3-xlarge w3-animate-left" style={{display: 'none', zIndex: 2, width: '40%', minWidth: '300px'}} id="mySidebar">
    <a href="javascript:void(0)" onclick="w3_close()" className="w3-bar-item w3-button">Close Menu</a>
    <a href="#food" onclick="w3_close()" className="w3-bar-item w3-button">Games</a>
    <a href="#about" onclick="w3_close()" className="w3-bar-item w3-button">About</a>
  </nav>
  {/* Top menu */}
 <div className="topnav">
  <input type="text" placeholder="Search.." />
</div>
  {/* !PAGE CONTENT! */}
  <div className="w3-main w3-content w3-padding" style={{maxWidth: '1200px', marginTop: '100px'}}>
    {/* First Photo Grid*/}
    <div className="w3-row-padding w3-padding-16 w3-center" id="food">
      <div className="w3-quarter">
         <img src={sandwich} alt="Search icon" style={{width: '100%'}}/>
        <h3>CALL OF DUTY</h3>
        <p>Modern Warfare at its best</p>Experience Call of Duty on different platforms.<p />
      </div>
      <div className="w3-quarter">
  <img src={steak} alt="Steak" style={{width: '100%'}} />
        <h3>WWE 2K19</h3>
        <p>Let Me Tell You About Wrestling</p>
        <p>Sports Entertainment brought straight to your screen. </p>
      </div>
      <div className="w3-quarter">
        <img src={cherries} alt="Cherries" style={{width: '100%'}} />
        <h3>Uncharted: Lost Legacy</h3>
        <p>Adventures, uninterrupted</p>
        <p>Ever wished you were a treasure hunter? Wait no more, travel around the world with Chloe Frazer and friends.</p>
        <p>What else?</p>
      </div>
      <div className="w3-quarter">
        <img src={wine} alt="Pasta and Wine" style={{width: '100%'}} />
        <h3>WatchDogs</h3>
        <p>Once Again, Bring the System down from within as an unstoppable hacker.</p>
      </div>
    </div>
    {/* Second Photo Grid*/}
    <div className="w3-row-padding w3-padding-16 w3-center">
      <div className="w3-quarter">
        <img src={popsicle} alt="Popsicle" style={{width: '100%'}} />
        <h3>Assassin Creed: Unity</h3>
        <p>All I Need Is a Mission</p>
      </div>
      <div className="w3-quarter">
        <img src={salmon} alt="Salmon" style={{width: '100%'}} />
        <h3>Super Heroes 2</h3>
        <p>Avengers, Assemble.</p>
      </div>
      <div className="w3-quarter">
        <img src={sandwich2} alt="Sandwich" style={{width: '100%'}} />
        <h3>Destiny</h3>
        <p>The Perfect Game, A Real Classic</p>
      </div>
      <div className="w3-quarter">
        <img src={croissant} alt="Croissant" style={{width: '100%'}} />
        <h3>Fifa 20</h3>
        <p>BREAK NEW GROUND</p>
      </div>
    </div>
    {/* Pagination */}
    <div className="w3-center w3-padding-32">
      <div className="w3-bar">
        <a href="#" className="w3-bar-item w3-button w3-hover-black">«</a>
        <a href="#" className="w3-bar-item w3-black w3-button">1</a>
        <a href="#" className="w3-bar-item w3-button w3-hover-black">2</a>
        <a href="#" className="w3-bar-item w3-button w3-hover-black">3</a>
        <a href="#" className="w3-bar-item w3-button w3-hover-black">4</a>
        <a href="#" className="w3-bar-item w3-button w3-hover-black">»</a>
      </div>
    </div>
    
   
   
   
  </div>
  //<div id="like_button_container" />
</div>


    );
  }
}

export default Homepage;


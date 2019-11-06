import React, { Component } from 'react';

class Homepage extends Component {
  render() {
    return (
      <div className='container-fluid'>

        <h1>Home Page Content</h1>
         <!-- Sidebar (hidden by default) 
<nav class="w3-sidebar w3-bar-block w3-card w3-top w3-xlarge w3-animate-left" style="display:none;z-index:2;width:40%;min-width:300px" id="mySidebar">
  <a href="javascript:void(0)" onclick="w3_close()"
  class="w3-bar-item w3-button">Close Menu</a>
  <a href="#food" onclick="w3_close()" class="w3-bar-item w3-button">Games</a>
  <a href="#about" onclick="w3_close()" class="w3-bar-item w3-button">About</a>
</nav>

<!-- Top menu -->
  
<div class="w3-top">
  <div class="w3-white w3-xlarge" style="max-width:1200px;margin:auto">
    <div class="w3-button w3-padding-16 w3-left" onclick="w3_open()">☰</div>
    <div class="w3-right w3-padding-16">Mail</div>
    <div class="w3-center w3-padding-16">MyGameList</div>
  </div>
</div>
  
<!-- !PAGE CONTENT! -->
<div class="w3-main w3-content w3-padding" style="max-width:1200px;margin-top:100px">

  <!-- First Photo Grid-->
  <div class="w3-row-padding w3-padding-16 w3-center" id="food">
  
    <div class="w3-quarter">
      <img src="sandwich.jpg" alt="Sandwich" style="width:100%">
      <h3>CALL OF DUTY</h3>
	  <p>Modern Warfare at its best</p
      <p>Experience Call of Duty on different platforms.</p>
    </div>
	
	
    <div class="w3-quarter">
      <img src="w3images/steak.jpg" alt="Steak" style="width:100%">
	  <h3>WWE 2K19</h3>
      <p>Let Me Tell You About Wrestling</p>
      <p>Sports Entertainment brought straight to your screen. </p>
    </div>
	
	
    <div class="w3-quarter">
      <img src="w3images/cherries.png" alt="Cherries" style="width:100%">
	  <h3>Uncharted: Lost Legacy</h3>
      <p>Adventures, uninterrupted</p>
      <p>Ever wished you were a treasure hunter? Wait no more, travel around the world with Chloe Frazer and friends.</p>
      <p>What else?</p>
    </div>
	
	
    <div class="w3-quarter">
      <img src="w3images/wine.jpg" alt="Pasta and Wine" style="width:100%">
      <h3>WatchDogs</h3>
      <p>Once Again, Bring the System down from within as an unstoppable hacker.</p>
    </div>
  </div>
  
  <!-- Second Photo Grid-->
  <div class="w3-row-padding w3-padding-16 w3-center">
    <div class="w3-quarter">
      <img src="w3images/popsicle.jpg" alt="Popsicle" style="width:100%">
      <h3>Assassin Creed: Unity</h3>
      <p>All I Need Is a Mission</p>
    </div>
	
	
    <div class="w3-quarter">
      <img src="w3images/salmon.jpg" alt="Salmon" style="width:100%">
      <h3>Super Heroes 2</h3>
      <p>Avengers, Assemble.</p>
    </div>
	
	
    <div class="w3-quarter">
      <img src="w3images/sandwich2.jpg" alt="Sandwich" style="width:100%">
      <h3>Destiny</h3>
      <p>The Perfect Game, A Real Classic</p>
    </div>
	
	
    <div class="w3-quarter">
      <img src="w3images/croissant.jpg" alt="Croissant" style="width:100%">
      <h3>Fifa 20</h3>
      <p>BREAK NEW GROUND</p>
    </div>
	
  </div>

  <!-- Pagination -->
  <div class="w3-center w3-padding-32">
    <div class="w3-bar">
      <a href="#" class="w3-bar-item w3-button w3-hover-black">«</a>
      <a href="#" class="w3-bar-item w3-black w3-button">1</a>
      <a href="#" class="w3-bar-item w3-button w3-hover-black">2</a>
      <a href="#" class="w3-bar-item w3-button w3-hover-black">3</a>
      <a href="#" class="w3-bar-item w3-button w3-hover-black">4</a>
      <a href="#" class="w3-bar-item w3-button w3-hover-black">»</a>
    </div>
  </div>
  
  <hr id="about">

  <!-- About Section -->
  <div class="w3-container w3-padding-32 w3-center">  
    <h3>About Us, The Game Men</h3><br>
    <img src="w3images/chef.jpg" alt="Me" class="w3-image" style="display:block;margin:auto" width="800" height="533">
    <div class="w3-padding-32">
      <h4><b>We are Who We are!</b></h4>
      <h6><i>With Passion For Real, Good Games</i></h6>
      <p>.</p>
    </div>
  </div>
  <hr>
  
  <!-- Footer 
  <footer class="w3-row-padding w3-padding-32">
    <div class="w3-third">
      <h3>FOOTER</h3>
      <p>Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
      <p>Powered by <a href="https://www.w3schools.com/w3css/default.asp" target="_blank">w3.css</a></p>
    </div> -->
  
    <div class="w3-third">
      <h3>BLOG POSTS</h3>
      <ul class="w3-ul w3-hoverable">
        <li class="w3-padding-16">
          <img src="/w3images/workshop.jpg" class="w3-left w3-margin-right" style="width:50px">
          <span class="w3-large">Lorem</span><br>
          <span>Sed mattis nunc</span>
        </li>
        <li class="w3-padding-16">
          <img src="/w3images/gondol.jpg" class="w3-left w3-margin-right" style="width:50px">
          <span class="w3-large">Ipsum</span><br>
          <span>Praes tinci sed</span>
        </li> 
      </ul>
    </div>

<!--
    <div class="w3-third w3-serif">
      <h3>POPULAR TAGS</h3>
      <p>
        <span class="w3-tag w3-black w3-margin-bottom">Travel</span> <span class="w3-tag w3-dark-grey w3-small w3-margin-bottom">New York</span> <span class="w3-tag w3-dark-grey w3-small w3-margin-bottom">Dinner</span>
        <span class="w3-tag w3-dark-grey w3-small w3-margin-bottom">Salmon</span> <span class="w3-tag w3-dark-grey w3-small w3-margin-bottom">France</span> <span class="w3-tag w3-dark-grey w3-small w3-margin-bottom">Drinks</span>
        <span class="w3-tag w3-dark-grey w3-small w3-margin-bottom">Ideas</span> <span class="w3-tag w3-dark-grey w3-small w3-margin-bottom">Flavors</span> <span class="w3-tag w3-dark-grey w3-small w3-margin-bottom">Cuisine</span>
        <span class="w3-tag w3-dark-grey w3-small w3-margin-bottom">Chicken</span> <span class="w3-tag w3-dark-grey w3-small w3-margin-bottom">Dressing</span> <span class="w3-tag w3-dark-grey w3-small w3-margin-bottom">Fried</span>
        <span class="w3-tag w3-dark-grey w3-small w3-margin-bottom">Fish</span> <span class="w3-tag w3-dark-grey w3-small w3-margin-bottom">Duck</span>
      </p>
    </div>
  </footer>

<!-- End page content -->
</div>
          

      </div>
    );
  }
}

export default Homepage;

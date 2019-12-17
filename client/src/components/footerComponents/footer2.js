import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


class Footer extends Component {
  render() {
    return (



      <footer>







        <li className="center">
          <Link to  ="/About">About</Link>
        </li>


        <div class="row" >
        <div class="col"  >Contact us: thegateway@email.ie
        <p>Lead Admin: 086192999</p>
        </div>
        <div class="col" >Placeholder</div>
        <div class="col" >Placeholder</div>
        <div class="col" >Placeholder</div>

        </div>

      </footer>



    );
  }
}

export default Footer;

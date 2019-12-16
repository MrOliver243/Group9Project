import React from "react";
import { Component } from "react";
//import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
//import {getAllGames} from "../../Redux/actions/dataActions";
import ElementDisplay from "../Pages/ElementDisplay";

class MainPage extends Component {
  constructor(props) {
    super(props); //Get our keys //for each react element..
    //this.nReviews = [...Array(getReview.length).keys()];
    this.nGames = [...Array(this.props.projectBase.length).keys()];
  }
  render() {
    //Dummy element displaysconst passGame = getAllGames;const passGame = [0,0,0];
    const passGame = this.props.projectBase;
    const projects = this.nGames.map(p => (
      <ElementDisplay
        key={p.toString()}
        // var indexNo={passUser[p].i}
        gameTitle={passGame[p].title}
        gameDes={passGame[p].description}
        gameRats={passGame[p].rating}
        gameOffic={"none"}
        gameWiki={"none"}
        gameWpedia={"none"}
        gameImage={passGame[p].image}
        pClick={this.props.pClick.bind(this.props.passThis, passGame[p])}
      />
    ));
    return <div className="main-page">{projects}</div>;
  }
}

export default MainPage;

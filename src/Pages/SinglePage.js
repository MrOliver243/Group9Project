import React from "react";
import { Component } from "react";
import ElementDisplay from "../pages/ElementDisplay";

//import postReview from "../Redux/actions/getAllGames"
class SinglePage extends Component {
  constructor(props) {
    super(props);
    this.nGames = [...Array(getAllGames.length).keys()]; //Get our keys //for each react element..
    this.nReviews = [...Array(getScreams.length).keys()];
  }
  render() {
    //Dummy element displays
    const passGame = getAllGames;
    const passReview = getScreams;
    const projects = this.nGames.map(p => (
      <ElementDisplay
        key={p.toString()}
       // var indexNo={passUser[p].i}
	   gameTitle={passGame[p].title}
	    gameDes={passGame[p].description}
        gameRats={passGame[p].ratings}
		gameOffic= {passGame[p].Officialwebsite}
		gameWiki= {passGame[p].Wikipage}
		gameWpedia= {passGame[p].Wikipediapage}
        gameImag = {passGame[p].image}
        //pClick={this.props.pClick/*(passUser[p].i)*/}
                                          
        pClick={this.props.pClick/*(passUser[p].i)*/}
                                        
                                        
      />
    ));
	
	const pros = this.nReviews.map(p => (
	<ElementDisplay
	 gameRev= {passReview[p].review}
        gameHandle = {passReview[p].handle}
		
		 pClick={this.props.pClick/*(passUser[p].i)*/}
		/>
	));
    return (
      <div className="main-page">
        {projects}
      </div>
    );
  }
}

export default SinglePage;
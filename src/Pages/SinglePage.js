import React from "react";
import { Component } from "react";
import ElementDisplay from "./ElementDisplay";
import { getReviews } from "../CallServer/dataActions";
//import postReview from "../Redux/actions/getAllGames"
class SinglePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstRun: false,
      reviews: null
    };
  }

  async initData() {
    const grabRev = await getReviews(this.props.projectBase[0].title);
    return grabRev;
  }
  async loadFirstData() {
    if (!this.state.firstRun) {
      const reviews = await this.initData(); // pull of the reviews
      this.setState({ firstRun: true });
      const nReviews = [...Array(reviews.length).keys()];
      const pros = nReviews.map(p => (
        <ElementDisplay
          gameRev={reviews[p].review}
          gameHandle={reviews[p].handle}
          pClick={null}
        />
      ));
      this.setState({ reviews: [...pros] });
    }
  }
  switchPages() {
    this.loadFirstData();
    return this.state.reviews;
  }
  render() {
    //Dummy element displays
    const nGames = [...Array(this.props.projectBase.length).keys()];
    const passGame = this.props.projectBase;
    const games = nGames.map(p => (
      <ElementDisplay
        key={p.toString()}
        // var indexNo={passUser[p].i}
        gameTitle={passGame[p].title}
        gameDes={passGame[p].description}
        gameRats={passGame[p].rating}
        gameWiki={passGame[p].wikiPage}
        gameWpedia={passGame[p].wikipediaPage}
        gameImage={passGame[p].image}
        pClick={this.props.pClick}
      />
    ));
    return (
      <div className="single-page">
        {games}
        {this.switchPages()}
      </div>
    );
  }
}

export default SinglePage;

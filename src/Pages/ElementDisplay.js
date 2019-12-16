import React from "react";
import { Component } from "react";
//import pImage from "../img/user-project.jpg";

class ElementDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      expand: false
    };
    this.likeBtn = this.likeBtn.bind(this);
    this.dislikeBtn = this.dislikeBtn.bind(this);
    this.expandBtn = this.expandBtn.bind(this);
  }
  likeBtn() {
    this.setState({ total: this.state.total + 1 });
  }
  dislikeBtn() {
    this.setState({ total: this.state.total - 1 });
  }

  expandBtn() {
    this.setState({ expand: !this.state.expand });
  }

  render() {
    const length = 200;
    const showcasePreview =
      this.props.gameDes.length >= length && !this.state.expand
        ? this.props.gameDes.substring(0, length)
        : this.props.gameDes;
    const gameOfc =
      this.props.gameOffic == "none" ? (
        ""
      ) : (
        <a href={this.props.gameOffic}>
          {" "}
          <div class="">Official website</div>
        </a>
      );
    const gameWiki =
      this.props.gameWiki == "none" ? (
        ""
      ) : (
        <a href={this.props.gameWiki}>
          {" "}
          <div class="">Wiki page</div>
        </a>
      );
    const gameWpedia =
      this.props.gameWpedia == "none" ? (
        ""
      ) : (
        <a href={this.props.gameWpedia}>
          {" "}
          <div class="">Wikipedia page</div>
        </a>
      );
    const gameImage = this.props.gameImage;
    const gameRats = this.props.gameRats;
    const gameTitle = this.props.gameTitle;
    const gameRev =
      this.props.gameReview == "none" ? "" : this.props.gameReview;
    const gameHandle =
      this.props.gameHandle == "none" ? "" : this.props.gameHandle;
    const expand = this.state.expand ? "d-flex container" : "container";
    //const fullPage = !this.state.expand ? "container" : "d-flex container";
    return (
      <div className={"user-projects card " + expand}>
        <img src={gameImage} className="card-img-top"></img>
        <div className="card-body">
          <div className="card-title">
            <i>
              <strong>Ratings: </strong>
              {gameRats}
            </i>
          </div>

          <h6 className="card-title">
            <i>{gameTitle}</i>
          </h6>
          <a className="hover" onClick={this.expandBtn}>
            <p className="card-text">{showcasePreview}</p>
          </a>
          <div class="row">
            {gameOfc}
            {gameWiki}
            {gameWpedia}
          </div>

          <div className="btn-group-vertical float-right">
            <button className=" like-btn" onClick={this.likeBtn}>
              <i className="material-icons">keyboard_arrow_up</i>
            </button>
            <span className="container text-center">{this.state.total}</span>
            <button className=" dislike-btn" onClick={this.dislikeBtn}>
              <i className="material-icons">keyboard_arrow_down</i>
            </button>
            <a className="hover" onClick={this.props.pClick}>
              <i className="icon-size material-icons">description</i>
            </a>
          </div>

          <div>
            <div className="member-review">
              <div className="colb">{gameHandle}</div>
              <p className="review">{gameRev}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ElementDisplay;

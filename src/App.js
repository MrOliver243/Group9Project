import "./css/style.css";
import React from "react";
import { Component } from "react";
import MainPage from "./Pages/MainPage";
import LoadingScreen from "./Pages/LoadingScreen";
import { getAllGames } from "./CallServer/dataActions";
import SinglePage from "./Pages/SinglePage";

class App extends Component {
  constructor(props) {
    super(props);
    //A dummy component to be shown before api is pulled
    const dummyComponent = (
      <MainPage
        projectBase={[
          {
            title: "Example dummy",
            description: "Example",
            ratings: "Example",
            image: "example"
          }
        ]}
        pClick={this.pClick}
      />
    );

    this.bClick = this.bClick.bind(this);
    this.state = {
      firstRun: false,
      load: false,
      prevPage: null,
      displayScreen: dummyComponent
    };
  }

  async initData() {
    const fetchGames = await getAllGames();
    return fetchGames;
  }
  pClick(game) {
    this.callLoad();
    console.log(game);
    const setAr = []
    setAr.push(game);
    console.log(setAr);
    this.setState({
      displayScreen: <SinglePage projectBase={setAr} pClick={null} />
    });
  }

  bClick() {
    this.callLoad();
    this.setState({ displayScreen: this.state.prevPage });
  }
  callLoad() {
    this.setState({ prevPage: this.state.displayScreen });
    this.setState({ load: false });
    this.componentDidMount();
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ load: true });
    }, 1000);
  }
  async loadFirstData() {
    if (!this.state.firstRun) {
      const allGames = await this.initData();
      this.setState({ firstRun: true });
      this.setState({
        displayScreen: (
          <MainPage
            projectBase={allGames}
            pClick={this.pClick}
            passThis={this}
          />
        )
      });
    }
  }
  switchPages() {
    this.loadFirstData(); // Initialize all data to be injected..
    if (!this.state.load) {
      return <LoadingScreen />;
    }
    return this.state.displayScreen;
  }

  render() {
    const backButton =
      this.state.prevPage !== null ? (
        <div className="container fixed-bottom">
          <a className="hover" onClick={this.bClick}>
            <i className="material-icons fixed-bottom back-btn">
              subdirectory_arrow_left
            </i>
          </a>
        </div>
      ) : (
        ""
      );
    return (
      <div className="App">
        {backButton}
        {this.switchPages()}
      </div>
    );
  }
}

export default App;

/*

  useful links to work off

  https://www.youtube.com/watch?v=-A0TMwcXC9s&list=PLMhAeHCz8S38ryyeMiBPPUnFAiWnoPvWP&index=22

  https://www.youtube.com/watch?v=Xa7ECigMWRs

  https://www.youtube.com/watch?v=Y4NHqDp88lA

  https://console.firebase.google.com/project/react-game-website/


*/

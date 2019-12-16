import "./Assets/css/style.css";
import React from 'react';
import { Component } from "react";
import MainPage from './components/pages/MainPage';
import SinglePage from './components/pages/SinglePage';
import LoadingScreen from "./components/pages/LoadingScreen";
import {getAllGames} from "./Redux/actions/dataActions";

class App extends Component {
  constructor(props) {
    super(props);
    this.bClick = this.bClick.bind(this);
    this.state = {
	  projects: null,
      load: false,
      prevPage: <MainPage/>,
      displayScreen: (
		<MainPage/>
      )
    };
  }
  
  async pullGames() {
	await setTimeout(() => {
		console.log("hello:",getAllGames());
		this.setState({projects:getAllGames()});
		this.setState({displayScreen: 
		<MainPage
          pClick={this.pClick}
          passThis={this}
		  projectBase = {this.state.projects}
        />
	});
	},1000);
  }
  
  gClick(){
	this.callLoad();
    this.setState({ displayScreen: <Games /> });
  }
  
  pClick(gameTitle) {
    this.callLoad();
    const gameProjects = Games.filter(function(o) {
      return o.name === gameTitle;
    });
    this.setState({
      displayScreen: <SinglePage uName={gameTitle} projectBase={gameProjects} />
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
	this.pullGames();
    setTimeout(() => {
      this.setState({ load: true });
    }, 1000);
  }
  switchPages() {
    if (!this.state.load) {
      return <LoadingScreen />;
    }
    return this.state.displayScreen;
  }
  
  render() {
	console.log(this.state.projects);
    const backButton =
      this.state.displayScreen.type.name !== "MainPage" ? (
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

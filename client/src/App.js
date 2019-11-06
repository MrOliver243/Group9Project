import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//components here
import Header from './components/headerComponents/header';
import Footer from './components/footerComponents/footer';
import Homepage from './components/pages/homePage';
import Games from './components/pages/games';

//redux
import { Provider } from 'react-redux';
import store from './Redux/store';

//includes css file
import './Assets/css/default.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
          <Switch>

            <Route exact path='/' component={ Homepage } />
            <Route exact path='/Games' component={ Games } />

          </Switch>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;

/*

  useful links to work off

  https://www.youtube.com/watch?v=-A0TMwcXC9s&list=PLMhAeHCz8S38ryyeMiBPPUnFAiWnoPvWP&index=22

  https://www.youtube.com/watch?v=Xa7ECigMWRs

  https://www.youtube.com/watch?v=Y4NHqDp88lA

  https://console.firebase.google.com/project/react-game-website/


*/

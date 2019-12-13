import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//components here
import Header from './components/headerComponents/header';
import Footer from './components/footerComponents/footer';
import Homepage from './components/pages/homePage';
import Games from './components/pages/games';
import FAQ from './components/pages/FAQ';
import About from './components/pages/about';



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

            <Route exact path='/' component={ Homepage } />
            <Route exact path='/FAQ' component={ FAQ } />

            <Route exact path='/' component={ Homepage } />
            <Route exact path='/About' component={ About } />



          </Switch>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;

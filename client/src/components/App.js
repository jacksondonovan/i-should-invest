import React from 'react';
import { Router, Route } from 'react-router-dom';
import Splash from './Splash';
import Header from './Header';
import About from './About';
import Contact from './Contact';
import history from '../history';

const App = () => {
  return (
    <div>
      <Router history={history}>
        <div>
          <Header />
          <Route path="/" exact component={Splash} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
        </div>
      </Router>
    </div>
  );
}

export default App;

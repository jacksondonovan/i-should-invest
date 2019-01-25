import React from 'react';
import Splash from './Splash';
import { Router, Route } from 'react-router-dom';
import history from '../history';

const App = () => {
  return (
    <div>
      <Router history={history}>
        <div>
          <Route path="/" exact component={Splash} />
        </div>
      </Router>
    </div>
  );
}

export default App;

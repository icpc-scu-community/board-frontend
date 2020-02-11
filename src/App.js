import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import { Board, Footer } from './Components';

const App = () => (
  <Router>
    <Switch>
      <Route
        path="/"
        component={props => (
          <div className="App">
            <Board {...props} />
            <Footer />
          </div>
        )}
      />
    </Switch>
  </Router>
);

export default App;

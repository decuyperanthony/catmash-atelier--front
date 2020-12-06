import React from 'react';

import {
  Route,
  Switch,
} from 'react-router-dom';

import './App.scss';


import RandomMatch from './RandomMatch';
import Ranking from './Ranking';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            return <RandomMatch />;
          }}
        />
        <Route
          exact
          path="/rank"
          render={() => {
            return <Ranking />;
          }}
        />
      </Switch>
    </div>
  );
}

export default App;

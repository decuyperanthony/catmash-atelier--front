import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
// == redux
import { Provider } from 'react-redux';
import store from './store';

import './index.css';

import App from './App/App';

ReactDOM.render(
  <Router>
    <React.StrictMode>
        <Provider store={store}>
          <App />
        </Provider>
      </React.StrictMode>
  </Router>,
  document.getElementById('root')
);



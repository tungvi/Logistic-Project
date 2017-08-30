import React from 'react';
import ReactDOM from 'react-dom';
import Landing from './pages/landing.js';


import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';

ReactDOM.render(
    
    <Router history={browserHistory}>
      <Route exact path="/" component={Landing}></Route>
    </Router>
  ,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, IndexRoute, Route } from 'react-router';
import { browserHistory } from 'react-router';
import '../css/style.scss';

import App from './components/App';
import Routes from './Routes';

const AppRoot = document.getElementById('App');

ReactDOM.render(
    <div>
        <Router history={browserHistory}>
          {Routes}
        </Router>
    </div>
    ,AppRoot);

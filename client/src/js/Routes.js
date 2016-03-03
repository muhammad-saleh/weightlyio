"use strict";
import React from 'react';
import { Router, Route, Link, IndexRoute } from 'react-router';
import { render } from 'react-dom';

import App from './components/App';
import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';

export default (
      <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="login" component={LoginPage} />
      </Route>
)

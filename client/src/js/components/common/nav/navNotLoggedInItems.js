"use strict";

import React from 'react';
import { Router, Route, Link, IndexRoute } from 'react-router';
import HomePage from '../../HomePage';
import LoginPage from '../../LoginPage';

export default class NavNotLoggedInItems extends React.Component {
    render() {
        return(
                <ul>
                    <li><Link to={HomePage.path}>NOT LOGGED IN</Link></li>
                    <li><Link to={LoginPage.path}>Login</Link></li>
                    <li><Link to={HomePage.path}>Home</Link></li>
                    <li><Link to={LoginPage.path}>Login</Link></li>
                    <li><Link to={HomePage.path}>Home</Link></li>
                    <li><Link to={LoginPage.path}>Login</Link></li>
                    <li><Link to={HomePage.path}>Home</Link></li>
                    <li><Link to={LoginPage.path}>Login</Link></li>
                    <li><Link to={HomePage.path}>Home</Link></li>
                    <li><Link to={LoginPage.path}>Login</Link></li>
                    <li><Link to={HomePage.path}>Home</Link></li>
                    <li><Link to={LoginPage.path}>Login</Link></li>
                </ul>
        )
    }
}

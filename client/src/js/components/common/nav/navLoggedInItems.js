"use strict";

import React from 'react';
import { Router, Route, Link, IndexRoute } from 'react-router';
import HomePage from '../../HomePage';
import LoginPage from '../../LoginPage';

export default class NavLoggedInItems extends React.Component {
    render() {
        return(
                <ul>
                    <li><Link to={HomePage.path}>LOGGED IN</Link></li>
                    <li><a href="http://localhost:3000/logout">Logout</a></li>
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

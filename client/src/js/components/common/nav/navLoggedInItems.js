"use strict";

import React from 'react';
import { Router, Route, Link, IndexRoute } from 'react-router';
import HomePage from '../../HomePage';
import LoginPage from '../../LoginPage';
import MenuItem from 'material-ui/lib/menus/menu-item';

export default class NavLoggedInItems extends React.Component {
    render() {
        return(
                <div>
                    <MenuItem><Link to={HomePage.path}>LOGGED IN</Link></MenuItem>
                    <MenuItem><a href="http://localhost:3000/logout">Logout</a></MenuItem>
                    <MenuItem><Link to={HomePage.path}>Home</Link></MenuItem>
                    <MenuItem><Link to={LoginPage.path}>Login</Link></MenuItem>
                </div>
        )
    }
}

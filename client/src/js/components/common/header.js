"use strict";

import React from 'react';
import { Router, Route, Link, IndexRoute } from 'react-router';
import HomePage from '../HomePage';
import LoginPage from '../LoginPage';

export default class Header extends React.Component {
    render() {
        return(
            <header>
                <nav>
                    <ul>
                        <li><Link to={HomePage.path}>Home</Link></li>
                        <li><Link to={LoginPage.path}>Login</Link></li>
                    </ul>
                </nav>
            </header>
        )
    }
}

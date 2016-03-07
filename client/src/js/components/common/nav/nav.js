"use strict";

import React from 'react';
import {Router, Route, Link, IndexRoute} from 'react-router';
import HomePage from '../../HomePage';
import LoginPage from '../../LoginPage';
import NavLoggedInItems from './NavLoggedInItems';
import NavNotLoggedInItems from './NavNotLoggedInItems';

export default class Nav extends React.Component {
    render() {
        let NavItems;
        if (this.props.user) {
            NavItems = <NavLoggedInItems/>
        } else {
            NavItems = <NavNotLoggedInItems/>
        }
        return (
            <nav>
                <button className="navTrigger" onClick={this.props.toggleNav}>
                    <i className="fa fa-bars"></i>
                </button>
                {NavItems}
            </nav>
        )
    }
}

"use strict";

import React from 'react';
import {Router, Route, Link, IndexRoute} from 'react-router';
import HomePage from '../../HomePage';
import LoginPage from '../../LoginPage';
import NavLoggedInItems from './NavLoggedInItems';
import NavNotLoggedInItems from './NavNotLoggedInItems';

import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';
import RaisedButton from 'material-ui/lib/raised-button';

import UserStore from '../../../stores/UserStore'


export default class Nav extends React.Component {
    componentWillMount() {
        this.state = {
            open: false
        }
    };

    handleToggle = () => {
        this.setState({open: !this.state.open});
        this.props.toggleNav();
    };

    render() {
        let NavItems;
        if (this.props.user) {
            NavItems = <NavLoggedInItems/>
        } else {
            NavItems = <NavNotLoggedInItems/>
        }
        return (
            <nav>
                <LeftNav open={this.state.open} className="navRoot" docked={false} onRequestChange={open => this.setState({open})}>
                <button className="navTrigger" onClick={this.handleToggle}><i className="fa fa-bars"></i></button>
                  {NavItems}
                </LeftNav>

            </nav>
        )
    }
}

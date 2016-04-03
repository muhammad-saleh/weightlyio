"use strict";

import React from 'react';
import { Router, Route, Link, IndexRoute } from 'react-router';
import HomePage from '../../HomePage';
import LoginPage from '../../LoginPage';
import MenuItem from 'material-ui/lib/menus/menu-item';
import UserStore from '../../../stores/UserStore';
import Avatar from 'material-ui/lib/avatar';

export default class NavLoggedInItems extends React.Component {
    handleLogout(e) {
        e.preventDefault();
        localStorage.removeItem('userToken');
        window.location.hash = '';
        window.location.href = window.location.href;
    }

    render() {
        return(
                <div>
                    <MenuItem className="menuUserTile">
                        <Avatar src={this.props.user.picture} />
                        <div>{this.props.user.name}</div>
                    </MenuItem>
                    <MenuItem>
                        <div className="logoutLink">
                            <a onClick={this.handleLogout}>Logout</a>
                        </div>
                    </MenuItem>
                </div>
        )
    }
}

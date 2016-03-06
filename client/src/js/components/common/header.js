"use strict";

import React from 'react';
import { Router, Route, Link, IndexRoute } from 'react-router';
import Nav from '../common/nav';
import FontAwesome from 'react-fontawesome';

export default class Header extends React.Component {
    render() {
        let loginRegisterButtons;

        if(!this.props.user && this.props.isLoading === false){
            loginRegisterButtons = (
                <div>
                    <button>Login</button>
                    or
                    <button>Register</button>
                </div>
            )
        }
        return(
            <header>
                <button className="navTrigger"><i className="fa fa-bars"></i></button>
                <div className="title">
                    <h1>Weightly</h1>
                    <h3>Your way to healthier life</h3>
                    {loginRegisterButtons}
                </div>

                <Nav />
            </header>
        )
    }
}

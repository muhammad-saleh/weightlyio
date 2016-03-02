"use strict";

import React from 'react';

export default class Header extends React.Component {
    render() {
        return(
            <header>
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/login">Login</a></li>
                        <li><a href="/signup">Signup</a></li>
                    </ul>
                </nav>
            </header>
        )
    }
}

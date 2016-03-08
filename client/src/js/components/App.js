'use strict';

import React from 'react';
import Header from './common/header';
import AppActions from '../actions/AppActions';
import UserStore from '../stores/UserStore';
import Nav from './common/nav/nav';
import FontAwesome from 'react-fontawesome';
import classNames from 'classnames';

class App extends React.Component {

    componentWillMount() {
        const Component = this;
        AppActions.getUser();

        Component.state = {
            isLoading: UserStore.getLoadingState(),
            navOpened: false
        }

        UserStore.addChangeListener(function() {
            Component.setState({user: UserStore.getUser()});
            Component.setState({isLoading: UserStore.getLoadingState()});
        });

    }

    toggleNav() {
        this.setState({
            navOpened: !this.state.navOpened
        })
    }

    render() {
        var navClass = classNames({'navOpened': this.state.navOpened});
        var childrenWithProps = React.Children.map(this.props.children, (child) => {
            return React.cloneElement(child, { user: this.state.user });
        });
        if (!this.state.user && this.state.isLoading) {
            return (
                <h1>Loading...</h1>
            )
        } else {
            return (
                <div user={this.state.user} isLoading={this.state.isLoading} className={navClass}>
                    <Nav user={this.state.user} toggleNav={this.toggleNav.bind(this)}/>
                    <Header user={this.state.user} isLoading={this.state.isLoading} />
                    <div className="contentContainer" user={this.state.user}>
                        {childrenWithProps}
                    </div>
                </div>
            )
        }
    }
}

App.path = '/';

export default App

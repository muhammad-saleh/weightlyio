'use strict';

import React from 'react';
import Header from './common/header';
import AppActions from '../actions/AppActions';
import UserStore from '../stores/UserStore';

class App extends React.Component {

    componentWillMount() {
        const Component = this;
        AppActions.getUser();

        Component.state = {
            isLoading: UserStore.getLoadingState()
        }

        UserStore.addChangeListener(function() {
            Component.setState({user: UserStore.getUser()});
            Component.setState({isLoading: UserStore.getLoadingState()});
        });
    }

    render() {
        if (this.state.user) {
            return (
                <div user={this.state.user} isLoading={this.state.isLoading}>
                    <Header/>
                    {this.props.children}
                </div>
            )
        } else if (!this.state.user && this.state.isLoading) {
            return (
                <h1>Loading...</h1>
            )
        } else if (!this.state.user && !this.state.isLoading) {
            return (
                <h1>Not authorized</h1>
            )
        }
    }
}

App.path = '/';

export default App

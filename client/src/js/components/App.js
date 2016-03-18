'use strict';

import React from 'react';
import Header from './common/header';
import AppActions from '../actions/AppActions';
import UserStore from '../stores/UserStore';
import WeightStore from '../stores/WeightStore';
import Nav from './common/nav/nav';
import FontAwesome from 'react-fontawesome';
import classNames from 'classnames';
import injectTapEventPlugin from 'react-tap-event-plugin';

import alt from '../alt';

class App extends React.Component {
    constructor() {
        super();
        injectTapEventPlugin();
    }

    componentWillMount() {
        AppActions.getUser();
        const Component = this;
        Component.state = UserStore.getState();

        Component.state = {
            isLoading: UserStore.getState().isLoading
        }

        UserStore.listen(function(state) {
            Component.setState(UserStore.getState());
        });

        WeightStore.listen(function(state) {
            if(state && state.weight && state.weight instanceof Array && state.weight.length === 0){
                Component.setState({noWeight: true});
            } else {
                Component.setState({noWeight: false});
            }
        });

    }

    render() {
        let noWeight = classNames({'noWeight' : this.state.noWeight});
        let childrenWithProps = React.Children.map(this.props.children, (child) => {
            return React.cloneElement(child, {user: this.state.user});
        });
        if (!this.state.user && this.state.isLoading) {
            return (
                <h1>Loading...</h1>
            )
        } else {
            return (
                <div user={this.state.user} isLoading={this.state.isLoading} className={noWeight}>
                    <Nav user={this.state.user} />
                    <Header user={this.state.user} isLoading={this.state.isLoading}/>
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

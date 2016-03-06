'use strict';

import React from 'react';
import Header from './common/header';
import AppActions from '../actions/AppActions';
import AppStore from '../stores/AppStore';

class App extends React.Component {

    componentWillMount() {
        const Component = this;
        AppActions.getUser();
        AppActions.getWeight();

        Component.state = {
            weight: []
        }

        AppStore.addChangeListener(function() {
            Component.setState({user: AppStore.getUser()});
            Component.setState({weight: AppStore.getWeight()});
        });
    }

    render() {
        return (
            <div>
                <Header weight={this.state.weight} user={this.state.user}/>
                {this.props.children}
            </div>
        )
    }
}

App.path = '/';

export default App

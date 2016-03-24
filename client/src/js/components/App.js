'use strict';

import React from 'react';
import Header from './common/header';
import LoginPage from './LoginPage';
import AppActions from '../actions/AppActions';
import UserStore from '../stores/UserStore';
import WeightStore from '../stores/WeightStore';
import Nav from './common/nav/nav';
import FontAwesome from 'react-fontawesome';
import classNames from 'classnames';
import injectTapEventPlugin from 'react-tap-event-plugin';
import LinearProgress from 'material-ui/lib/linear-progress';
import alt from '../alt';

class App extends React.Component {
    constructor() {
        super();
        injectTapEventPlugin();
    }

    componentWillMount() {
        const Component = this;
        this.lock = new Auth0Lock('Ak0xmdNNIZNUbwtOYUVt1Y7wKPgPGra5', 'msaleh.auth0.com');
        this.setState({idToken: this.getIdToken()});


        if(this.getIdToken() && this.getIdToken().length > 0){
            AppActions.getUser();
        }

        Component.setState(UserStore.getState());


        UserStore.listen(function(state) {
            Component.setState(state);
        });

        WeightStore.listen(function(state) {
            Component.setState(state);
            if (state && state.weight && state.weight instanceof Array && state.weight.length === 0) {
                Component.setState({noWeight: true});
            } else {
                Component.setState({noWeight: false});
            }
        });

    }

    getIdToken() {
        var idToken = localStorage.getItem('userToken');
        var authHash = this.lock.parseHash(window.location.hash);
        if (!idToken && authHash) {
            if (authHash.id_token) {
                idToken = authHash.id_token
                localStorage.setItem('userToken', authHash.id_token);
            }
            if (authHash.error) {
                console.log("Error signing in", authHash);
                return null;
            }
        }
        return idToken;
    }

    render() {

        let progress = null;
        if(this.state.isLoading === true) {
            progress = <LinearProgress mode="indeterminate"/>
        }

        if (this.state.idToken) {
            let noWeight = classNames({'noWeight': this.state.noWeight});
            let childrenWithProps = React.Children.map(this.props.children, (child) => {
                return React.cloneElement(child, {user: this.state.user});
            });

            if (!this.state.user && this.state.isLoading) {
                return <h1>Loading...</h1>
            } else if(this.state.user && !this.state.isLoading) {
                return(
                    <div user={this.state.user} lock={this.lock} isLoading={this.state.isLoading} idToken={this.state.idToken} className={noWeight}>
                        {progress}
                        <Nav user={this.state.user}/>
                        <Header user={this.state.user} isLoading={this.state.isLoading}/>
                        <div className="contentContainer" user={this.state.user}>
                            {childrenWithProps}
                        </div>
                    </div>
                )
            } else {
                return(
                    <div>
                        <Nav />
                        <Header />
                        <div className="contentContainer">
                            <LoginPage lock={this.lock}/>
                        </div>
                    </div>
                )
            }
        } else {
            return(
                <div>
                    <Nav />
                    <Header />
                    <div className="contentContainer">
                        <LoginPage lock={this.lock}/>
                    </div>
                </div>
            )
        }

    }
}

App.path = '/';

export default App

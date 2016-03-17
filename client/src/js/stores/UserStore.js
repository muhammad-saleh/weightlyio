'use strict';

import React from 'react';

import alt from '../alt';
import ActionTypes from '../constants/ActionTypes';
import AppActions from '../actions/AppActions';

class UserStore {

    constructor(props) {
        this.user = null;
        this.isLoading = true;
        this.isError = null;

        this.bindListeners({
            getUserSuccess: AppActions.getUserSuccess,
        });

    }

    getUser(user) {
        return this.user;
    }
    onGetUser(action) {
        this.loading = true;
    }
    getUserSuccess(user) {
        this.isLoading = false;
        this.user = user;
    }
    getUserError(action) {
        this.isLoading = false;
        this.user = undefined;
    }

    getLoadingState() {
        return this.isLoading;
    }

    handleUpdateLocations(locations) {
        this.locations = locations;
    }

    isAuth(){
        if(this.user){
            return true
        }else {
            return false
        }
    }


}

export default alt.createStore(UserStore, 'UserStore');

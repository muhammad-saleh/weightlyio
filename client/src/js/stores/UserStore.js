'use strict';

import React from 'react';

import Dispatcher from '../dispatcher/Dispatcher';
import ActionTypes from '../constants/ActionTypes';
import Events from 'events';

const CHANGE_EVENT = 'change';
let _user;
let isLoading = true;
let isError = null;

class AppStore extends Events.EventEmitter {

    constructor(props) {
        super(props);
        this.dispatcherIndex = Dispatcher.register(this.handleAction.bind(this));
    }

    handleAction(action) {

        switch (action.actionType) {

        case ActionTypes.GET_USER: this.getUserInit(action);
            break;
        case ActionTypes.GET_USER_SUCCESS: this.getUserSuccess(action);
            break;
        case ActionTypes.GET_USER_ERROR: this.getUserError(action);
            break;
        }

        return true; // No errors. Needed by promise in Dispatcher.
    }

    getUser() {
        return _user;
    }
    getUserInit(action) {
        isLoading = true;
        this.emitChange();
    }
    getUserSuccess(action) {
        isLoading = false;
        _user = action.user;
        this.emitChange();
    }
    getUserError(action) {
        isLoading = false;
        _user = undefined;
        this.emitChange();
    }

    getLoadingState() {
        return isLoading;
    }

    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    }

    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }

    emitChange() {
        this.emit(CHANGE_EVENT);
    }

    isAuth(){
        if(_user){
            return true
        }else {
            return false
        }
    }


}

export default new AppStore();

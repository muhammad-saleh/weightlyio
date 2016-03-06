'use strict';

import React from 'react';

import Dispatcher from '../dispatcher/Dispatcher';
import ActionTypes from '../constants/ActionTypes';
import Events from 'events';

const CHANGE_EVENT = 'change';
let _weight = [];
let isLoading = true;
let isError = null;

class AppStore extends Events.EventEmitter {

    constructor(props) {
        super(props);
        this.dispatcherIndex = Dispatcher.register(this.handleAction.bind(this));
    }

    handleAction(action) {

        switch (action.actionType) {

        case ActionTypes.GET_WEIGHT: this.getWeightInit(action);
            break;
        case ActionTypes.GET_WEIGHT_SUCCESS: this.getWeightSuccess(action);
            break;
        case ActionTypes.GET_WEIGHT_ERROR: this.getWeightError(action);
            break;
        }

        return true; // No errors. Needed by promise in Dispatcher.
    }

    getWeight() {
        return _weight;
    }
    getWeightInit(action) {
        isLoading = true;
        this.emitChange();
    }
    getWeightSuccess(action) {
        isLoading = false;
        _weight = action.weight;
        this.emitChange();
    }
    getWeightError(action) {
        isLoading = false;
        _weight = undefined;
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

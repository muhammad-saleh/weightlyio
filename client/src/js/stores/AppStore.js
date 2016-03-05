'use strict';

import React from 'react';

import Dispatcher from '../dispatcher/Dispatcher';
import ActionTypes from '../constants/ActionTypes';
import Events from 'events';

const CHANGE_EVENT = 'change';
let _weight = [];

class AppStore extends Events.EventEmitter {

    constructor(props) {
        super(props);
        this.dispatcherIndex = Dispatcher.register(this.handleAction.bind(this));
    }

    handleAction(action) {

        switch (action.actionType) {

        case ActionTypes.GET_WEIGHT:
            _weight = action.weight;
            this.emitChange();

            break;

        case ActionTypes.TODO_DESTROY:
            // this.destroy(action.id);
            this.emitChange();
            break;

        }

        return true; // No errors. Needed by promise in Dispatcher.
    }

    getWeight() {
        return _weight;
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


}

export default new AppStore();

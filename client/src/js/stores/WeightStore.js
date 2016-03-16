'use strict';

import React from 'react';

import alt from '../alt';
import AppActions from '../actions/AppActions';
import ActionTypes from '../constants/ActionTypes';
import UserStore from './UserStore';


class WeightStore {

    constructor(props) {
        this.weight = null;
        this.isLoading = false;
        this.isError = null;

        this.bindListeners({
            getWeightInit: AppActions.GET_WEIGHT_INIT,
            getWeightSuccess: AppActions.GET_WEIGHT_SUCCESS,
        });
    }

    getWeight() {
        return this.weight;
    }
    getWeightInit() {
        console.log('weight init')
        this.waitFor(UserStore);
        this.isLoading = true;
    }
    getWeightSuccess(weight) {
        console.log('weight success')
        this.waitFor(UserStore);
        this.isLoading = false;
        this.weight = weight;
    }
    getWeightError() {
        this.isLoading = false;
        this.weight = undefined;
    }

}

export default alt.createStore(WeightStore, 'WeightStore');

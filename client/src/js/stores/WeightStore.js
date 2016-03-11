'use strict';

import React from 'react';

import alt from '../alt';
import AppActions from '../actions/AppActions';
import ActionTypes from '../constants/ActionTypes';
import UserStore from './UserStore';


class WeightStore {

    constructor(props) {
        this.weight = [];
        this.isLoading = true;
        this.isError = null;

        this.bindListeners({
            getWeightInit: AppActions.GET_WEIGHT,
            getWeightSuccess: AppActions.GET_WEIGHT_SUCCESS,
        });
    }

    getWeight() {
        if (this.weight !== []) {
            return this.weight;
        } else {
            AppActions.getWeight()
        }
    }
    getWeightInit() {
        this.isLoading = true;
    }
    getWeightSuccess(weight) {
        this.isLoading = false;
        this.weight = weight;
    }
    getWeightError() {
        this.isLoading = false;
        this.weight = undefined;
    }

}

export default alt.createStore(WeightStore, 'WeightStore');

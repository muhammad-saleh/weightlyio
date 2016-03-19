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
            postWeightSuccess: AppActions.POST_WEIGHT_SUCCESS,
            postHeightSuccess: AppActions.POST_HEIGHT_SUCCESS,
            postGoalSuccess: AppActions.POST_GOAL_SUCCESS,
        });
    }

    getWeight() {
        return this.weight;
    }
    getWeightInit() {
        this.waitFor(UserStore);
        this.isLoading = true;
    }
    getWeightSuccess(weight) {
        this.waitFor(UserStore);
        this.isLoading = false;
        this.weight = weight;
    }
    postWeightSuccess(data) {
        this.waitFor(UserStore);
        this.isLoading = false;
        this.weight.unshift(data);
        return this.weight;
    }
    getWeightError() {
        this.isLoading = false;
        this.weight = undefined;
    }
    postHeightSuccess(data) {
        this.isLoading = false;
        return data;
    }
    postGoalSuccess(data) {
        this.isLoading = false;
        return data;
    }

}

export default alt.createStore(WeightStore, 'WeightStore');

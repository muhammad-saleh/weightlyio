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
            postWeightInit: AppActions.POST_WEIGHT_INIT,
            postWeightSuccess: AppActions.POST_WEIGHT_SUCCESS,
            postHeightSuccess: AppActions.POST_HEIGHT_SUCCESS,
            postGoalSuccess: AppActions.POST_GOAL_SUCCESS,
        });
    }

    getWeight() {
        return this.weight;
    }
    getWeightInit() {
        this.isLoading = true;
        return this.isLoading;
    }
    postWeightInit() {
        this.isLoading = true;
        return this.isLoading;
    }
    getWeightSuccess(weight) {
        this.isLoading = false;
        let nWeight = weight.sort(function(a,b){
            return new Date(a.date) - new Date(b.date);
        });
        this.weight = nWeight;
        return this.weight;
    }
    postWeightSuccess(data) {
        this.isLoading = false;
        this.weight.unshift(data);
        let nWeight = this.weight.sort(function(a,b){
            return new Date(a.date) - new Date(b.date);
        });
        this.weight = nWeight;
        return this.weight;
    }
    getWeightError() {
        this.isLoading = false;
        this.weight = undefined;
        return this.isLoading;
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

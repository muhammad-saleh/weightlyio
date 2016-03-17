'use strict';

import React from 'react';
import alt from '../alt';
import ActionTypes from '../constants/ActionTypes';
import UserSource from '../sources/UserSource';
import WeightSource from '../sources/WeightSource';

class AppActions {
    constructor() {

    }

    setNewGoal(goal) {
        //TODO: AJAX Call

        //In AJAX Succes
        this.actions.addGoal(goal);
    }

    getWeight() {
        this.getWeightInit();

        return (dispatch) => {
            WeightSource.fetch().then((weight)=>{
                this.getWeightSuccess(weight);
            })
        }

    }

    postWeight(data) {
        let weightData = data;
        this.postWeightInit();

        return (dispatch) => {
            WeightSource.post(weightData).then((data)=>{
                this.postWeightSuccess(weightData);
            })
        }

    }

    getWeightInit() {
        this.isLoading = true;
    }

    postWeightInit() {
        this.isLoading = true;
    }

    getUser() {
        return (dispatch) => {
            dispatch();
            UserSource.fetch().then((user)=>{
                this.getUserSuccess(user);
            })
        }

    }

    getUserSuccess(user) {
        return user;
    }

    getWeightSuccess(weight) {
        this.isLoading = false;
        return weight;
    }

    postWeightSuccess(data) {
        this.isLoading = false;
        return data;
    }

}

export default alt.createActions(AppActions);

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

    getWeightInit() {
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

}

export default alt.createActions(AppActions);

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
        return (dispatch) => {
            // dispatch();
            WeightSource.fetch().then((weight)=>{
                this.getWeightSuccess(weight);
            })
        }
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
        return weight;
    }

}

export default alt.createActions(AppActions);

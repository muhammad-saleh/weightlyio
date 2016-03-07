'use strict';

import React from 'react';
import Dispatcher from '../dispatcher/Dispatcher';
import ActionTypes from '../constants/ActionTypes';

class AppActions {
    setNewGoal(goal) {
        //TODO: AJAX Call

        //In AJAX Succes
        Dispatcher.dispatch({actionType: ActionTypes.ADD_GOAL, goal})
    }

    getWeight() {
        Dispatcher.dispatch({actionType: ActionTypes.GET_WEIGHT});
        $.ajax({
            method: "GET",
            url: "http://localhost:3000/weight",
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true
        }).done(function(weight) {
            Dispatcher.dispatch({actionType: ActionTypes.GET_WEIGHT_SUCCESS, weight: weight})
        }).error(function(e) {
            Dispatcher.dispatch({actionType: ActionTypes.GET_WEIGHT_ERROR, error:e});
        });
    }
    getUser() {
        Dispatcher.dispatch({actionType: ActionTypes.GET_USER});
        $.ajax({
            method: "GET",
            url: "http://localhost:3000/user",
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true
        }).done(function(user) {
            Dispatcher.dispatch({actionType: ActionTypes.GET_USER_SUCCESS, user: JSON.stringify(user)})
        }).error(function(e) {
            Dispatcher.dispatch({actionType: ActionTypes.GET_USER_ERROR, error:e});
        });
    }
}

export default new AppActions;

'use strict';

import React from 'react';
import Dispatcher from '../dispatcher/Dispatcher';
import ActionTypes from '../constants/ActionTypes';

class AppActions {
    setNewGoal(goal){
        //TODO: AJAX Call

        //In AJAX Succes
        Dispatcher.dispatch({
            actionType: ActionTypes.ADD_GOAL,
            goal
        })
    }

    getWeight(){
        $.ajax({
            method: "GET",
            url: "http://localhost:3000/weight",
            xhrFields: { withCredentials: true },
            crossDomain: true
        }).done(function(weight) {
            console.log('inside ajax',weight)
            Dispatcher.dispatch({
                actionType: ActionTypes.GET_WEIGHT,
                weight:JSON.stringify(weight)
            })
        });
    }
}

export default new AppActions;

'use strict';

import alt from '../alt';
import UserSource from '../sources/UserSource';
import WeightSource from '../sources/WeightSource';
import HeightSource from '../sources/HeightSource';
import GoalSource from '../sources/GoalSource';

class AppActions {
    constructor() {

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

    postHeight(data) {
        let heightData = data;
        this.postWeightInit();

        return (dispatch) => {
            HeightSource.post(heightData).then((data)=>{
                this.postHeightSuccess(heightData);
            })
        }

    }

    postGoal(data) {
        let goal = data;
        this.postWeightInit();

        return (dispatch) => {
            GoalSource.post(goal).then((data)=>{
                this.postGoalSuccess(goal);
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
            }).fail((e)=>{
                this.getUserError(e);
            })
        }

    }

    getUserSuccess(user) {
        return user;
    }

    getUserError(e) {
        window.location.hash = '';
        localStorage.removeItem('userToken');
        return {e};
    }

    getWeightSuccess(weight) {
        this.isLoading = false;
        return weight;
    }

    postWeightSuccess(data) {
        this.isLoading = false;
        return data;
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

export default alt.createActions(AppActions);

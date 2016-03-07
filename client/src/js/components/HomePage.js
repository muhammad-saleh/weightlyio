"use strict";
import React from 'react';
import WeightCharts from './WeightCharts';
import AppActions from '../actions/AppActions';
import WeightStore from '../stores/WeightStore';
import UserStore from '../stores/UserStore';

class HomePage extends React.Component {
    render() {
        return (
            <div>
                <h1>Home Page</h1>
                <WeightCharts />
            </div>
            )
    }
}
HomePage.path = '/';

export default HomePage;

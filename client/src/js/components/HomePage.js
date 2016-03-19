"use strict";
import React from 'react';
import WeightCharts from './WeightCharts';
import AppActions from '../actions/AppActions';
import WeightStore from '../stores/WeightStore';
import UserStore from '../stores/UserStore';
import UserTile from './UserTile';
import UserBMI from './UserBMI';
import UserGoal from './UserGoal';
import UserCurrentWeight from './UserCurrentWeight';
import WeightTimeline from './WeightTimeline/WeightTimeline';
import WeightChangeInDays from './WeightChangeInDays';

class HomePage extends React.Component {
    render() {
        return (
            <div>
                <WeightCharts />
                <div className="row">
                    <div className="col-md-6">
                        <UserTile />
                        <WeightTimeline />
                    </div>
                    <div className="col-md-6">
                        <UserCurrentWeight user={this.props.user} />
                        <UserBMI user={this.props.user} />
                        <UserGoal user={this.props.user} />
                        <WeightChangeInDays days="30" user={this.props.user} />
                    </div>
                </div>
            </div>
            )
    }
}
HomePage.path = '/';

export default HomePage;

"use strict";
import React from 'react';
import WeightCharts from './WeightCharts';
import AppActions from '../actions/AppActions';
import WeightStore from '../stores/WeightStore';
import UserStore from '../stores/UserStore';
import Card from './common/card';
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
                <Card cssClass="chartComponent" cardTitle="Weight Changes Chart">
                    <WeightCharts />
                </Card>
                <div className="row">
                    <div className="col-md-6">
                        <Card cssClass="userComponent">
                            <UserTile />
                        </Card>
                        <Card cssClass="weightTimeline" cardTitle="Weight Changes Timeline">
                            <WeightTimeline />
                        </Card>
                    </div>
                    <div className="col-md-6">
                        <Card cssClass="CurrentWeightComponent" cardTitle="Current Weight">
                            <UserCurrentWeight user={this.props.user} />
                        </Card>
                        <Card cssClass="BMIComponent" cardTitle="Current BMI">
                            <UserBMI user={this.props.user} />
                        </Card>
                        <Card cssClass="GoalComponent" cardTitle="Weight Goal">
                            <UserGoal user={this.props.user} />
                        </Card>
                        <Card cssClass="WeightInDaysComponent" cardTitle="Weight change in last month">
                            <WeightChangeInDays days="30" user={this.props.user} />
                        </Card>
                    </div>
                </div>
            </div>
            )
    }
}
HomePage.path = '/';

export default HomePage;

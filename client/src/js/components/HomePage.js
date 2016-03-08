"use strict";
import React from 'react';
import WeightCharts from './WeightCharts';
import AppActions from '../actions/AppActions';
import WeightStore from '../stores/WeightStore';
import UserStore from '../stores/UserStore';
import Card from './common/card';
import UserTile from './UserTile';

class HomePage extends React.Component {
    render() {
        return (
            <div>
                <Card cssClass="chartComponent" cardIcon="tachometer" cardTitle="Weight Change Chart">
                    <WeightCharts />
                </Card>
                <div className="row">
                    <div className="col-md-6">
                        <Card cssClass="userComponent">
                            <UserTile />
                        </Card>
                    </div>
                    <div className="col-md-6">
                        <Card cssClass="chartComponent" cardIcon="tachometer" cardTitle="Weight Change Chart">
                            <WeightCharts />
                        </Card>
                    </div>
                </div>
            </div>
            )
    }
}
HomePage.path = '/';

export default HomePage;

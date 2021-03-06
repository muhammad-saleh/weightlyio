"use strict";
import React from 'react';
import {Line} from 'react-chartjs';
import AppActions from '../actions/AppActions';
import WeightStore from '../stores/WeightStore';
import UserStore from '../stores/UserStore';
import AddWeight from './AddWeight';
import moment from 'moment';
import FontAwesome from 'react-fontawesome';
import Card from './common/card';
import Message from './common/message';

class WeightCharts extends React.Component {
    componentWillMount() {
        const Component = this;
        AppActions.getWeight();
        this.state = WeightStore.getState();
    }
    componentDidMount() {
        const Component = this;
        WeightStore.listen(function(state) {
            Component.setState(state);
        });
    }

    extractWeight(arr) {
        if (Array.isArray(arr)) {
            let weightArray = arr.map(function(obj) {
                return obj.weight;
            });
            return weightArray;
        } else {
            return []
        }
    }

    extractDates(arr) {
        if (Array.isArray(arr)) {
            let datesArray = arr.map(function(obj) {
                return moment(obj.date).format("DD MMM");
            });
            return datesArray;
        } else {
            return []
        }
    }

    render() {
        let weights = this.extractWeight(this.state.weight);
        let dates = this.extractDates(this.state.weight);
        let data = {
            labels: dates,
            datasets: [
                {
                    label: "My Weight",
                    fillColor: "rgba(151,187,205,0.5)",
                    strokeColor: "rgba(151,187,205,0.8)",
                    highlightFill: "rgba(151,187,205,0.75)",
                    highlightStroke: "rgba(151,187,205,1)",
                    data: weights
                }
            ]
        };

        let options = {
            scaleShowGridLines: false,
            scaleGridLineColor: "rgba(0,0,0,.05)",
            scaleGridLineWidth: 1,
            scaleShowHorizontalLines: true,
            scaleShowVerticalLines: true,
            bezierCurve: true,
            bezierCurveTension: 0.4,
            pointDot: true,
            pointDotRadius: 4,
            pointDotStrokeWidth: 1,
            pointHitDetectionRadius: 20,
            datasetStroke: true,
            datasetStrokeWidth: 2,
            datasetFill: true,
            responsive: true,
            scaleFontSize: 8
        };

        let content = null;
        if(weights instanceof Array && weights.length > 1){
            content = <Line data={data} options={options} width="1400" height="250" />
        }else if(weights instanceof Array && weights.length === 1){
            content = <div><h4>Please add one more weight so we can display the chart</h4><Line data={data} options={options} width="1400" height="250" /></div>
        }else{
            content = (
                <Message title="Let's Start!" className="noWeightAlert">
                    Kindly start adding your weight:
                    <div><AddWeight /></div>
                </Message>
            )
        }

        return (
            <Card cssClass="chartComponent" cardTitle="Weight Changes Chart">
                <div>
                    {content}
                </div>
            </Card>
        )
    }
}

export default WeightCharts;

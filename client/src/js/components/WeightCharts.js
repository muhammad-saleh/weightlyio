"use strict";
import React from 'react';
import {Line} from 'react-chartjs';
import AppActions from '../actions/AppActions';
import WeightStore from '../stores/WeightStore';
import UserStore from '../stores/UserStore';

class WeightCharts extends React.Component {
    componentWillMount() {
        this.state = {
            weight: []
        }

    }
    componentDidMount() {
        const Component = this;
        window.setTimeout(function(){
            AppActions.getWeight();
        },0);

        WeightStore.addChangeListener(function() {
            Component.setState({weight: WeightStore.getWeight()});
        });
    }

    extractWeight(arr) {
        if(Array.isArray(arr)){
            var weightArray = arr.map(function(obj){
               return obj.weight;
            });
            return weightArray;
        }else {
            return []
        }
    }
    
    render() {
        var data = {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [
                {
                    label: "My Weight",
                    fillColor: "rgba(151,187,205,0.2)",
                    strokeColor: "rgba(151,187,205,1)",
                    pointColor: "rgba(151,187,205,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(151,187,205,1)",
                    data: this.extractWeight(this.state.weight)
                }
            ]
        };

        var options = {scaleShowGridLines : true,scaleGridLineColor : "rgba(0,0,0,.05)",scaleGridLineWidth : 1,scaleShowHorizontalLines: true,scaleShowVerticalLines: true,bezierCurve : true,bezierCurveTension : 0.4,pointDot : true,pointDotRadius : 4,pointDotStrokeWidth : 1,pointHitDetectionRadius : 20,datasetStroke : true,datasetStrokeWidth : 2,datasetFill : true,responsive: true,legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"};

        return (
            <div>
                <Line data={data} options={options} width="1400" height="250" />
            </div>
        )
    }
}

export default WeightCharts;

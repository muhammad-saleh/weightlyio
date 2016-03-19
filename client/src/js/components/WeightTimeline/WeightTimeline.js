'use strict';
import React from 'react';
import moment from 'moment';
import WeightStore from '../../stores/WeightStore';
import WeightTimelineRow from './WeightTimelineRow';
import Card from '../common/card';

class WeightTimeline extends React.Component {
    componentWillMount() {
        this.state = {
            weight: []
        }
    }
    componentDidMount() {
        let Component = this;
        WeightStore.listen(function(state){
            Component.setState(state);
        });
    }

    render() {
        let weightArray = this.state.weight;
        var weightItemsList = weightArray.reverse().map(function(weightItem, index){
            let weightAfter = null;
            if(weightArray[index+1] && weightArray[index+1].weight) {
                weightAfter = weightArray[index+1].weight;
            }
            return <WeightTimelineRow key={weightItem.date} weight={weightItem.weight} weightAfter={weightAfter} date={weightItem.date} />;
        })
        return (
            <Card cssClass="weightTimeline" cardTitle="Weight Changes Timeline">
                <div className="verDivider"></div>
                <div className="wtInner">
                    {weightItemsList}
                </div>
            </Card>
        )
    }
}

export default WeightTimeline;

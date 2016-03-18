'use strict';
import React from 'react';
import moment from 'moment';
import WeightStore from '../../stores/WeightStore';
import WeightTimelineRow from './WeightTimelineRow';

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
        var weightItemsList = weightArray.reverse().map(function(weightItem){
                            return <WeightTimelineRow key={weightItem.date} weight={weightItem.weight} date={weightItem.date} />;
                      })
        return (
            <div>
                <div className="verDivider"></div>
                <div className="wtInner">
                    {weightItemsList}
                </div>
            </div>
        )
    }
}

export default WeightTimeline;

'use strict';
import React from 'react';
import RaisedButton from 'material-ui/lib/raised-button';
import TextField from 'material-ui/lib/text-field';
import moment from 'moment';
import AppActions from '../../actions/AppActions';
import WeightStore from '../../stores/WeightStore';

class WeightTimelineRow extends React.Component {
    render() {
        return (
            <div className="weightRow">
                <div className="rowCircle"></div>
                <div className="wtLeft">
                    <div>{moment(this.props.date).format('DD MMM')}</div>
                    <div>{moment(this.props.date).format('YYYY')} {moment(this.props.date).format('hh:mm A')}</div>
                </div>
                <div className="wtRight">{this.props.weight}</div>

            </div>
        )
    }
}

export default WeightTimelineRow;

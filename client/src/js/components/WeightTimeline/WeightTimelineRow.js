'use strict';
import React from 'react';
import RaisedButton from 'material-ui/lib/raised-button';
import TextField from 'material-ui/lib/text-field';
import moment from 'moment';
import AppActions from '../../actions/AppActions';
import WeightStore from '../../stores/WeightStore';
import UserStore from '../../stores/UserStore';
import Utils from '../../utils/utils';

class WeightTimelineRow extends React.Component {
    render() {
        let height = UserStore.getState().user.height;
        return (
            <div className="weightRow">
                <div className="rowCircle"></div>
                <div className="wtLeft">
                    <div>{moment(this.props.date).format('DD MMM')}</div>
                    <div>{moment(this.props.date).format('YYYY')} {moment(this.props.date).format('hh:mm A')}</div>
                </div>
                <div className="wtRight">
                    {this.props.weight}
                    <br/>
                    {Utils.calculateBMI(this.props.weight, height)}
                </div>

            </div>
        )
    }
}

export default WeightTimelineRow;

'use strict';
import React from 'react';
import RaisedButton from 'material-ui/lib/raised-button';
import TextField from 'material-ui/lib/text-field';
import moment from 'moment';
import AppActions from '../../actions/AppActions';
import WeightStore from '../../stores/WeightStore';
import UserStore from '../../stores/UserStore';
import Utils from '../../utils/utils';
import FontAwesome from 'react-fontawesome';

class WeightTimelineRow extends React.Component {
    render() {
        let Component = this;
        let height = UserStore.getState().user.meta.height;
        let weightIcon = null;
        let weightEqualClass = '';
        // let colorsArray = ["01579B","0277BD","0288D1","039BE5","03A9F4","29B6F6","4FC3F7"];
        // let bgColor = {background:'#'+colorsArray[Math.floor(Math.random()*colorsArray.length)]}


        if(this.props.weightAfter) {
            weightIcon = Utils.weightDifferenceSymbol(this.props.weightAfter, this.props.weight);
            if(weightIcon === '=') {
                weightIcon = '=';
                weightEqualClass = 'equal';
            } else {
                weightIcon = <FontAwesome name={weightIcon} />
            }
        }
        return (
            <div className="weightRow">
                <div className="rowCircle"></div>
                <div className="rowBorder"></div>
                <div className="wtLeft">
                    <div className="wtDate1">{moment(this.props.date).format('DD MMM')}</div>
                    <div className="wtDate2">{moment(this.props.date).format('YYYY')} {moment(this.props.date).format('hh:mm A')}</div>
                </div>
                <div className="wtRight">
                    <div className="wtWeight"><span className={'wtSymbol ' + weightEqualClass}>{weightIcon} </span>{this.props.weight} KG</div>
                    <div className="wtBMI">BMI: {Utils.calculateBMI(this.props.weight, height)}</div>
                </div>

            </div>
        )
    }
}

export default WeightTimelineRow;

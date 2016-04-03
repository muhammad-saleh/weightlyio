'use strict';
import React from 'react';
import AppActions from '../actions/AppActions';

import Dialog from 'material-ui/lib/dialog';
import DatePicker from 'material-ui/lib/date-picker/date-picker';
import TimePicker from 'material-ui/lib/time-picker/time-picker';
import RaisedButton from 'material-ui/lib/raised-button';
import TextField from 'material-ui/lib/text-field';
import FlatButton from 'material-ui/lib/flat-button';
import FontAwesome from 'react-fontawesome';
import moment from 'moment';

class AddWeight extends React.Component {
    componentWillMount() {
        this.state = {
            open: false,
            dateField: new Date(),
            timeField: new Date(),
            newWeightDate: new Date(),
            newWeightTime: new Date()
        }
    }

    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
        AppActions.postWeight({weight: this.state.newWeight, date: moment(moment(this.state.newWeightDate).format("YYYY-MM-DD")+" "+moment(this.state.newWeightTime).format("HH:mm")).toDate()})
    };

    handleDismiss = () => {
        this.setState({open: false});
    };

    handleDateChange = (event, date) => {
        this.setState({dateField: date});
        this.setState({ newWeightDate: moment(date).format("YYYY-MM-DD") });
    };

    handleTimeChange = (event, time) => {
        this.setState({timeField: time});
        this.setState({newWeightTime: moment(time).format("HH:mm") });
    };

    handleNewWeightChange = (event) => {
        this.setState({newWeight: event.target.value});
    };

    render() {
        const actions = [
          <FlatButton label="Submit" primary={true} keyboardFocused={true} onTouchTap={this.handleClose} />,
        ];

    return (
          <div className="addWeightComponent">
            <RaisedButton label="Add Weight" secondary={true} icon={<FontAwesome name="plus"/>} onClick={this.handleOpen} />
            <Dialog
              title="Add new weight"
              actions={actions}
              modal={false}
              open={this.state.open}
              onRequestClose={this.handleDismiss}
            >
                <DatePicker floatingLabelText="Date" hintText="Date Picker" value={this.state.dateField} onChange={this.handleDateChange} />
                <TimePicker floatingLabelText="Time" hintText="Time Picker" value={this.state.timeField} onChange={this.handleTimeChange} />
                <TextField  floatingLabelText="Weight" hintText="Weight in Kilograms" onChange={this.handleNewWeightChange} />
            </Dialog>
          </div>
        )
    }
}

export default AddWeight;

'use strict';
import React from 'react';
import AppActions from '../actions/AppActions';

import Dialog from 'material-ui/lib/dialog';
import DatePicker from 'material-ui/lib/date-picker/date-picker';
import RaisedButton from 'material-ui/lib/raised-button';
import TextField from 'material-ui/lib/text-field';
import FlatButton from 'material-ui/lib/flat-button';
import FontAwesome from 'react-fontawesome';

class AddWeight extends React.Component {
    componentWillMount() {
        this.state = {
            open: false,
        }
    }

    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
        if(this.state && this.state.newWeight && this.state.newWeightDate){
            AppActions.postWeight({weight: this.state.newWeight, date: this.state.newWeightDate})
        }
    };

    handleDateChange = (event, date) => {
        this.setState({newWeightDate: date});
    };

    handleNewWeightChange = (event, weight) => {
        this.setState({newWeight: event.target.value});
    };

    render() {
        const actions = [
          <FlatButton label="Submit" primary={true} keyboardFocused={true} onTouchTap={this.handleClose} />,
        ];

    return (
          <div>
            <RaisedButton label="Add Weight" icon={<FontAwesome name="plus"/>} onClick={this.handleOpen} />
            <Dialog
              title="Add new weight"
              actions={actions}
              modal={false}
              open={this.state.open}
              onRequestClose={this.handleClose}
            >
                  <DatePicker floatingLabelText="Date" hintText="Date Picker" onChange={this.handleDateChange} />
                  <TextField floatingLabelText="Weight" hintText="Weight in Kilograms" onChange={this.handleNewWeightChange} />
            </Dialog>
          </div>
        )
    }
}

export default AddWeight;

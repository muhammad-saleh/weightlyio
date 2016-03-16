'use strict';
import React from 'react';
import Dialog from 'material-ui/lib/dialog';
import RaisedButton from 'material-ui/lib/raised-button';
import TextField from 'material-ui/lib/text-field';

class UserBMI extends React.Component {
    componentWillMount() {
        this.state = {
            open: false
        }
    }

    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    render() {
        let content = null;
        let actions = <div><RaisedButton label="Cancel" onClick={this.handleClose} /> <RaisedButton label="Submit" secondary={true} /></div>

        if(this.state && this.state.user && this.state.user.height) {
            content = <h1>okay</h1>
        }else{
            content = <div>To be able to view your BMI please add your height:<br/><button className="btn btn-primary" onClick={this.handleOpen}>Add Height</button></div>
        }
        return (
            <div>
                {content}
                <Dialog
                  title="Please add your height:"
                  modal={false}
                  actions={actions}
                  open={this.state.open}
                  onRequestClose={this.handleClose}
                >
                  <div>
                      <TextField hintText="Height in centimeters" /><br/>
                  </div>
                </Dialog>
            </div>
        )
    }
}

export default UserBMI;

'use strict';
import React from 'react';
import Dialog from 'material-ui/lib/dialog';
import TextField from 'material-ui/lib/text-field';
import AppActions from '../actions/AppActions';
import WeightStore from '../stores/WeightStore';
import UserStore from '../stores/UserStore';
import FlatButton from 'material-ui/lib/flat-button';

class UserBMI extends React.Component {
    componentWillMount() {
        this.state = {
            open: false
        }
    }

    componentDidMount() {
        let Component = this;
        let userHeight = null;



        WeightStore.listen(function(state) {
            Component.setState(state);
            let UserStoreState = UserStore.getState();
            let stateWeight = Component.state.weight;

            if(Component.props.user.height){
                userHeight = parseInt(Component.props.user.height);
            } else {
                userHeight = parseInt(UserStoreState.user.height);
            }

            if (stateWeight && stateWeight instanceof Array && stateWeight.length > 0 && userHeight) {
                const userWeight = stateWeight[0].weight;
                let BMI = Number(userWeight / ((userHeight / 100) * (userHeight / 100))).toFixed(2);
                if(isNaN(BMI)){
                    BMI = '-';
                }
                Component.setState({bmi: BMI});
            }

        });
    }



    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        let Component = this;
        this.setState({open: false});
        if(this.state && this.state.height){
            AppActions.postHeight({ height: this.state.height });
        }
    };

    handleHeightChange = (event, data) => {
        this.setState({height: event.target.value});
    };

    render() {
        let content = null;
        const actions = [
          <FlatButton label="Submit" primary={true} keyboardFocused={true} onTouchTap={this.handleClose} />,
        ];

        if (this.props && this.props.user && this.props.user.height) {
            content = <h1>{this.state.bmi}</h1>
        } else {
            content = <div>To be able to view your BMI please add your height:<br/>
                <button className="btn btn-primary" onClick={this.handleOpen}>Add Height</button>
            </div>
        }
        return (
            <div>
                {content}
                <Dialog title="Please add your height:" modal={true} actions={actions} open={this.state.open} onRequestClose={this.handleClose}>
                    <div>
                        <TextField hintText="Height in centimeters" onChange={this.handleHeightChange} /><br/>
                    </div>
                </Dialog>
            </div>
        )
    }
}

export default UserBMI;

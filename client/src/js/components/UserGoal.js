'use strict';
import React from 'react';
import Dialog from 'material-ui/lib/dialog';
import TextField from 'material-ui/lib/text-field';
import AppActions from '../actions/AppActions';
import WeightStore from '../stores/WeightStore';
import UserStore from '../stores/UserStore';
import FlatButton from 'material-ui/lib/flat-button';
import RaisedButton from 'material-ui/lib/raised-button';
import Card from './common/card';
import FontAwesome from 'react-fontawesome';
import Message from './common/message';

import Utils from '../utils/utils';

class UserGoal extends React.Component {
    componentWillMount() {
        this.state = {
            open: false
        }
    }

    componentDidMount() {
        let Component = this;
        let userGoal = null;



        WeightStore.listen(function(state) {
            Component.setState(state);
            let UserStoreState = UserStore.getState();

            if(Component.props.user.goal){
                userGoal = Component.props.user.goal;
            } else {
                userGoal = UserStoreState.user.goal;
            }
            Component.setState({goal: userGoal});

        });
    }



    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        let Component = this;
        this.setState({open: false});
        if(this.state && this.state.goal){
            AppActions.postGoal({ goal: this.state.goalNew });
            Component.setState({goal: this.state.goalNew});
        }
    };

    handleGoalChange = (event, data) => {
        this.setState({goalNew: event.target.value});
    };

    render() {
        let content = null;
        const actions = [
          <FlatButton label="Submit" primary={true} keyboardFocused={true} onTouchTap={this.handleClose} />,
        ];

        if (this.props && this.props.user && this.props.user.goal) {
            content = <div><h1><span className="goalTrophy"><FontAwesome name="trophy" style={{color:'#F9A825'}} /></span> {this.state.goal} KG</h1></div>
        } else {
            content = <Message type="info" title="Note">To be able to view your BMI please add your height:<br/>
                <RaisedButton secondary={true} onClick={this.handleOpen} icon={<FontAwesome name="plus"/>} label="Add Goal" />
            </Message>
        }
        return (
            <Card cssClass="GoalComponent">
                <div className="cardTitle">
                    <h4>Weight Goal</h4>
                    <div className="titleAction">
                        <FlatButton
                          label="Add / Change Goal"
                          labelPosition="after"
                          secondary={true}
                          onClick={this.handleOpen}
                          icon={<FontAwesome name="plus" />}
                        />
                    </div>
                </div>
                {content}
                <Dialog title="Please add a goal:" modal={true} actions={actions} open={this.state.open} onRequestClose={this.handleClose}>
                    <div>
                        <TextField hintText="Goal weight in Kilograms" onChange={this.handleGoalChange} /><br/>
                    </div>
                </Dialog>
            </Card>
        )
    }
}

export default UserGoal;

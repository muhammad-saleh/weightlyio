'use strict';
import React from 'react';
import Dialog from 'material-ui/lib/dialog';
import RaisedButton from 'material-ui/lib/raised-button';
import TextField from 'material-ui/lib/text-field';
import AppActions from '../actions/AppActions';
import WeightStore from '../stores/WeightStore';

class UserBMI extends React.Component {
    componentWillMount() {
        this.state = {
            open: false
        }
    }

    componentDidMount(){
        const userHeight = parseInt(this.props.user.height);
        let Component = this;
        WeightStore.listen(function(state){
            Component.setState(state);
            const stateWeight = Component.state.weight;
            if(stateWeight && stateWeight instanceof Array && stateWeight.length > 0){
                const userWeight = Component.state.weight[0].weight;
                const BMI = Number(userWeight / ( (userHeight/100)*(userHeight/100) )).toFixed(2);
                Component.setState({bmi: BMI});
            }

        });
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

        if(this.props && this.props.user && this.props.user.height) {
            content = <h1>{this.state.bmi}</h1>
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

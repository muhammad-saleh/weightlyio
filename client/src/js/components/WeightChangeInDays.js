'use strict';
import React from 'react';
import Dialog from 'material-ui/lib/dialog';
import RaisedButton from 'material-ui/lib/raised-button';
import TextField from 'material-ui/lib/text-field';
import AppActions from '../actions/AppActions';
import WeightStore from '../stores/WeightStore';
import Utils from '../utils/utils';
import Card from './common/card';


class WeightChangeInDays extends React.Component {
    componentWillMount() {
        this.state = {
            open: false,
            weightChange: 0
        }
    }

    componentDidMount(){
        let Component = this;
        WeightStore.listen(function(state){
            Component.setState(state);
            const stateWeight = Component.state.weight;
            if(stateWeight && stateWeight instanceof Array && stateWeight.length > 0){
                Component.setState({ weightChange: Utils.weightChangeInDays(stateWeight,Component.props.days) });
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
        let actions = <div><RaisedButton label="Cancel" onClick={this.handleClose} /> <RaisedButton label="Submit" secondary={true} /></div>
        let content = <div>{this.state.weightChange}</div>

        return (
            <Card cssClass="WeightInDaysComponent" cardTitle="Weight change in last month">
                {content}
                <Dialog
                  title="Please add your weight:"
                  modal={false}
                  actions={actions}
                  open={this.state.open}
                  onRequestClose={this.handleClose}
                >
                  <div>
                      <TextField hintText="Weight in Kilograms" /><br/>
                  </div>
                </Dialog>
            </Card>
        )
    }
}

export default WeightChangeInDays;

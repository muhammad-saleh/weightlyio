'use strict';
import React from 'react';
import Dialog from 'material-ui/lib/dialog';
import RaisedButton from 'material-ui/lib/raised-button';
import TextField from 'material-ui/lib/text-field';
import AppActions from '../actions/AppActions';
import WeightStore from '../stores/WeightStore';
import moment from 'moment';
import Card from './common/card';
import Utils from '../utils/utils';
import FontAwesome from 'react-fontawesome';

class UserCurrentWeight extends React.Component {
    componentWillMount() {
        this.state = {
            open: false
        }
    }

    componentDidMount(){
        let Component = this;
        WeightStore.listen(function(state){
            Component.setState(state);
            const stateWeight = Component.state.weight;
            if(stateWeight && stateWeight instanceof Array && stateWeight.length > 0){
                const userWeight = stateWeight[0].weight;
                Component.setState({currentWeight: userWeight});
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

        if(this.state && this.state.currentWeight) {
            let date = new Date(String(this.state.weight[0].date));
            let weightIcon = null;
            let weightEqualClass = '';
            date = moment(date).format("MMM Do YYYY");

            weightIcon = Utils.weightDifferenceSymbol(this.state.weight[1].weight, this.state.weight[0].weight);
            if(weightIcon === '=') {
                weightIcon = '=';
                weightEqualClass = 'equal';
            } else {
                weightIcon = <FontAwesome name={weightIcon} />
            }
            content = <div><h1><span className={'wtSymbol ' + weightEqualClass}>{weightIcon} </span>{this.state.currentWeight} KG</h1><small>On {date}</small></div>
        }else{
            content = <div>Sorry, No weight added yet</div>
        }
        return (
            <Card cssClass="CurrentWeightComponent" cardTitle="Current Weight">
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

export default UserCurrentWeight;

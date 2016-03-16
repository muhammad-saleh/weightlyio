'use strict';
import React from 'react';

class UserBMI extends React.Component {
    render() {
        let content = null;
        if(this.state && this.state.user && this.state.user.height) {
            content = <h1>okay</h1>
        }else{
            content = <div><h3>To be able to view your BMI please add your height:</h3><br/><button className="btn btn-primary">Add Height</button></div>

        }
        return (
            <div>
                {content}
            </div>
        )
    }
}

export default UserBMI;

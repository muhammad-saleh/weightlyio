"use strict";

import React from 'react';
import UserStore from '../stores/UserStore';
import Constants from '../constants/Constants';
import AddWeight from './AddWeight';

export default class UserTile extends React.Component {
    componentWillMount() {
        this.state = UserStore.getState();
    }

    profilePic(user) {
        if (user) {
            switch (user.provider) {
                case 'facebook':
                    return `http://graph.facebook.com/${user.data.id}/picture`
                    break;
                default:
                    return `http://placehold.it/50x50`

            }
        }
    }

    userName(user) {
        if (user) {
            switch (user.provider) {
                case 'facebook':
                    return user.data.first_name + ' ' + user.data.last_name
                    break;
                default:
                    return `http://placehold.it/50x50`

            }
        }
    }

    render() {
        return (
            <div className="row">
                <div className="col-xs-2">
                    <img src={this.profilePic(this.state.user)} alt="User Image" className="img-circle"/>
                </div>
                <div className="col-xs-10">
                    <div>{this.userName(this.state.user)}</div>
                    <div>
                        <a href={Constants.LOGOUT_URL}>Logout</a>
                    </div>
                    <div><AddWeight/></div>
                </div>
            </div>
        )
    }
}

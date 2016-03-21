'use strict';
import React from 'react';

class Message extends React.Component {
    render(){
        return (
            <div className={'messagesComponent ' + this.props.type || 'info'}>
                <div className="msgTitle">{this.props.title}</div>
                <div className="msgContent">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Message;

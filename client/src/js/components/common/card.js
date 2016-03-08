"use strict";

import React from 'react';
import FontAwesome from 'react-fontawesome';

export default class Card extends React.Component {
    render() {
        let cardIcon = '';
        if(this.props.cardIcon && this.props.cardIcon.trim().length > 0){
            cardIcon = <FontAwesome name={this.props.cardIcon} />
        }
        return (
            <div className={this.props.cssClass + ' card'}>
                <div className="cardTitle"><h4>{cardIcon} {this.props.cardTitle}</h4></div>
                {this.props.children}
            </div>
        )
    }
}

"use strict";

import React from 'react';
import FontAwesome from 'react-fontawesome';

export default class Card extends React.Component {
    render() {
        let cardIcon = '';
        let cardTitle = '';
        let cardHeader = '';

        if(this.props.cardIcon && this.props.cardIcon.trim().length > 0){
            cardIcon = <FontAwesome name={this.props.cardIcon} />
        }

        if(this.props.cardTitle && this.props.cardTitle.trim().length > 0){
            cardTitle = <h4>{cardIcon} {this.props.cardTitle}</h4>
        }

        if(cardTitle !== ''){
            cardHeader = <div className="cardTitle">{cardTitle}</div>
        }

        return (
            <div className={this.props.cssClass + ' card'}>
                {cardHeader}
                {this.props.children}
            </div>
        )
    }
}

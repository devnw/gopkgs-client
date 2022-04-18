import React, { Component } from 'react';
import "./Card.scss";

export default class Card extends Component {
    constructor(props) {
        super(props);
        this.children = props.children;
    }

    render() {
        return (
            <div className="card" >
                {this.children}
            </div>
        )
    }
}

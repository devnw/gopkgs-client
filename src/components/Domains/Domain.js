import React, { Component } from 'react';
import "./Domain.scss";
import Card from "../UI/Card";

export default class Domain extends Component {
    constructor(props) {
        super(props);
        this.name = props.name;
    }

    render() {
        return (
            <Card className="domain" >
                <div className="domain-name__name">
                    {this.name}
                </div>
            </Card>
        );
    }
}

import React, { Component } from 'react';
import "./Footer.scss";

export default class Footer extends Component {
    constructor(props) {
        super(props);
        this.logo = props.logo;
    }

    render() {
        return (
            <footer className="footer" style={{ position: "fixed", bottom: 0 }}>
                <div>
                    <img src={this.logo} className="logo" alt="logo" />
                </div>
            </footer >
        )
    };
}

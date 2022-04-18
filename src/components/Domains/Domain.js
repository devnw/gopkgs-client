import React, { Component } from "react";
import Card from "@mui/material/Card";

import "./Domain.scss";

export default class Domain extends Component {
  constructor(props) {
    super(props);
    this.name = props.name;
    this.owner = props.owner;
    this.maintainer = props.maintainer;
    this.validateBy = props.validateBy;
    this.validated = props.validated;
    this.updated = props.updated;
    this.token = props.token;
    this.modules = props.modules;
  }

  render() {
    return (
      <Card className="domain">
        <div className="domain-name__name">{this.name}</div>
      </Card>
    );
  }
}

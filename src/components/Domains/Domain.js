import React, { Component } from "react";
import Card from "@mui/material/Card";

import "./Domain.scss";

export default class Domain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      name: props.name,
      description: props.description,
      owner: props.owner,
      maintainer: props.maintainer,
      validateBy: props.validateBy,
      validated: props.validated,
      updated: props.updated,
      token: props.token,
      modules: props.modules,
    };
  }

  render() {
    console.log(this.state.id);
    return (
      <Card key={this.state.id}>
        <div>
          <h2>{this.state.name}</h2>
          <p>{this.state.description}</p>
        </div>
      </Card>
    );
  }
}

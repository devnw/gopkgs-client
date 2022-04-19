import React, { Component } from "react";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";

export default class Domains extends Component {
  constructor(props) {
    super(props);
    this.state = {
      domains: props.domains,
    };
  }

  render() {
    if (this.state.domains?.length <= 0) {
      return <div />;
    }

    return (
      <Card sx={{ marginTop: "10px", padding: "10px" }}>
        <h1 className="">Your Domains</h1>
        {this.state.domains?.map((domain, index) => (
          <div key={domain.id}>
            <h2>{domain.name}</h2>
            <p>{domain.description}</p>
          </div>
        ))}
      </Card>
    );
  }
}

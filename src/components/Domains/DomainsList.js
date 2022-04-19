import React, { Component } from "react";
import Container from "@mui/material/Container";

export default class Domains extends Component {
  constructor(props) {
    super(props);
    this.state = {
      domains: props.domains,
    };
  }

  render() {
    if (!this.state.domains || this.domains.length <= 0) {
      return <div />;
    }

    return <Container sx={{ padding: "10px" }}></Container>;
  }
}

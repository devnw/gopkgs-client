import React, { Component } from "react";
import Card from "@mui/material/Card";

import Domain from "./Domain";

export default class Domains extends Component {
  constructor(props) {
    super(props);
    this.state = {
      domains: props.domains,
    };
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.domains !== this.props.domains) {
      this.setState({
        domains: this.props.domains,
      });
    }
  };

  render() {
    if (this.state.domains?.length <= 0) {
      return <div />;
    }

    return (
      <Card sx={{ marginTop: "10px", padding: "10px" }}>
        <h1 className="">Your Domains</h1>
        {this.state.domains?.map((domain) => (
          <Domain
            key={domain.id}
            id={domain.id}
            name={domain.name}
            description={domain.description}
          />
        ))}
      </Card>
    );
  }
}

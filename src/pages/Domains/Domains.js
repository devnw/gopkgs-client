import React, { Component } from "react";
import Container from "@mui/material/Container";
import AddDomain from "../../components/Domains/AddDomain";
import DomainsList from "../../components/Domains/DomainsList";

import "./Domains.scss";

const doms = [
  {
    id: 1,
    name: "example.com",
    description: "This is an example domain.",
  },
  {
    id: 2,
    name: "example.net",
    description: "This is an example domain.",
  },
];

export default class Domains extends Component {
  state = {
    domains: doms,
  };

  addDomain = (domain) => {
    if (domain.name === "") {
      return;
    }

    if (this.state.domains.find((d) => d.name === domain.name)) {
      return;
    }

    this.setState({
      domains: [domain, ...this.state.domains],
    });
  };

  render() {
    return (
      <Container sx={{ padding: "10px" }}>
        <AddDomain add={this.addDomain} />
        <DomainsList domains={this.state.domains} />
      </Container>
    );
  }
}

import React, { Component } from "react";
import Container from "@mui/material/Container";
import AddDomain from "../../components/Domains/AddDomain";
import DomainsList from "../../components/Domains/DomainsList";

import "./Domains.scss";

export default class Domains extends Component {
  constructor(props) {
    super(props);
    this.state = {
      domains: props.domains,
    };
  }

  addDomain(domain) {
    this.setState({
      domains: [...this.state.domains, domain],
    });
  }

  render() {
    return (
      <Container sx={{ padding: "10px" }}>
        <AddDomain add={this.addDomain} />
        <DomainsList domains={this.domains} />
      </Container>
    );
  }
}

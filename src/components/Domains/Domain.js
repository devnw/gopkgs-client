import React, { Component } from "react";
import { Card, Grid } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faCircleExclamation,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";

import "./Domain.scss";

export default class Domain extends Component {
  constructor(props) {
    super(props);
    this.id = props.id;
    this.name = props.name;
    this.description = props.description;
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
      <Card
        sx={{
          padding: "10px",
          bgcolor: "#185A7D",
          color: "#ffffff",
          marginTop: "10px",
        }}
      >
        <Grid container spacing={2} alignItems="center" justify="center">
          <Grid item xs={10}>
            <h2>{this.name}</h2>
            <p>{this.description}</p>
          </Grid>
          <Grid item xs={2}>
            {this.validated !== true ? (
              <FontAwesomeIcon
                size="4x"
                icon={faCircleExclamation}
                className="unverified"
              />
            ) : (
              <FontAwesomeIcon
                size="4x"
                icon={faCircleCheck}
                className="verified"
              />
            )}
          </Grid>
        </Grid>
      </Card>
    );
  }
}

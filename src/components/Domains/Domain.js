import React from "react";

import { Card, Grid } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faCircleExclamation,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";

import "./Domain.scss";

const Domain = (props) => {
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
          <h2>{props.name}</h2>
          <p>{props.description}</p>
        </Grid>
        <Grid item xs={2}>
          {props.validated !== true ? (
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
};

export default Domain;

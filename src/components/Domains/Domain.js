import React from "react";

import { Card, Grid, Tooltip, IconButton } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faCircleExclamation,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";

import ValidateDomain from "./ValidateDomain";
import "./Domain.scss";

const Domain = (props) => {
  const [validateOpen, setValidateOpen] = React.useState(false);

  const handleValidateOpen = () => {
    setValidateOpen(true);
  };

  const handleValidateClose = () => {
    setValidateOpen(false);
  };

  const handleValidateDomain = () => {
    setValidateOpen(false);
  };

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
        <Grid item xs={8} md={10}>
          <h2>{props.name}</h2>
          <p>{props.description}</p>
          {props.modules?.length > 0 ? (
            <h3>Registered Modules: {props.modules.length}</h3>
          ) : null}
        </Grid>
        <Grid item xs={4} md={2}>
          {props.validated !== true ? (
            <Tooltip title={"This domain is not validated yet"}>
              <IconButton onClick={handleValidateOpen}>
                <FontAwesomeIcon
                  size="4x"
                  icon={faCircleExclamation}
                  className="unverified"
                />
              </IconButton>
            </Tooltip>
          ) : (
            <FontAwesomeIcon
              size="4x"
              icon={faCircleCheck}
              className="verified"
            />
          )}
        </Grid>
      </Grid>

      <ValidateDomain
        open={validateOpen}
        name={props.name}
        validated={props.validated}
        handleClose={handleValidateClose}
        handleValidate={handleValidateDomain}
      />
    </Card>
  );
};

export default Domain;

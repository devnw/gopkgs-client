import React, { useState } from "react";
import {
  Card,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import AddModule from "./AddModule";

const ModuleList = (props) => {
  if (props.domains?.length <= 0) {
    return <div />;
  }

  return (
    <div>
      {props.domains?.map((domain) => (
        <Accordion
          key={domain.name}
          sx={{
            padding: "10px",
            bgcolor: "#185A7D",
            color: "#ffffff",
            marginTop: "10px",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#ffffff" }} />}
            aria-controls="panel1a-content"
            disabled={!domain.validated}
            id="panel1a-header"
            sx={{
              padding: "10px",
              bgcolor: "#185A7D",
              color: "#ffffff",
              marginTop: "10px",
            }}
          >
            {domain.validated ? (
              <Typography variant="h2">{domain.name}</Typography>
            ) : (
              <Grid
                container
                spacing={2}
                sx={{ padding: "10px" }}
                alignItems="center"
                justify="center"
              >
                <Grid item xs={6}>
                  <Typography variant="h2">{domain.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography sx={{ textAlign: "right" }} variant="h2">
                    UNVALIDATED
                  </Typography>
                </Grid>
              </Grid>
            )}
          </AccordionSummary>
          <AccordionDetails
            sx={{
              padding: "10px",
              color: "#ffffff",
              marginTop: "10px",
            }}
          >
            {/* <Grid container spacing={2} alignItems="center" justify="center">
                <Grid item xs={10}>
                  <h2>{domain.name}</h2>
                </Grid>
                <Grid item xs={2}></Grid>
              </Grid> */}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default ModuleList;

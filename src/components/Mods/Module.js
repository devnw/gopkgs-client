import React, { useState } from "react";
import { Card, Grid, Typography } from "@mui/material";

const Module = (props) => {
  return (
    <Card
      sx={{
        padding: "10px",
        marginTop: "10px",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Typography variant="h2">{props.path}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography sx={{ textAlign: "right" }} variant="h2">
            {props.type}
          </Typography>
        </Grid>
      </Grid>
    </Card>
  );
};

export default Module;

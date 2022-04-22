import React, { useState } from "react";
import { Card, Grid, Typography } from "@mui/material";
import Copy from "../Copy";

const Module = (props) => {
  const importPath = props.domain + "/" + props.path;
  return (
    <Card
      sx={{
        padding: "10px",
        marginTop: "10px",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Grid container spacing={2}>
            <Grid item xs={5}>
              <Typography variant="h3">Import Path</Typography>
            </Grid>
            <Grid item xs={7}>
              <Copy data={importPath}>
                <Typography variant="h3">{importPath}</Typography>
              </Copy>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Typography sx={{ textAlign: "right" }} variant="h2">
            {props.type}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={5}>
              <Typography variant="h3">Repository</Typography>
            </Grid>
            <Grid item xs={7}>
              <Typography variant="h3">{props.repo}</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h3">{props.docs}</Typography>
        </Grid>
      </Grid>
    </Card>
  );
};

export default Module;

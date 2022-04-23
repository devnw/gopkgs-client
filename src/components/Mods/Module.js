import React, { useState } from "react";
import { Card, Grid, Typography } from "@mui/material";
import Copy from "../Copy";

const Module = (props) => {
  const importPath = props.domain + "/" + props.path;
  return (
    <Card
      sx={{
        padding: "10px",
      }}
      className={props.className}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={5}>
              <Typography sx={{ fontWeight: "bold" }} variant="h3">
                Import Path
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Copy data={importPath}>
                <Typography>{importPath}</Typography>
              </Copy>
            </Grid>
            <Grid item xs={12} s={1}>
              <Typography
                sx={{
                  textAlign: "right",
                  color: "#CB7541",
                  fontWeight: "bold",
                }}
                variant="h2"
              >
                {props.type.toUpperCase()}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={5}>
              <Typography sx={{ fontWeight: "bold" }} variant="h3">
                Repository
              </Typography>
            </Grid>
            <Grid item xs={7}>
              <Typography>{props.repo}</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={5}>
              <Typography sx={{ fontWeight: "bold" }} variant="h3">
                Documentation
              </Typography>
            </Grid>
            <Grid item xs={7}>
              <Typography>{props.docs}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
};

export default Module;

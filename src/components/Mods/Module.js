import React, { useState } from "react";
import { Card, Grid, Typography, Link } from "@mui/material";
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
            <Grid item xs={10}>
              <Copy data={importPath}>
                <Typography variant="h2" sx={{ fontWeight: "bold" }}>
                  {importPath}
                </Typography>
              </Copy>
            </Grid>
            <Grid item xs={2}>
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
            <Grid item s={12} md={3}>
              <Typography sx={{ fontWeight: "bold" }} variant="h3">
                Repository
              </Typography>
            </Grid>
            <Grid item s={12} md={9}>
              <Link href={props.repo}>
                <Typography>{props.repo}</Typography>
              </Link>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item s={12} md={3}>
              <Typography sx={{ fontWeight: "bold" }} variant="h3">
                Documentation
              </Typography>
            </Grid>
            <Grid item s={12} md={9}>
              <Link href={props.docs}>
                <Typography>{props.docs}</Typography>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
};

export default Module;

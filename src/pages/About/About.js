import React from "react";
import "./About.scss";
import { Container, Typography } from "@mui/material";

export default function About() {
  return (
    <Container sx={{ padding: "10px" }}>
      <Typography variant="h1" component="div" gutterBottom>
        About Vanity Import Paths in Google Go
      </Typography>
    </Container>
  );
}

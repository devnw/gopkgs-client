import React from "react";
import "./Home.scss";
import { Container, Typography } from "@mui/material";

export default function Home() {
  return (
    <Container sx={{ padding: "10px" }}>
      <Typography variant="h1" component="div" gutterBottom>
        GoPkgs Vanity Import Path Service
      </Typography>
    </Container>
  );
}

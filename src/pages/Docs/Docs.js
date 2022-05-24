import React from "react";
import { Container, Typography } from "@mui/material";

const Docs = () => {
  return (
    <Container sx={{ padding: "10px" }}>
      <Typography variant="h1">Documentation</Typography>

      <Typography variant="h2">Configuring a Custom Domain</Typography>

      <Typography variant="h2">Configuring a Private Repository</Typography>

      <Typography variant="h2">Migrating Maintainership</Typography>
    </Container>
  );
};

export default Docs;

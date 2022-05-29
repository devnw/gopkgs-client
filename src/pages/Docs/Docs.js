import React from "react";
import { Container, Typography, Card } from "@mui/material";

const Docs = () => {
  return (
    <Container sx={{ padding: "10px" }}>
      <Typography variant="h1">Documentation</Typography>

      <Typography variant="h2">Configuring a Custom Domain</Typography>
      <Typography variant="p">
        Configuring a custom domain is a simple process, but requires access to
        management of your DNS records and a domain name.
      </Typography>
      <Typography variant="h2">Configuring a Private Repository</Typography>
      <Typography variant="h2">Migrating Maintainership</Typography>
    </Container>
  );
};

export default Docs;

import React from "react";
import { Container, Typography, Box } from "@mui/material";

import Ref from "../../components/Ref";
import TOC from "../../components/TOC";

const Docs = () => {
  return (
    <Container sx={{ padding: "10px" }}>
      <TOC>
        <Ref variant="h1">Documentation</Ref>

        <Box>
          <Ref variant="h2">Configuring a Custom Domain</Ref>
          <Typography variant="p">
            Configuring a custom domain is a simple process, but requires access
            to management of your DNS records and a domain name.
          </Typography>
        </Box>
        <Ref variant="h2">Configuring a Private Repository</Ref>
        <Ref variant="h2">Migrating Maintainership</Ref>
      </TOC>
    </Container>
  );
};

export default Docs;

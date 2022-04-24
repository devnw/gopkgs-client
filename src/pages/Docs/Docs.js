import React from "react";
import { Container } from "@mui/material";

import Markdown from "../../components/Markdown";
import docs from "./Docs.md";

const Docs = () => {
  return (
    <Container sx={{ padding: "10px" }}>
      <Markdown key="DOCS" md={docs} />
    </Container>
  );
};

export default Docs;

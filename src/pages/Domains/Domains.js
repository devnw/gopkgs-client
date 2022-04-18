import React from "react";
import Container from "@mui/material/Container";
import AddDomain from "../../components/Domains/AddDomain";

import "./Domains.scss";

export default function About() {
  return (
    <Container sx={{ padding: "10px" }}>
      <AddDomain />
      <h1 className="">Your Domains</h1>
    </Container>
  );
}

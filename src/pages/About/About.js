import React from "react";
import { Container } from "@mui/material";

import Markdown from "../../components/Markdown";
import about from "./About.md";

const About = () => {
  return (
    <Container sx={{ padding: "10px" }}>
      <Markdown key="ABOUT" md={about} />
    </Container>
  );
};

export default About;

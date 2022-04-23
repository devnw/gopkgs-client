import React from "react";
import "./About.scss";
import { Container } from "@mui/material";

import Markdown from "../../components/Markdown/Markdown";
import about from "./About.md";

const About = () => {
  return (
    <Container sx={{ padding: "10px" }}>
      <Markdown key="ABOUT" md={about} />
    </Container>
  );
};

export default About;

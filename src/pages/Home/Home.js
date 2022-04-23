import React, { useState, useEffect } from "react";
import "./Home.scss";
import { Container } from "@mui/material";

import Markdown from "../../components/Markdown/Markdown";
import home from "./Home.md";

const Home = () => {
  return (
    <Container sx={{ padding: "10px" }}>
      <Markdown key="HOME" md={home} />
    </Container>
  );
};

export default Home;

import React, { useState, useEffect } from "react";
import { Container } from "@mui/material";

import Markdown from "../../components/Markdown";
import home from "./Home.md";

const Home = () => {
  return (
    <Container sx={{ padding: "10px" }}>
      <Markdown key="HOME" md={home} />
    </Container>
  );
};

export default Home;

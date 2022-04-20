import React from "react";
import "./Mods.scss";
import Container from "@mui/material/Container";

import { useAuth0 } from "@auth0/auth0-react";

const Mods = () => {
  const { isAuthenticated } = useAuth0();
  if (!isAuthenticated) {
    return <div />;
  }

  return (
    <Container sx={{ padding: "10px" }}>
      <h1 className="">Your Modules</h1>
    </Container>
  );
};

export default Mods;

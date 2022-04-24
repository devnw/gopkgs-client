import React from "react";
import { Container, Typography } from "@mui/material";

import { useAuth0 } from "@auth0/auth0-react";

import ModuleList from "../../components/Mods/ModuleList";
import AddModule from "../../components/Mods/AddModule";

import doms from "../../testdata";

const Mods = (props) => {
  const [domains, setDomains] = React.useState(doms);

  const { isAuthenticated } = useAuth0();
  if (!isAuthenticated) {
    return <div />;
  }

  const updateDomain = (domain) => {
    setDomains(
      domains.map((d) => {
        if (d.name === domain.name) {
          return domain;
        }
        return d;
      })
    );
  };

  return (
    <Container sx={{ padding: "10px" }}>
      <AddModule domains={domains} updateDomain={updateDomain} />
      <Typography variant="h1" component="div" gutterBottom>
        Your Modules
      </Typography>
      <ModuleList domains={domains} />
    </Container>
  );
};

export default Mods;

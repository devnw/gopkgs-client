import React from "react";
import { Container, Typography } from "@mui/material";

import { useAuth0 } from "@auth0/auth0-react";

import ModuleList from "../../components/Mods/ModuleList";
import AddModule from "../../components/Mods/AddModule";

import "./Mods.scss";

const Mods = (props) => {
  const { isAuthenticated } = useAuth0();
  if (!isAuthenticated) {
    return <div />;
  }

  const updateDomain = (domain) => {
    if (!props.domains) {
      return;
    }

    props.setDomains(
      props.domains.map((d, idx) => {
        if (d.domain === domain.domain) {
          return domain;
        }
        d.key = idx;
        return d;
      })
    );
  };

  return (
    <Container sx={{ padding: "10px" }}>
      <AddModule domains={props.domains} updateDomain={updateDomain} />
      <Typography className="mod-page-heading" component="div" gutterBottom>
        Your Modules
      </Typography>
      <ModuleList domains={props.domains} />
    </Container>
  );
};

export default Mods;

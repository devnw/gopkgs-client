import React from "react";

import { Container, Typography } from "@mui/material";

import AddDomain from "../../components/Domains/AddDomain";
import DomainsList from "../../components/Domains/DomainsList";
import { useAuth0 } from "@auth0/auth0-react";

import { putDomain } from "../../api/domains";

const Domains = (props) => {
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();
  if (!isAuthenticated) {
    return <div />;
  }

  const addDomain = (domain) => {
    if (domain === "") {
      return;
    }

    if (props.domains?.find((d) => d.domain === domain)) {
      return;
    }

    putDomain(getAccessTokenSilently, domain)
      .then((d) => {
        if (!d) {
          return;
        }

        if (!props.domains) {
          props.setDomains([d]);
          return;
        }

        props.setDomains([d, ...props.domains]);
        props.alert({
          open: true,
          message: `Domain ${d.domain} added successfully`,
          severity: "success",
        });
      })
      .catch((err) => {
        props.alert({
          open: true,
          message: err.message,
          severity: "error",
        });
      });
  };

  return (
    <Container sx={{ padding: "10px" }}>
      <AddDomain add={addDomain} />

      {props.domains?.length > 0 ? (
        <div>
          <Typography variant="h1" component="div" gutterBottom>
            Your Domains
          </Typography>
          <DomainsList domains={props.domains} />
        </div>
      ) : null}
    </Container>
  );
};

export default Domains;

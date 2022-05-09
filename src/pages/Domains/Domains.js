import React from "react";

import { Container, Typography } from "@mui/material";
import AddDomain from "../../components/Domains/AddDomain";
import DomainsList from "../../components/Domains/DomainsList";
import { useAuth0 } from "@auth0/auth0-react";
// import doms from "../../testdata";

const Domains = (props) => {
  console.log(props.domains);

  const { isAuthenticated } = useAuth0();
  if (!isAuthenticated) {
    return <div />;
  }

  const addDomain = (domain) => {
    if (domain.domain === "") {
      return;
    }

    if (props.domains?.find((d) => d.domain === domain.domain)) {
      return;
    }

    if (!props.domains) {
      props.setDomains([domain]);
      return;
    }

    props.setDomains([domain, ...props.domains]);
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

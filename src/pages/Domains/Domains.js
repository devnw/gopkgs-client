import React, { useState } from "react";

import Container from "@mui/material/Container";
import AddDomain from "../../components/Domains/AddDomain";
import DomainsList from "../../components/Domains/DomainsList";

import { useAuth0 } from "@auth0/auth0-react";

import "./Domains.scss";

const doms = [
  {
    id: 1,
    name: "example.com",
    description: "This is an example domain.",
  },
  {
    id: 2,
    name: "example.net",
    description: "This is an example domain.",
  },
];

const Domains = (props) => {
  const [domains, setDomains] = useState(doms);

  const { isAuthenticated } = useAuth0();
  if (!isAuthenticated) {
    return <div />;
  }

  const addDomain = (domain) => {
    if (domain.name === "") {
      return;
    }

    if (domains.find((d) => d.name === domain.name)) {
      return;
    }

    setDomains([domain, ...domains]);
  };

  return (
    <Container sx={{ padding: "10px" }}>
      <AddDomain add={addDomain} />
      <DomainsList domains={domains} />
    </Container>
  );
};

export default Domains;

import React, { useState } from "react";

import { Container, Typography } from "@mui/material";
import AddDomain from "../../components/Domains/AddDomain";
import DomainsList from "../../components/Domains/DomainsList";

import { useAuth0 } from "@auth0/auth0-react";

const doms = [
  {
    id: 1,
    name: "example.com",
    description: "This is an example domain.",
    modules: [
      {
        id: 1,
        path: "module1",
        type: "git",
        repo: "https://github.com/example/module1",
        website: "https://example.com",
        docs: "https://example.com/docs",
      },
      {
        id: 1,
        path: "module2",
        type: "git",
        repo: "https://github.com/example/module1",
        website: "https://example.com",
        docs: "https://example.com/docs",
      },
      {
        id: 1,
        path: "module3",
        type: "git",
        repo: "https://github.com/example/module1",
        website: "https://example.com",
        docs: "https://example.com/docs",
      },
      {
        id: 1,
        path: "module4",
        type: "git",
        repo: "https://github.com/example/module1",
        website: "https://example.com",
        docs: "https://example.com/docs",
      },
    ],
  },
  {
    id: 2,
    name: "example.net",
    description: "This is an example domain.",
    modules: [
      {
        id: 1,
        path: "module1",
        type: "git",
        repo: "https://github.com/example_net/module1",
        website: "https://example.net",
        docs: "https://example.net/docs",
      },
      {
        id: 1,
        path: "module2",
        type: "git",
        repo: "https://github.com/example_net/module1",
        website: "https://example.net",
        docs: "https://example.net/docs",
      },
    ],
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

    if (domains?.find((d) => d.name === domain.name)) {
      return;
    }

    if (!domains) {
      setDomains([domain]);
      return;
    }

    setDomains([domain, ...domains]);
  };

  return (
    <Container sx={{ padding: "10px" }}>
      <AddDomain add={addDomain} />

      {domains?.length > 0 ? (
        <div>
          <Typography variant="h1" component="div" gutterBottom>
            Your Domains
          </Typography>
          <DomainsList domains={domains} />
        </div>
      ) : null}
    </Container>
  );
};

export default Domains;

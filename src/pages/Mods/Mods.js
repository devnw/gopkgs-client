import React from "react";
import "./Mods.scss";
import { Container, Typography } from "@mui/material";

import { useAuth0 } from "@auth0/auth0-react";

import ModuleList from "../../components/Mods/ModuleList";
import AddModule from "../../components/Mods/AddModule";

const doms = [
  {
    id: 1,
    name: "example.com",
    description: "This is an example domain.",
    validated: true,
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
    name: "example.org",
    description: "This is an example domain.",
    modules: [
      {
        id: 1,
        path: "module1",
        type: "git",
        repo: "https://github.com/example_org/module1",
        website: "https://example.org",
        docs: "https://example.org/docs",
      },
      {
        id: 1,
        path: "module2",
        type: "git",
        repo: "https://github.com/example_org/module1",
        website: "https://example.org",
        docs: "https://example.org/docs",
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

const Mods = () => {
  const { isAuthenticated } = useAuth0();
  if (!isAuthenticated) {
    return <div />;
  }

  return (
    <Container sx={{ padding: "10px" }}>
      <AddModule domains={doms} />
      <Typography variant="h1" component="div" gutterBottom>
        Your Modules
      </Typography>
      <ModuleList domains={doms} />
    </Container>
  );
};

export default Mods;

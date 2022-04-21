import React from "react";
import "./Mods.scss";
import Container from "@mui/material/Container";

import { useAuth0 } from "@auth0/auth0-react";

import ModuleList from "../../components/Mods/ModuleList";

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

const Mods = () => {
  const { isAuthenticated } = useAuth0();
  if (!isAuthenticated) {
    return <div />;
  }

  return (
    <Container sx={{ padding: "10px" }}>
      <h1 className="">Your Modules</h1>
      <ModuleList domains={doms} />
    </Container>
  );
};

export default Mods;

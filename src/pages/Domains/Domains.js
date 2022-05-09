import React from "react";

import { Container, Typography, Snackbar, Alert } from "@mui/material";

import AddDomain from "../../components/Domains/AddDomain";
import DomainsList from "../../components/Domains/DomainsList";
import { useAuth0 } from "@auth0/auth0-react";

import { putDomain } from "../../api/domains";

const defaultAlert = {
  open: false,
  message: "",
  severity: "",
};

const Domains = (props) => {
  const [alert, setAlert] = React.useState(defaultAlert);
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();
  if (!isAuthenticated) {
    return <div />;
  }

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setAlert(defaultAlert);
  };

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
        setAlert({
          open: true,
          message: `Domain ${d.domain} added successfully`,
          severity: "success",
        });
      })
      .catch((err) => {
        setAlert({
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
      <Snackbar open={alert.open} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity={alert.severity}
          sx={{ width: "100%" }}
        >
          {alert.message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Domains;

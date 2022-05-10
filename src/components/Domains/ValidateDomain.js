import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
  TextField,
  Grid,
  Tooltip,
} from "@mui/material";

import { useAuth0 } from "@auth0/auth0-react";
import { getVerify } from "../../api/verify";
import { getToken } from "../../api/token";

import Copy from "../Copy";

const ValidateDomain = (props) => {
  const { getAccessTokenSilently } = useAuth0();
  const title = props.title || "Domain Verification Status";

  const handleClose = () => {
    props.handleClose();
  };

  const reVerify = () => {
    getVerify(getAccessTokenSilently, props.id)
      .then((d) => {
        props.alert({
          open: true,
          message: `Domain ${d.domain} verified successfully`,
          severity: "success",
        });

        handleClose();
      })
      .catch((err) => {
        props.alert({
          open: true,
          message: "Domain verification failed; please try again in 1 hour.",
          severity: "error",
        });
      });
  };

  const requestToken = () => {
    getToken(getAccessTokenSilently, props.id)
      .then((d) => {
        props.alert({
          open: true,
          message: `Token for domain ${d.domain} requested successfully`,
          severity: "success",
        });
      })
      .catch((err) => {
        props.alert({
          open: true,
          message: "Token request failed; please try again in 24 hours.",
          severity: "error",
        });
      });
  };

  let statusColor = "darkred";
  if (props.validated) {
    statusColor = "darkgreen";
  }

  return (
    <Dialog open={props.open} onClose={handleClose}>
      <DialogTitle
        style={{
          textAlign: "center",
          color: statusColor,
          verticalAlign: "middle",
        }}
      >
        {title}
      </DialogTitle>
      <DialogContent>
        {props.validated ? (
          <DialogContentText>{`${props.domain} is verified.`}</DialogContentText>
        ) : (
          <DialogContentText>
            <Typography>
              Add TXT DNS Record to verify domain ownership.
            </Typography>
            <Copy caption={true} data={props.token}>
              <Tooltip title={"Click to Copy"}>
                <TextField
                  id="domain-verification-token"
                  label="TXT Record"
                  fullWidth
                  fullHeight
                  defaultValue={props.token}
                  sx={{
                    marginTop: "30px",
                  }}
                  InputProps={{
                    readOnly: true,
                    multiline: true,
                  }}
                />
              </Tooltip>
            </Copy>
          </DialogContentText>
        )}
      </DialogContent>
      <DialogActions>
        {props.validated ? (
          <Button onClick={handleClose}>Cancel</Button>
        ) : (
          <Grid container spacing={2} alignItems="center" justify="center">
            <Grid item xs={12} md={7}>
              <Button onClick={requestToken}>New Token</Button>
            </Grid>
            <Grid item xs={12} md={2}>
              <Button onClick={reVerify}>Verify</Button>
            </Grid>
            <Grid item xs={12} md={2}>
              <Button onClick={handleClose}>Cancel</Button>
            </Grid>
          </Grid>
        )}
      </DialogActions>
    </Dialog>
  );
};

export default ValidateDomain;

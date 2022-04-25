import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
  TextField,
} from "@mui/material";

import Copy from "../Copy";

const ValidateDomain = (props) => {
  const title = props.title || "Domain Verification Status";

  const handleClose = () => {
    props.handleClose();
  };

  const reVerify = () => {
    console.log("Re-verifying domain:", props.name);
  };

  const requestToken = () => {
    console.log("Requesting New Token:", props.name);
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
          <DialogContentText>{`${props.name} is verified.`}</DialogContentText>
        ) : (
          <DialogContentText>
            <Typography>
              Add TXT DNS Record to verify domain ownership.
            </Typography>
            <Copy caption={true} data={props.token}>
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
            </Copy>
          </DialogContentText>
        )}
      </DialogContent>
      <DialogActions>
        {props.validated ? null : (
          <div>
            <Button onClick={requestToken}>New Token</Button>
            <Button onClick={reVerify}>Verify</Button>
          </div>
        )}
        <Button onClick={handleClose}>Cancel</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ValidateDomain;

import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

import DomainVerificationIcon from "@mui/icons-material/DomainVerification";

const ValidateDomain = (props) => {
  const title = "Domain Verification Status";

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
        {props.verified ? (
          <DialogContentText>
            "Successfully Validated ${props.name}"
          </DialogContentText>
        ) : (
          <DialogContentText>
            {`${props.name} is not yet validated`}
          </DialogContentText>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>

        {props.validated ? null : (
          <div>
            <Button onClick={requestToken}>Request New Token</Button>
            <Button onClick={reVerify}>Attempt Verify</Button>
          </div>
        )}
      </DialogActions>
    </Dialog>
  );
};

export default ValidateDomain;

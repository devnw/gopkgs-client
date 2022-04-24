import React, { useState } from "react";
import {
  Card,
  Grid,
  Typography,
  Link,
  Tooltip,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
} from "@mui/material";

const DeleteDialog = (props) => {
  // const [open, setOpen] = useState(props.open);
  const confirmationText =
    props.confirmationText || "DESTRUCTIVE ACTION!!! Are you sure?";

  const title = props.title || "Delete";

  const handleClose = () => {
    props.handleClose();
  };

  const confirmDelete = () => {
    console.log("Deleting module:", props.module);
    props.handleDelete(props.id);
    handleClose();
  };

  return (
    <Dialog open={props.open} onClose={handleClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{confirmationText}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={confirmDelete}>Delete</Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteDialog;

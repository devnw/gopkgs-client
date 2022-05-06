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
import Copy from "../Copy";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

import EditModule from "./EditModule";
import DeleteDialog from "../DeleteDialog";
import "./Modules.scss";

const Module = (props) => {
  const importPath = props.domain + "/" + props.path;

  const [editOpen, setEditOpen] = React.useState(false);
  const [deleteOpen, setDeleteOpen] = React.useState(false);

  const handleEditClickOpen = () => {
    setEditOpen(true);
  };

  const handleEditClose = () => {
    setEditOpen(false);
  };

  const handleEditModule = () => {
    setEditOpen(false);
  };

  const handleDeleteClickOpen = () => {
    setDeleteOpen(true);
  };

  const handleDeleteClose = () => {
    setDeleteOpen(false);
  };

  const handleDeleteModule = () => {
    setDeleteOpen(false);
  };

  return (
    <Card
      sx={{
        padding: "10px",
      }}
      className={props.className}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Grid container spacing={2}
            className='module-header'>
            <Grid item xs={10} md={11}>
              <Copy data={importPath}>
                <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                  {importPath}
                </Typography>
              </Copy>
            </Grid>
            <Grid item xs={2} md={1}>
              <Typography
                className='module-type'
              >
                {props.type}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={3}>
              <Typography className='module-info' variant="h5">
                Repository
              </Typography>
            </Grid>
            <Grid item xs={12} md={9}>
              <Link href={props.repo}>
                <Typography className='module-info'>{props.repo}</Typography>
              </Link>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={3}>
              <Typography className='module-info' variant="h5">
                Documentation
              </Typography>
            </Grid>
            <Grid item xs={12} md={9}>
              <Link href={props.docs}>
                <Typography className='module-info'>{props.docs}</Typography>
              </Link>
            </Grid>
          </Grid>
        </Grid>
        <Grid fullWidth item xs={12} sx={{ textAlign: "right" }}>
          <IconButton>
            <Tooltip title={"Edit Module"}>
              <EditIcon fontSize="large" onClick={handleEditClickOpen} />
            </Tooltip>
          </IconButton>
          <Dialog open={editOpen} onClose={handleEditClose}>
            <DialogTitle>Edit Module</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Update the module's import path, version control system, or
                repository URL.
              </DialogContentText>
              <EditModule
                domain={props.domain}
                path={props.path}
                type={props.type}
                repo={props.repo}
                docs={props.docs}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleEditClose}>Cancel</Button>
              <Button onClick={handleEditModule}>Save</Button>
            </DialogActions>
          </Dialog>
          <IconButton>
            <Tooltip title={"Delete Module"}>
              <DeleteForeverIcon
                fontSize="large"
                onClick={handleDeleteClickOpen}
              />
            </Tooltip>
          </IconButton>
          <DeleteDialog
            title={`Delete Module ${importPath}`}
            confirmationText={"Are you sure you want to delete this module?"}
            open={deleteOpen}
            handleClose={handleDeleteClose}
            handleDelete={handleDeleteModule}
          />
        </Grid>
      </Grid>
    </Card>
  );
};

export default Module;

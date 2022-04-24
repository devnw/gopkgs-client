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

const Module = (props) => {
  const importPath = props.domain + "/" + props.path;

  const [editOpen, setEditOpen] = React.useState(false);

  const handleEditClickOpen = () => {
    setEditOpen(true);
  };

  const handleEditClose = () => {
    setEditOpen(false);
  };

  const handleEditModule = () => {
    setEditOpen(false);
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
          <Grid container spacing={2}>
            <Grid item xs={12} md={11}>
              <Copy data={importPath}>
                <Typography variant="h2" sx={{ fontWeight: "bold" }}>
                  {importPath}
                </Typography>
              </Copy>
            </Grid>
            <Grid item xs={12} md={1}>
              <Typography
                sx={{
                  color: "#CB7541",
                  fontWeight: "bold",
                }}
                variant="h2"
              >
                {props.type.toUpperCase()}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={3}>
              <Typography sx={{ fontWeight: "bold" }} variant="h3">
                Repository
              </Typography>
            </Grid>
            <Grid item xs={12} md={9}>
              <Link href={props.repo}>
                <Typography>{props.repo}</Typography>
              </Link>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={3}>
              <Typography sx={{ fontWeight: "bold" }} variant="h3">
                Documentation
              </Typography>
            </Grid>
            <Grid item xs={12} md={9}>
              <Link href={props.docs}>
                <Typography>{props.docs}</Typography>
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
              <DeleteForeverIcon fontSize="large" />
            </Tooltip>
          </IconButton>
        </Grid>
      </Grid>
    </Card>
  );
};

export default Module;

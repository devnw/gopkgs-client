import React, { useState } from "react";
import {
  Card,
  Box,
  Button,
  TextField,
  Grid,
  Typography,
  InputLabel,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";

const EditModule = (props) => {
  const importPath = props.domain + "/" + props.path;
  const types = ["git", "mod", "svn", "hg", "fossil", "bzr"];
  const [type, setType] = useState(props.type);
  const [repo, setRepo] = useState(props.repo);
  // const [website, setWebsite] = useState("");
  const [docs, setDocs] = useState(props.docs);

  const handleVCSChange = (event) => {
    setType(event.target.value);
  };

  const handleRepoChange = (event) => {
    setRepo(event.target.value);
  };

  // const handleWebsiteChange = (event) => {
  //   setWebsite(event.target.value);
  // };

  const handleDocsChange = (event) => {
    setDocs(event.target.value);
  };

  const handleEditDomain = (event) => {
    event.preventDefault();

    // props.updateDomain({
    //   ...props.domain,
    //   modules: [
    //     {
    //       id: Math.random(),
    //       path: name,
    //       type: type,
    //       repo: repo,
    //       docs: docs,
    //     },
    //     ...props.domain.modules,
    //   ],
    // });
  };

  return (
    <Grid
      container
      spacing={{ xs: 2 }}
      sx={{ padding: "10px" }}
      alignItems="center"
      justify="center"
    >
      <Grid item xs={12} md={10}>
        <Typography variant="h2">{importPath}</Typography>
      </Grid>
      <Grid item xs={12} md={1}>
        <Select
          labelId="demo-select-small"
          id="demo-select-small"
          value={type}
          onChange={handleVCSChange}
        >
          {types.map((type) => (
            <MenuItem key={type} value={type}>
              {type.toUpperCase()}
            </MenuItem>
          ))}
        </Select>
      </Grid>
      <Grid item xs={12} lg={6}>
        <TextField
          required
          fullWidth
          id="outlined-required"
          label="Repository"
          placeholder="https://github.com/user/repo"
          value={repo}
          onChange={handleRepoChange}
        />
      </Grid>
      <Grid item xs={12} lg={6}>
        <TextField
          fullWidth
          id="outlined-required"
          label="Documentation"
          placeholder="https://pkg.go.dev/go.example.com/name"
          value={docs}
          onChange={handleDocsChange}
        />
      </Grid>
    </Grid>
  );
};

export default EditModule;

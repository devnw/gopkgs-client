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

const AddModule = (props) => {
  const importPath = props.domain + "/" + props.path;
  const types = ["git", "mod", "svn", "hg", "fossil", "bzr"];
  const [name, setName] = useState("");
  const [type, setType] = useState(types[0]);
  const [repo, setRepo] = useState("");
  // const [website, setWebsite] = useState("");
  const [docs, setDocs] = useState("");

  const handleVCSChange = (event) => {
    setType(event.target.value);
  };

  const handleModuleChange = (event) => {
    setName(event.target.value);
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
    <Card>
      <Box
        component="form"
        sx={{
          padding: "10px",
        }}
      >
        <Typography variant="h2">Edit Module</Typography>
        <Grid
          container
          spacing={{ xs: 2 }}
          sx={{ padding: "10px" }}
          alignItems="center"
          justify="center"
        >
          <Grid item xs={11}>
            <Typography variant="h4">{importPath}</Typography>
          </Grid>
          <Grid item xs={1}>
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
          <Grid item fullWidth xs={12} sx={{ textAlign: "right" }}>
            <Button variant="contained" type="submit" onClick={handleAddDomain}>
              Add
            </Button>
          </Grid>
        </Grid>
        <div
          style={{
            paddingTop: "10px",
            textAlign: "right",
          }}
        ></div>
      </Box>
    </Card>
  );
};

export default AddModule;

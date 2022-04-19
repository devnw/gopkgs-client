import React, { Component } from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export default class Domain extends Component {
  constructor(props) {
    super(props);
    this.domainPattern =
      "^((?!-))(xn--)?[a-z0-9][a-z0-9-_]{0,61}[a-z0-9]{0,1}.(xn--)?([a-z0-9-]{1,61}|[a-z0-9-]{1,30}.[a-z]{2,})$";
    this.state = {
      name: props.name,
    };
  }

  render() {
    return (
      <Card className="add-domain">
        <Box
          component="form"
          sx={{
            padding: "10px",
          }}
        >
          <TextField
            required
            fullWidth
            id="outlined-required"
            label="Domain"
            placeholder="sub.mydomain.com"
          />
        </Box>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
            padding: "10px",
            m: 1,
            textAlign: "right",
          }}
        >
          <Button variant="contained">Add</Button>
        </Box>
      </Card>
    );
  }
}

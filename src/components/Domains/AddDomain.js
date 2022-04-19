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
      domain: props.domain,
    };
    this.add = props.add;
  }

  handleChange = (event) => {
    this.setState({
      domain: event.target.value,
    });
  };

  handleAddDomain = (event) => {
    event.preventDefault();

    if (!this.state.domain?.match(this.domainPattern)) {
      console.log("Invalid domain");
      return;
    }

    this.add({
      name: this.state.domain,
      description: "",
    });
  };

  render() {
    return (
      <Card>
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
            onChange={this.handleChange}
          />

          <div
            style={{
              paddingTop: "10px",
              textAlign: "right",
            }}
          >
            <Button
              variant="contained"
              type="submit"
              onClick={this.handleAddDomain}
            >
              Add
            </Button>
          </div>
        </Box>
      </Card>
    );
  }
}

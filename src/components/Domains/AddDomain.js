import React, { useState } from "react";

import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const domainPattern =
  /^(?:(?:(?:[a-zA-z-]+):\/{1,3})?(?:[a-zA-Z0-9])(?:[a-zA-Z0-9\-.]){1,61}(?:\.[a-zA-Z]{2,})+|\[(?:(?:(?:[a-fA-F0-9]){1,4})(?::(?:[a-fA-F0-9]){1,4}){7}|::1|::)\]|(?:(?:[0-9]{1,3})(?:\.[0-9]{1,3}){3}))(?::[0-9]{1,5})?$/g;
const AddDomain = (props) => {
  const [domain, setDomain] = useState("");

  const handleChange = (event) => {
    setDomain(event.target.value);
  };

  const handleAddDomain = (event) => {
    event.preventDefault();

    if (!domain?.match(domainPattern)) {
      console.log("Invalid domain", event.target.value);
      return;
    }

    props.add({
      id: Math.random(),
      name: domain,
    });
  };

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
          onChange={handleChange}
        />

        <div
          style={{
            paddingTop: "10px",
            textAlign: "right",
          }}
        >
          <Button variant="contained" type="submit" onClick={handleAddDomain}>
            Add
          </Button>
        </div>
      </Box>
    </Card>
  );
};

export default AddDomain;

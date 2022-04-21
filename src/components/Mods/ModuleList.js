import React, { useState } from "react";
import { Card, Grid } from "@mui/material";

const ModuleList = (props) => {
  if (props.domains?.length <= 0) {
    return <div />;
  }

  return (
    <Card sx={{ marginTop: "10px", padding: "10px" }}>
      {props.domains?.map((domain) => (
        <div />
      ))}
    </Card>
  );
};

export default ModuleList;

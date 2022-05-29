import React from "react";
import { Typography } from "@mui/material";

const Ref = (props) => {
  if (!props.variant.startsWith("h")) {
    return <Typography {...props} />;
  }

  return (
    <Typography
      {...props}
      id={props.children.replace(/ /g, "-").toLowerCase()}
    />
  );
};

export default Ref;

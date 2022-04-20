import React from "react";

import Card from "@mui/material/Card";

import Domain from "./Domain";

const DomainList = (props) => {
  if (props.domains?.length <= 0) {
    return <div />;
  }

  return (
    <Card sx={{ marginTop: "10px", padding: "10px" }}>
      <h1 className="">Your Domains</h1>
      {props.domains?.map((domain) => (
        <Domain
          key={domain.id}
          id={domain.id}
          name={domain.name}
          description={domain.description}
        />
      ))}
    </Card>
  );
};

export default DomainList;

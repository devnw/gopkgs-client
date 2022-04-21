import React from "react";

import Card from "@mui/material/Card";

import Domain from "./Domain";

const DomainList = (props) => {
  if (props.domains?.length <= 0) {
    return <div />;
  }

  return (
    <div>
      {props.domains?.map((domain) => (
        <Domain
          key={domain.id}
          id={domain.id}
          name={domain.name}
          modules={domain.modules}
        />
      ))}
    </div>
  );
};

export default DomainList;

import React from "react";

import Card from "@mui/material/Card";

import Domain from "./Domain";
import InvalidFirstSort from "../../utils/InvalidFirstSort";

const DomainList = (props) => {
  if (props.domains?.length <= 0) {
    return <div />;
  }

  props.domains.sort(InvalidFirstSort);

  return (
    <div>
      {props.domains?.map((domain) => (
        <Domain
          key={domain.id}
          id={domain.id}
          name={domain.name}
          token={domain.token}
          modules={domain.modules}
          validated={domain.validated}
        />
      ))}
    </div>
  );
};

export default DomainList;

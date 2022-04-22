import { Tooltip } from "@mui/material";
import copy from "clipboard-copy";
import React, { useState } from "react";

const Copy = (props) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const onCopy = (content) => {
    copy(content);
    setShowTooltip(true);
  };

  const handleOnTooltipClose = () => {
    setShowTooltip(false);
  };

  return (
    <Tooltip
      open={showTooltip}
      title={"Copied to clipboard!"}
      leaveDelay={1500}
      onClose={handleOnTooltipClose}
      {...(props.TooltipProps || {})}
      onClick={onCopy}
      data={props.data}
    >
      {props.children}
    </Tooltip>
  );
};

export default Copy;

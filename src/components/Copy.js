import { Tooltip, Typography } from "@mui/material";
import copy from "clipboard-copy";
import React, { useState } from "react";

const Copy = (props) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const onCopy = (content) => {
    copy(props.data);
    setShowTooltip(true);
  };

  const handleOnTooltipClose = () => {
    setShowTooltip(false);
  };

  return (
    <div>
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
      {!props.caption ? null : (
        <Typography variant="caption">Click to Copy</Typography>
      )}
    </div>
  );
};

export default Copy;

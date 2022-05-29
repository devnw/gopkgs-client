import copy from "clipboard-copy";
import React, { useState } from "react";
import { Typography, Grid, Tooltip, IconButton } from "@mui/material";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import { useLocation } from "react-router-dom";

const Ref = (props) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const id = props.children.replace(/ /g, "-").toLowerCase();
  const location = useLocation();
  const url = new URL(
    `${process.env.REACT_APP_URL}${location.pathname}#${encodeURIComponent(id)}`
  ).toString();

  const onCopy = (content) => {
    copy(url);
    setShowTooltip(true);
  };

  const handleOnTooltipClose = () => {
    setShowTooltip(false);
  };

  if (!props.variant.startsWith("h")) {
    return <Typography {...props} />;
  }

  return (
    <Grid container>
      <Grid item>
        <Typography {...props} id={id} />
      </Grid>
      <Grid item>
        <Tooltip
          open={showTooltip}
          title={"Copied to clipboard!"}
          leaveDelay={300}
          onClose={handleOnTooltipClose}
          {...(props.TooltipProps || {})}
          onClick={onCopy}
          data={props.data}
        >
          <IconButton onClick={onCopy}>
            <ShareOutlinedIcon fontSize="small" />
          </IconButton>
        </Tooltip>
      </Grid>
    </Grid>
  );
};

export default Ref;

import React from "react";
import copy from "clipboard-copy";
import {
  Card,
  CardActionArea,
  CardActions,
  Grid,
  Tooltip,
  IconButton,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ReplayIcon from "@mui/icons-material/Replay";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

import {
  faCircleExclamation,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";

import ValidateDomain from "./ValidateDomain";
import "./Domain.scss";

const Domain = (props) => {
  const [validateOpen, setValidateOpen] = React.useState(false);

  const handleValidateOpen = () => {
    setValidateOpen(true);
  };

  const handleValidateClose = () => {
    setValidateOpen(false);
  };

  const handleValidateDomain = () => {
    setValidateOpen(false);
  };

  const requestToken = () => {};

  const reVerify = () => {};

  const handleDelete = () => {};

  const onCopy = (content) => {
    copy(props.data);
    props.alert({
      open: true,
      message: "TXT Record copied to clipboard!",
      severity: "success",
    });
  };

  return (
    <Card
      className="domain-summary"
      sx={{
        marginTop: "10px",
        borderRadius: "0px",
      }}
    >
      <CardActionArea onClick={handleValidateOpen}>
        <Grid
          container
          spacing={2}
          alignItems="center"
          justify="center"
          className="domain-name-background"
        >
          <Grid item xs={8} md={10}>
            <h2>{props.domain}</h2>
            <p>{props.description}</p>
            {props.modules?.length > 0 ? (
              <h3>Registered Modules: {props.modules.length}</h3>
            ) : null}
          </Grid>
          <Grid item xs={4} md={2} sx={{ textAlign: "right" }}>
            {!props.validated ? (
              <Tooltip title={"This domain is not validated yet"}>
                <IconButton onClick={handleValidateOpen}>
                  <FontAwesomeIcon
                    size="4x"
                    icon={faCircleExclamation}
                    className="unverified"
                  />
                </IconButton>
              </Tooltip>
            ) : (
              <Tooltip title={"This domain has been verified"}>
                <IconButton onClick={handleValidateOpen}>
                  <FontAwesomeIcon
                    size="4x"
                    icon={faCircleCheck}
                    className="verified"
                  />
                </IconButton>
              </Tooltip>
            )}
          </Grid>
        </Grid>
      </CardActionArea>
      <CardActions>
        <Grid container spacing={2}>
          <Grid fullWidth item xs={12} sx={{ textAlign: "right" }}>
            {!props.validated ? (
              <>
                <IconButton>
                  <Tooltip title={"Copy TXT Record"}>
                    <ContentCopyIcon fontSize="large" onClick={onCopy} />
                  </Tooltip>
                </IconButton>

                <IconButton>
                  <Tooltip title={"New Token"}>
                    <ReplayIcon fontSize="large" onClick={requestToken} />
                  </Tooltip>
                </IconButton>
                <IconButton>
                  <Tooltip title={"Verify Domain"}>
                    <CheckCircleIcon fontSize="large" onClick={reVerify} />
                  </Tooltip>
                </IconButton>
              </>
            ) : null}

            <IconButton>
              <Tooltip title={"Delete Domain"}>
                <DeleteForeverIcon fontSize="large" onClick={handleDelete} />
              </Tooltip>
            </IconButton>
          </Grid>
        </Grid>
      </CardActions>
      <ValidateDomain
        alert={props.alert}
        id={props.id}
        title={props.validated ? null : `${props.domain} is not yet validated`}
        open={validateOpen}
        domain={props.domain}
        token={props.token}
        validated={props.validated}
        handleClose={handleValidateClose}
        handleValidate={handleValidateDomain}
      />
    </Card>
  );
};

export default Domain;

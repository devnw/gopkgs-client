import React, { useState } from "react";
import {
  IconButton,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import Module from "./Module";
import "./Modules.scss";
import ValidFirstSort from "../../utils/ValidFirstSort";

const ModuleList = (props) => {
  if (props.domains?.length <= 0) {
    return <div />;
  }

  props.domains.sort(ValidFirstSort);

  return (
    <div>
      {props.domains?.map((domain) => (
        <Accordion
          key={domain.name}
          className='accordion'
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#0E2E3F" }} />}
            aria-controls="panel1a-content"
            disabled={!domain.validated}
            id="panel1a-header"
            className='accordion-summary'
          >
            <Typography variant="hh32">
              {domain.validated ? domain.name : `${domain.name} (unvalidated)`}
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            className='accordion-details'
          >
            {domain.modules?.map((module) => (
              <Module
                className="moduleListItem"
                key={module.path}
                domain={domain.name}
                path={module.path}
                type={module.type}
                repo={module.repo}
                docs={module.docs}
              />
            ))}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default ModuleList;

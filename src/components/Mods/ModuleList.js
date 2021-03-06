import React from 'react'
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
} from '@mui/material'

import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

import Module from './Module'
import './Modules.scss'
import ValidFirstSort from '../../utils/ValidFirstSort'

const ModuleList = (props) => {
    if (props.domains?.length <= 0) {
        return <div />
    }

    props.domains?.sort(ValidFirstSort)

    return (
        <div>
            {props.domains?.map((domain) => (
                <Accordion key={domain.domain} className="accordion">
                    <AccordionSummary
                        expandIcon={
                            <ExpandMoreIcon sx={{ color: '#0E2E3F' }} />
                        }
                        aria-controls="panel1a-content"
                        disabled={!domain.validated}
                        id="panel1a-header"
                        className="accordion-summary"
                    >
                        <Typography variant="hh32">
                            {domain.validated
                                ? domain.domain
                                : `${domain.domain} (unvalidated)`}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails className="accordion-details">
                        {domain.modules?.map((mod) =>
                            !mod ? null : (
                                <Module
                                    className="moduleListItem"
                                    key={domain.domain + mod.path}
                                    domain={domain}
                                    module={mod}
                                    updateModule={props.updateModule}
                                    deleteModule={props.deleteModule}
                                />
                            )
                        )}
                    </AccordionDetails>
                </Accordion>
            ))}
        </div>
    )
}

export default ModuleList

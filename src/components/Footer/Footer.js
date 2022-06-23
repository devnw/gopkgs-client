import React from 'react'
import { Typography, IconButton, Tooltip, Link } from '@mui/material'

import GitHubIcon from '@mui/icons-material/GitHub'

import './Footer.scss'

const Footer = (props) => {
    return (
        <footer className="footer">
            <div>
                <a href="https://devnw.com">
                    <img src={props.logo} className="logo" alt="logo" />
                </a>
                <div>
                    <Tooltip title="Frontend Repository">
                        <IconButton
                            component={Link}
                            href="https://github.com/devnw/gopkgs-client"
                        >
                            <GitHubIcon color="secondary" />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Backend Repository">
                        <IconButton
                            component={Link}
                            href="https://github.com/devnw/srv.gopkgs.org"
                        >
                            <GitHubIcon color="secondary" />
                        </IconButton>
                    </Tooltip>
                </div>
                <Typography variant="body2" color="white" align="center">
                    © 2022 Developer Network
                </Typography>
            </div>
        </footer>
    )
}

export default Footer

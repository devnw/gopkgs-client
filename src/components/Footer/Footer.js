import React from 'react'
import { Typography } from '@mui/material'

import './Footer.scss'

const Footer = (props) => {
    return (
        <footer className="footer">
            <div>
                <a href="https://devnw.com">
                    <img src={props.logo} className="logo" alt="logo" />
                </a>
                <Typography variant="body2" color="white" align="center">
                    © 2022 Developer Network
                </Typography>
            </div>
        </footer>
    )
}

export default Footer

import React from 'react'
import { Grid, Container, Link, Button, Typography } from '@mui/material'

import './Footer.scss'

const Footer = (props) => {
    return (
        <footer className="footer">
            <div>
                <a href="https://devnw.com">
                    <img src={props.logo} className="logo" alt="logo" />
                </a>
                <Container maxWidth="sm">
                    <div className="footer-links">
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6} md={3}>
                                <Button component={Link} to={'/'}>
                                    Home
                                </Button>
                            </Grid>
                            <Grid item xs={12} sm={6} md={3}>
                                <Button component={Link} to={'/about'}>
                                    About
                                </Button>
                            </Grid>
                            <Grid item xs={12} sm={6} md={3}>
                                <Button component={Link} to={'/docs'}>
                                    Docs
                                </Button>
                            </Grid>
                            <Grid item xs={12} sm={6} md={3}>
                                <Button component={Link} to={'/about#privacy'}>
                                    Privacy
                                </Button>
                            </Grid>
                        </Grid>
                    </div>
                </Container>
                <Typography variant="body2" color="white" align="center">
                    © 2022 Developer Network
                </Typography>
            </div>
        </footer>
    )
}

export default Footer

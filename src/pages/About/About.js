import React from 'react'
import data from '../../content/faq.json'
import {
    Container,
    Typography,
    Grid,
    IconButton,
    Tooltip,
    Box,
    Link,
} from '@mui/material'
import './About.scss'

import Ref from '../../components/Ref'

import LanguageIcon from '@mui/icons-material/Language'
import TwitterIcon from '@mui/icons-material/Twitter'
import RedditIcon from '@mui/icons-material/Reddit'
import YouTubeIcon from '@mui/icons-material/YouTube'
import GitHubIcon from '@mui/icons-material/GitHub'

const About = () => {
    const aboutInfo = data.map((ele, idx) => {
        const qa = ele.questions.map((el, ix) => {
            return (
                <div key={ix}>
                    <Ref variant="h3" sx={{ paddingBottom: '5px' }}>
                        {el.question}
                    </Ref>
                    <Typography
                        variant="body1"
                        dangerouslySetInnerHTML={{ __html: el.answer }}
                    ></Typography>{' '}
                    {/* fyi - this is fine, it's static content */}
                    {!el.additionalInfo ? null : (
                        <Typography
                            variant="body2"
                            sx={{
                                padding: '1rem',
                            }}
                            dangerouslySetInnerHTML={{
                                __html: el.additionalInfo,
                            }}
                        ></Typography>
                    )}
                </div>
            )
        })

        return (
            <div key={idx}>
                <Ref variant="h2" className="about-heading">
                    {ele.heading}
                </Ref>
                {qa}
            </div>
        )
    })

    return (
        <Container sx={{ padding: '10px' }}>
            <Ref variant="h1">What is GoPkgs.org all about?</Ref>
            <Typography variant="body1">
                Go Packages (<code>gopkgs.org</code>) is a FREE service for
                simplifying developer setup of Go (golang) custom import paths.
                Normally, you would have to manually setup static hosting with
                proper meta tags, and maintain that site. This service allows
                you to setup your import paths in a simple, easy to use,
                repeatable, and secure way.
            </Typography>
            <Ref variant="h2" className="about-heading">
                Creators
            </Ref>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Ref variant="h3" sx={{ textAlign: 'center' }}>
                                Benji Vesterby
                            </Ref>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            sx={{ display: 'flex', justifyContent: 'center' }}
                        >
                            <Box fullWidth>
                                <Tooltip title="Website">
                                    <IconButton
                                        component={Link}
                                        href="https://benjiv.com"
                                    >
                                        <LanguageIcon />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="GitHub">
                                    <IconButton
                                        component={Link}
                                        href="https://github.com/benjivesterby"
                                    >
                                        <GitHubIcon />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="YouTube">
                                    <IconButton
                                        component={Link}
                                        href="https://www.youtube.com/c/benjivesterby"
                                    >
                                        <YouTubeIcon />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="Twitter">
                                    <IconButton
                                        component={Link}
                                        href="https://twitter.com/benjivesterby"
                                    >
                                        <TwitterIcon />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="Reddit">
                                    <IconButton
                                        component={Link}
                                        href="https://www.reddit.com/user/nauntilus"
                                    >
                                        <RedditIcon />
                                    </IconButton>
                                </Tooltip>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Ref variant="h3" sx={{ textAlign: 'center' }}>
                                Adam Schaal
                            </Ref>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            sx={{ display: 'flex', justifyContent: 'center' }}
                        >
                            <Box fullWidth>
                                <Tooltip title="Website">
                                    <IconButton
                                        component={Link}
                                        href="https://kernelcon.org/"
                                    >
                                        <LanguageIcon />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="GitHub">
                                    <IconButton
                                        component={Link}
                                        href="https://github.com/clevernyyyy"
                                    >
                                        <GitHubIcon />
                                    </IconButton>
                                </Tooltip>
                                {/* <Tooltip title="YouTube">
                                        <IconButton component={Link} href="">
                                            <YouTubeIcon />
                                        </IconButton>
                                    </Tooltip> */}
                                <Tooltip title="Twitter">
                                    <IconButton
                                        component={Link}
                                        href="https://twitter.com/clevernyyyy"
                                    >
                                        <TwitterIcon />
                                    </IconButton>
                                </Tooltip>
                                {/* <Tooltip title="Reddit">
                                        <IconButton component={Link} href="">
                                            <RedditIcon />
                                        </IconButton>
                                    </Tooltip> */}
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <div>{aboutInfo}</div>
        </Container>
    )
}

export default About

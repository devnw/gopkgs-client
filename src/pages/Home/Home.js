import React from 'react'
import { Container, Typography } from '@mui/material'
import Ref from '../../components/Ref'
import TOC from '../../components/TOC'

const Home = () => {
    return (
        <Container>
            <TOC>
                <Ref variant="h1">Go Custom Domain Import Service</Ref>
                <Ref variant="h2">
                    What is a custom domain import (vanity import) in Go?
                </Ref>
                <Typography variant="body1">
                    Import paths in Go applications use URLs to refer to modules
                    and packages (the standard library is an exception). These
                    import paths generally start with `github.com` or
                    `gitlab.com` due to the fact that most modules/packages are
                    hosted on GitHub or GitLab. If you want to use a custom
                    domain, instead of `github.com`, `gitlab.com`, etc..., you
                    can, but it requires work to properly setup the import
                    paths, host the appropriate meta-tags, DNS records, and
                    manage new modules.
                </Typography>
                <Ref variant="h2">
                    What are the benefits of custom domain imports?
                </Ref>
                <Typography variant="body1">
                    Custom domain imports provide several benefits to the Go
                    community: - Portability of Maintainership - Portability of
                    Source Code - Stable Import Paths - Shorter Import Paths -
                    Branding Support
                </Typography>
                <Ref variant="h2">How do I use custom domain imports?</Ref>
                <Typography variant="body1">
                    Login to `https://gopkgs.org` and create and add a domain.
                    Following the documentation for [setting up a new
                    domain](/docs#setting-up-a-new-domain), you can add your
                    domain, go through the verification process and start adding
                    modules.
                </Typography>
                <Ref variant="h2"> Can I use my own domain name?</Ref>
                <Typography variant="body1">
                    Absolutely! You can use your own domain name and add your
                    modules.
                </Typography>
            </TOC>
        </Container>
    )
}

export default Home

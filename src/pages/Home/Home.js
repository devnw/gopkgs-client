import React from 'react'
import { Container, Typography } from '@mui/material'
import Ref from '../../components/Ref'

const Home = () => {
    return (
        <Container>
            <Ref variant="h1">Go Custom Domain Import Service</Ref>
            <Ref variant="h2">
                What is a custom domain import (vanity import) in Go?
            </Ref>
            <Typography variant="body1">
                Import paths in Go applications use URLs to refer to modules and
                packages (the standard library is an exception). These import
                paths generally start with `github.com` or `gitlab.com` due to
                the fact that most modules/packages are hosted on GitHub or
                GitLab. If you want to use a custom domain, instead of
                `github.com`, `gitlab.com`, etc..., you can, but it requires
                work to properly setup the import paths, host the appropriate
                meta-tags, DNS records, and manage new modules.
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
                You can only use the custom import once you've followed the{' '}
                <a href="/docs">documentation</a> to add and verify your domain
                and have added a module.
                <br />
                <br />
                If your custom module is <code>go.example.com/mymodule</code>,
                you can import it using the following import path:
                <br />
                <br />
                <code>import "go.example.com/mymodule"</code>
            </Typography>
            <Ref variant="h2">How do custom imports work?</Ref>
            <Typography variant="body1">
                Custom imports in Go are handled by the Go toolchain. The Go
                toolchain queries the import URl and passing a query string of{' '}
                <code>?go-get=1</code>. If the URL contains a meta tag with the{' '}
                <code>go-import</code> attribute, the toolchain will use the
                meta tag to redirect the import and pull the module from the
                configured version control system.
                <br />
                <br />
                Because the <code>?go-get=1</code> query string is used by the
                toolchain, gopkgs will host the proper meta tag for the module
                when that query string is used. If you navigate to the module's
                import path, without the <code>?go-get=1</code> query string,
                the gopkgs server will redirect to the module's domain URL if it
                is configured on the module.
            </Typography>
        </Container>
    )
}

export default Home

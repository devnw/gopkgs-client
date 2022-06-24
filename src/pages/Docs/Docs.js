import React from 'react'
import { Container, Typography, Box } from '@mui/material'

import './Docs.scss'

import Ref from '../../components/Ref'
import TOC from '../../components/TOC'

const Docs = () => {
    return (
        <Container sx={{ padding: '10px' }}>
            <TOC>
                <Ref variant="h1">Documentation</Ref>
                <Box>
                    <Ref variant="h2">Configuring a Domain</Ref>
                    <Typography variant="p">
                        Configuring a domain is a simple process, but requires
                        access to management of your DNS records and a domain
                        name.
                    </Typography>
                    <Ref variant="h3">Step 1: Register A Domain</Ref>
                    <Typography variant="p">
                        If you don't already have a domain name, you can
                        register one with the domain registrar. I recommend{' '}
                        <a
                            href="https://www.cloudflare.com/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Cloudflare
                        </a>
                        , or{' '}
                        <a
                            href="https://domains.google.com/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Google Domains
                        </a>{' '}
                        for this. There are some TLDs(top level domains) that
                        are not supported by Cloudflare or Google Domains, so
                        you may need to use a different registrar for those. For
                        specialty TLDs I recommend{' '}
                        <a
                            href="https://www.namecheap.com/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Namecheap
                        </a>{' '}
                        or{' '}
                        <a
                            href="https://www.101domain.com/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            101domains
                        </a>
                        .
                    </Typography>
                    <Ref variant="h3">Step 2: Add Domain to Domains Page</Ref>
                    Navigate to the <a href="/domains">domains</a> page and add
                    the domain using the Add Domain input.
                    <br />
                    <br />
                    <strong>NOTE:</strong> It is recommended to use a{' '}
                    <a
                        href="https://blog.hubspot.com/website/what-is-a-subdomain"
                        target="_blank"
                        rel="noreferrer"
                    >
                        subdomain.
                    </a>
                    <Ref variant="h3">Step 3: Update DNS Records</Ref>
                    <Typography variant="p">
                        Following the instructions provided on the Add Domain
                        page (after adding the domain, or by clicking the red
                        exclamation icon), add the TXT and CNAME records to your
                        DNS zone file.
                    </Typography>
                    <Ref variant="h3">Step 4: Wait 24-48 hours</Ref>
                    <Typography variant="p">
                        And now for the hard part. After you have added the
                        domain to the Domains page, you will need to wait for
                        24-48 hours for the DNS records to propagate. This is
                        not somthing that we control and is due to how DNS
                        works.
                        <br />
                        <br />
                        <strong>NOTE:</strong> DNS propagation can be faster
                        than 24-48 hours depending on your registrar and TLD
                        owner. However, validation requests are limited to once
                        per day by GoPkgs.
                    </Typography>
                    <Ref variant="h3">Step 5: Verify Domain</Ref>
                    <Typography variant="p">
                        Once the DNS records have propagated, you can verify the
                        domain by clicking the checkmark icon in the{' '}
                        <a href="/domains">domains</a> page, or opening the
                        domain details dialog by clicking the red exclamation
                        icon, then clicking the "Verify" button.
                    </Typography>
                </Box>
                <Ref variant="h2">Configuring a Module</Ref>
                <Typography variant="p">
                    From the <a href="/modules">modules</a> page, you can add
                    modules to verified domains.
                    <Ref variant="h3">Step 1: Select the Domain</Ref>
                    <Typography variant="p">
                        Select the domain you want to add the module to from the
                        drop down list. Only domains that have been verified
                        will be available for selection.
                    </Typography>
                    <Ref variant="h3">
                        Step 2: Set the Version Control System
                    </Ref>
                    <Typography variant="p">
                        Select the version control system you want to use from
                        the VCS drop down list. The default is Git, but you can
                        select any of the version control systems supported by
                        Go.
                    </Typography>
                    <Ref variant="h3">Step 3: Module Name and Repository</Ref>
                    <Typography variant="p">
                        Set the module name and repository URL.
                    </Typography>
                    <Ref variant="h3">
                        Step 4: Add the Documentation URL (optional)
                    </Ref>
                    <Ref variant="h3">Step 5: Click Save</Ref>
                    <Typography variant="p">
                        Now for the hardest part. Click the "Save" button to add
                        the module to your domain.
                    </Typography>
                </Typography>
                <Ref variant="h3">
                    Configuring a Module with a Private Repository
                </Ref>
                <Typography variant="p">
                    There are some additional steps for configuring a custom
                    domain with private modules. To ensure that{' '}
                    <code>go get</code> works as expected, you need to add the
                    following to your <code>~/.gitconfig</code> file using this
                    command (assuming your private modules are hosted on GitHub,
                    replace the <code>github.com</code> with the domain name
                    where your private modules are hosted):
                    <br />
                    <br />
                    <code>
                        git config --global url."git@github.com:".insteadOf
                        "https://github.com/"
                    </code>
                    <br />
                    <br />
                    <strong>NOTE:</strong> This GIT configuration will use the
                    repository URL, not the custom module URL.
                    <br />
                    <br />
                    You can also add it directly to the{' '}
                    <code>~/.gitconfig</code> file if you have access to the
                    file following the steps detailed{' '}
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.digitalocean.com/community/tutorials/how-to-use-a-private-go-module-in-your-own-project#providing-private-module-credentials-for-ssh"
                    >
                        here
                    </a>
                    .
                    <br />
                    <br />
                    The last step is to add your private modules to the{' '}
                    <code>GOPRIVATE</code> variable. This can be done either by
                    adding the account root path (i.e.{' '}
                    <code>export GOPRIVATE=github.com/user/repo</code>) or by
                    adding the account root path and the module name (i.e.{' '}
                    <code>export GOPRIVATE=github.com/user/repo</code>).
                    <br />
                    <br />
                    If you're using a custom domain the custom domain name
                    should be used instead of the repository URL. For example,
                    if you're using a custom domain called{' '}
                    <code>mydomain.com</code> and your module is named{' '}
                    <code>mymodule</code>, you would add <strong>ONE</strong>{' '}
                    the following to the <code>GOPRIVATE</code> variable:
                    <br />
                    <br />
                    This will add the custom domain to the GOPRIVATE variable.
                    <br />
                    <code>export GOPRIVATE=mydomain.com</code>
                    <br />
                    <br />
                    This will add the custom module name to the GOPRIVATE
                    variable.
                    <br />
                    <code>export GOPRIVATE=mydomain.com/mymodule</code>
                    <br />
                    <br />
                    <strong>NOTE:</strong> For multiple private modules, you add
                    them all to the <code>GOPRIVATE</code> variable separated by
                    a comma.
                    <br />
                    <br />
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.digitalocean.com/community/tutorials/how-to-use-a-private-go-module-in-your-own-project"
                    >
                        Click here for a more detailed explanation.
                    </a>
                </Typography>
                <Ref variant="h2">Migrating Maintainership</Ref>
                <Typography variant="p">
                    If you are migrating ownership of a module, you will need
                    contact the original owner to transfer ownership and have
                    them email <strong>info@gopkgs.org</strong>. Currently there
                    is not a way to do this VIA the UI (
                    <a
                        href="https://github.com/devnw/gopkgs-client/issues/29"
                        target="_blank"
                        rel="noreferrer"
                    >
                        GitHub Issue #29
                    </a>
                    ).
                </Typography>
                <Ref variant="h2">API Access</Ref>
                <Typography variant="p">
                    The API is currently accessible to any user with a valid
                    JWT. Documentation for the API will come in the future (
                    <a
                        href="https://github.com/devnw/gopkgs-client/issues/30"
                        target="_blank"
                        rel="noreferrer"
                    >
                        GitHub Issue #30
                    </a>
                    ).
                </Typography>
            </TOC>
        </Container>
    )
}

export default Docs

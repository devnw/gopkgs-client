import React from 'react'
import { Container, Typography, Box } from '@mui/material'

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
                <Ref variant="h3">
                    Configuring a Module with a Private Repository
                </Ref>
                <Ref variant="h2">Migrating Maintainership</Ref>
                <Typography variant="p">
                    If you are migrating ownership of a module, you will need
                    contact the original owner to transfer ownership and have
                    them email <strong>info@gopkgs.org</strong>. Currently there
                    is not a way to do this VIA the UI (This will be added with{' '}
                    <a href="https://github.com/devnw/gopkgs-client/issues/29">
                        this change
                    </a>
                    )
                </Typography>
            </TOC>
        </Container>
    )
}

export default Docs

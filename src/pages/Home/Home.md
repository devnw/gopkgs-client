# Go Custom Domain Import Service

>***NOTE:*** `gopkgs.org` is under active development and the service is not yet
fully operational.

## What is a custom domain import (vanity import) in Go?

Import paths in Go applications use URLs to refer to modules and packages (the
standard library is an exception). These import paths generally start with
`github.com` or `gitlab.com` due to the fact that most modules/packages are
hosted on GitHub or GitLab.

If you want to use a custom domain, instead of `github.com`, `gitlab.com`,
etc..., you can, but it requires work to properly setup the import paths, host
the appropriate meta-tags, DNS records, and manage new modules.

## What are the benefits of custom domain imports?

Custom domain imports provide several benefits to the Go community:

- Portability of Maintainership
- Portability of Source Code
- Stable Import Paths
- Shorter Import Paths
- Branding Support

## How do I use custom domain imports?

Login to `https://gopkgs.org` and create and add a domain. Following the
documentation for [setting up a new domain](/docs#setting-up-a-new-domain), you
can add your domain, go through the verification process and start adding
modules.

## Can I use my own domain name?

Absolutely! You can use your own domain name and add your modules.

# About Vanity Import Paths in Google Go

Go Packages (`gopkgs.org`) is created to be a FREE service to allow Go developers
to setup their own vanity import paths without having to go through the hassle
of setting up a custom site with meta tags, hosting, content, etc.

## Cost

### Is this service free?

Yes, it is free.

### Even for custom domains?

Yup, you can use your own domain name for free.

### Even or private repositories?

Yes, even use private repositories.

Private repositories require additional local configuration and setup. [Read more](/docs)

### Why would you do that?

For reasons other than being a benevolent OSS Contributor? I don't know.

### How do you cover the cost?

Currently the service is hosted on GCP free tier and the associated cost is minimal. As the service expands it may become more expensive for me to cover the cost. If you would like to donate to the project you can sponsor the [Developer Network Github organization](https://github.com/devnw) through [Github Sponsors](https://github.com/sponsors/devnw).

## How does it work?

### Vanity Import Paths

Vanity Import paths were added to the `go get` command to allow for pointing to
the version control repository of a package rather than using an import path
that **was** the version control repository.

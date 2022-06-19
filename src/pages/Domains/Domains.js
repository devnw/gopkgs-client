import React, { useState } from 'react'

import { Container, Typography } from '@mui/material'

import AddDomain from '../../components/Domains/AddDomain'
import DomainsList from '../../components/Domains/DomainsList'
import { useAuth0 } from '@auth0/auth0-react'

import { putDomain } from '../../api/domains'

import ValidateDomain from '../../components/Domains/ValidateDomain'

import { getVerify } from '../../api/verify'
import { getToken } from '../../api/token'
import { delDomain } from '../../api/domains'

const Domains = (props) => {
    const [validateOpen, setValidateOpen] = useState(false)
    const [selectedDomain, setSelectedDomain] = useState(null)
    const { isAuthenticated, getAccessTokenSilently } = useAuth0()
    if (!isAuthenticated) {
        return <div />
    }

    const handleValidateClose = () => {
        setValidateOpen(false)
    }

    const handleValidateDomain = (domainID) => {
        setSelectedDomain(props.domains?.find((d) => d.id === domainID))
        setValidateOpen(true)
    }

    const handleDelete = (id, domain) => {
        delDomain(getAccessTokenSilently, id)
            .then((response) => {
                if (response.status >= 300) {
                    props.alert({
                        open: true,
                        message: `Request failed with status ${response.status}`,
                        severity: 'error',
                    })
                    return
                }

                props.setDomains(props.domains.filter((d) => d.id !== id))

                props.alert({
                    open: true,
                    message: `Domain ${domain} deleted successfully`,
                    severity: 'success',
                })

                handleValidateClose()
            })
            .catch((err) => {
                props.alert({
                    open: true,
                    message: `Error while deleting domain:  ${domain}`,
                    severity: 'error',
                })
            })
    }

    const handleReVerify = (id, domain) => {
        getVerify(getAccessTokenSilently, id)
            .then((response) => {
                if (response.status >= 300) {
                    props.alert({
                        open: true,
                        message: `Request failed with status ${response.status}`,
                        severity: 'error',
                    })
                    return
                }

                props.alert({
                    open: true,
                    message: `Domain ${domain} verified successfully`,
                    severity: 'success',
                })

                handleValidateClose()
            })
            .catch((err) => {
                props.alert({
                    open: true,
                    message: `Domain ${domain} verification failed; please try again in 1 hour.`,
                    severity: 'error',
                })
            })
    }

    const handleRequestToken = (id, domain) => {
        getToken(getAccessTokenSilently, id)
            .then((response) => {
                if (response.status >= 300) {
                    props.alert({
                        open: true,
                        message: `Request failed with status ${response.status}`,
                        severity: 'error',
                    })
                    return
                }

                props.alert({
                    open: true,
                    message: `Token for domain ${domain} requested successfully`,
                    severity: 'success',
                })
            })
            .catch((err) => {
                props.alert({
                    open: true,
                    message: `Token request failed for ${domain}; please try again in 24 hours.`,
                    severity: 'error',
                })
            })
    }

    const addDomain = (domain) => {
        if (domain === '') {
            return
        }

        if (props.domains?.find((d) => d.domain === domain)) {
            return
        }

        putDomain(getAccessTokenSilently, domain)
            .then((d) => {
                if (!d) {
                    return
                }

                if (!props.domains) {
                    props.setDomains([d])
                    return
                }

                props.setDomains([d, ...props.domains])
                props.alert({
                    open: true,
                    message: `Domain ${d.domain} added successfully`,
                    severity: 'success',
                })
                setSelectedDomain(d)
                setValidateOpen(true)
            })
            .catch((err) => {
                props.alert({
                    open: true,
                    message: `Error adding domain: ${domain}`,
                    severity: 'error',
                })
            })
    }

    return (
        <Container sx={{ padding: '10px' }}>
            <AddDomain add={addDomain} alert={props.alert} />

            {props.domains?.length > 0 ? (
                <div>
                    <Typography variant="h1" component="div" gutterBottom>
                        Your Domains
                    </Typography>
                    <DomainsList
                        alert={props.alert}
                        domains={props.domains}
                        handleValidateDomain={handleValidateDomain}
                        handleReVerify={handleReVerify}
                        handleRequestToken={handleRequestToken}
                        handleDelete={handleDelete}
                    />
                </div>
            ) : null}

            {selectedDomain == null ? null : (
                <ValidateDomain
                    alert={props.alert}
                    id={selectedDomain?.id}
                    title={
                        selectedDomain.validated
                            ? null
                            : `${selectedDomain.domain} is not yet validated`
                    }
                    open={validateOpen}
                    domain={selectedDomain?.domain}
                    token={selectedDomain?.token}
                    validated={selectedDomain?.validated}
                    validate_by={selectedDomain?.validate_by}
                    updated={selectedDomain?.updated}
                    handleClose={handleValidateClose}
                    handleValidate={handleValidateDomain}
                    handleReVerify={handleReVerify}
                    handleRequestToken={handleRequestToken}
                    handleDelete={handleDelete}
                />
            )}
        </Container>
    )
}

export default Domains

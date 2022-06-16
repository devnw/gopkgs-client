import React, { useState } from 'react'

import { Container, Typography } from '@mui/material'

import AddDomain from '../../components/Domains/AddDomain'
import DomainsList from '../../components/Domains/DomainsList'
import { useAuth0 } from '@auth0/auth0-react'

import { putDomain } from '../../api/domains'

import ValidateDomain from '../../components/Domains/ValidateDomain'

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
                        validate={handleValidateDomain}
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
                    handleClose={handleValidateClose}
                    handleValidate={handleValidateDomain}
                />
            )}
        </Container>
    )
}

export default Domains

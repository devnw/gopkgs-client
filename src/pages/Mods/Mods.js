import React from 'react'
import { Container, Typography } from '@mui/material'

import { useAuth0 } from '@auth0/auth0-react'

import ModuleList from '../../components/Mods/ModuleList'
import AddModule from '../../components/Mods/AddModule'

import { postModules } from '../../api/modules'
import './Mods.scss'

const Mods = (props) => {
    const { isAuthenticated, getAccessTokenSilently } = useAuth0()
    if (!isAuthenticated) {
        return <div />
    }

    const addModule = (domain, mod) => {
        if (!props.domains) {
            return
        }

        if (props.modules?.find((m) => m.path === mod.path)) {
            return
        }

        postModules(getAccessTokenSilently, domain.id, [mod])
            .then((m) => {
                props.setDomains(
                    props.domains.map((d, idx) => {
                        if (d.domain === domain.domain) {
                            return {
                                ...domain,
                                modules: [...m, ...domain.modules],
                            }
                        }

                        d.key = idx

                        props.alert({
                            open: true,
                            message: `Module ${
                                domain.domain + '/' + mod.path
                            } added successfully`,
                            severity: 'success',
                        })

                        return d
                    })
                )
            })
            .catch((err) => {
                props.alert({
                    open: true,
                    message: `Error adding module: ${
                        domain.domain + '/' + mod.path
                    }`,
                    severity: 'error',
                })
            })
    }

    return (
        <Container sx={{ padding: '10px' }}>
            <AddModule
                alert={props.alert}
                domains={props.domains}
                addModule={addModule}
            />
            <Typography
                className="mod-page-heading"
                component="div"
                gutterBottom
            >
                Your Modules
            </Typography>
            <ModuleList alert={props.alert} domains={props.domains} />
        </Container>
    )
}

export default Mods

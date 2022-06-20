import React, { useEffect, useState } from 'react'
import copy from 'clipboard-copy'
import {
    Card,
    CardActionArea,
    CardActions,
    Grid,
    Tooltip,
    IconButton,
    Typography,
} from '@mui/material'

import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import ReplayIcon from '@mui/icons-material/Replay'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import InfoIcon from '@mui/icons-material/Info'
import DoneAllIcon from '@mui/icons-material/DoneAll'
import './Domain.scss'
import DeleteDialog from '../DeleteDialog'

const srv = 'srv.gopkgs.org'

const Domain = (props) => {
    const [CNAMEErr, setCNAMEErr] = useState(false)
    const [deleteOpen, setDeleteOpen] = React.useState(false)
    // Determine if the cname is pointing to the correct domain
    useEffect(() => {
        fetch(`https://dns.google/resolve?name=${props.domain}`).then((res) => {
            if (res.status >= 300) {
                return
            }

            res.json().then((data) => {
                if (!data.Answer) {
                    setCNAMEErr(true)
                    return
                }

                if (data.Answer && data.Answer.length <= 0) {
                    setCNAMEErr(true)
                    return
                }

                if (data.Answer[0].data !== `${srv}.`) {
                    setCNAMEErr(true)
                }
            })
        })
    }, [props.domain, setCNAMEErr])

    const handleValidateOpen = () => {
        props.handleValidate(props.id)
    }

    const handleDeleteClickOpen = () => {
        setDeleteOpen(true)
    }

    const handleDeleteClose = () => {
        setDeleteOpen(false)
    }

    const handleDeleteDomain = () => {
        props.handleDelete(props.id, props.domain)
        setDeleteOpen(false)
    }

    const handleRequestToken = () => {
        props.handleRequestToken(props.id, props.domain)
        handleValidateOpen()
    }

    const onCopy = (content) => {
        copy(props.data)
        props.alert({
            open: true,
            message: 'TXT Record copied to clipboard!',
            severity: 'success',
        })
    }

    return (
        <Card
            className="domain-summary"
            sx={{
                marginTop: '10px',
                borderRadius: '0px',
            }}
        >
            <CardActionArea component="div" onClick={handleValidateOpen}>
                <Grid
                    container
                    spacing={2}
                    alignItems="center"
                    justify="center"
                    className="domain-name-background"
                >
                    <Grid item xs={8} md={10}>
                        <Typography variant="h2">{props.domain}</Typography>
                    </Grid>
                    <Grid item xs={4} md={2} sx={{ textAlign: 'right' }}>
                        {!props.validated ? (
                            <IconButton onClick={handleValidateOpen}>
                                <Tooltip
                                    title={'This domain is not validated yet'}
                                >
                                    <InfoIcon
                                        fontSize="large"
                                        className="unverified"
                                    />
                                </Tooltip>
                            </IconButton>
                        ) : (
                            <IconButton onClick={handleValidateOpen}>
                                <Tooltip
                                    title={'This domain has been verified'}
                                >
                                    <DoneAllIcon
                                        fontSize="large"
                                        className="verified"
                                    />
                                </Tooltip>
                            </IconButton>
                        )}
                    </Grid>
                </Grid>
            </CardActionArea>
            <CardActions>
                <Grid container spacing={2}>
                    {!CNAMEErr ? null : (
                        <Grid item xs={4}>
                            <Typography
                                variant="body"
                                sx={{ color: 'darkred', marginLeft: '10px' }}
                            >
                                {props.domain} is not pointing to {srv}
                            </Typography>
                        </Grid>
                    )}
                    {!CNAMEErr && props.modules?.length > 0 ? (
                        <Grid item xs={4}>
                            Registered Modules: {props.modules.length}
                        </Grid>
                    ) : null}
                    <Grid
                        item
                        xs={props.modules?.length > 0 ? 8 : 12}
                        sx={{ textAlign: 'right' }}
                    >
                        {!props.validated ? (
                            <>
                                <IconButton onClick={onCopy}>
                                    <Tooltip title={'Copy TXT Record'}>
                                        <ContentCopyIcon fontSize="large" />
                                    </Tooltip>
                                </IconButton>

                                <IconButton onClick={handleRequestToken}>
                                    <Tooltip title={'New Token'}>
                                        <ReplayIcon fontSize="large" />
                                    </Tooltip>
                                </IconButton>
                                <IconButton
                                    onClick={() =>
                                        props.handleReVerify(
                                            props.id,
                                            props.domain
                                        )
                                    }
                                >
                                    <Tooltip title={'Verify Domain'}>
                                        <CheckCircleIcon fontSize="large" />
                                    </Tooltip>
                                </IconButton>
                            </>
                        ) : null}

                        <IconButton onClick={handleDeleteClickOpen}>
                            <Tooltip title={'Delete Domain'}>
                                <DeleteForeverIcon
                                    fontSize="large"
                                    value={props.id}
                                />
                            </Tooltip>
                        </IconButton>
                        <DeleteDialog
                            title={`Delete Domain ${props.domain}`}
                            confirmationText={
                                'Are you sure you want to delete this domain?'
                            }
                            open={deleteOpen}
                            handleClose={handleDeleteClose}
                            handleDelete={handleDeleteDomain}
                        />
                    </Grid>
                </Grid>
            </CardActions>
        </Card>
    )
}

export default Domain

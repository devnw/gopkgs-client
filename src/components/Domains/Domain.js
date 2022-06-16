import React from 'react'
import copy from 'clipboard-copy'
import {
    Card,
    CardActionArea,
    CardActions,
    Grid,
    Tooltip,
    IconButton,
} from '@mui/material'

import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import ReplayIcon from '@mui/icons-material/Replay'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import ErrorIcon from '@mui/icons-material/Error'
import DoneAllIcon from '@mui/icons-material/DoneAll'
import './Domain.scss'

const Domain = (props) => {
    const handleValidateOpen = () => {
        props.validate(props.id)
    }

    const requestToken = () => {}

    const reVerify = () => {}

    const handleDelete = () => {}

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
            <CardActionArea onClick={handleValidateOpen}>
                <Grid
                    container
                    spacing={2}
                    alignItems="center"
                    justify="center"
                    className="domain-name-background"
                >
                    <Grid item xs={8} md={10}>
                        <h2>{props.domain}</h2>
                    </Grid>
                    <Grid item xs={4} md={2} sx={{ textAlign: 'right' }}>
                        {!props.validated ? (
                            <IconButton onClick={handleValidateOpen}>
                                <Tooltip
                                    title={'This domain is not validated yet'}
                                >
                                    <ErrorIcon
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
                    {props.modules?.length > 0 ? (
                        <Grid item xs={4}>
                            Registered Modules: {props.modules.length}
                        </Grid>
                    ) : null}
                    <Grid
                        fullWidth
                        item
                        xs={props.modules?.length > 0 ? 8 : 12}
                        sx={{ textAlign: 'right' }}
                    >
                        {!props.validated ? (
                            <>
                                <IconButton>
                                    <Tooltip title={'Copy TXT Record'}>
                                        <ContentCopyIcon
                                            fontSize="large"
                                            onClick={onCopy}
                                        />
                                    </Tooltip>
                                </IconButton>

                                <IconButton>
                                    <Tooltip title={'New Token'}>
                                        <ReplayIcon
                                            fontSize="large"
                                            onClick={requestToken}
                                        />
                                    </Tooltip>
                                </IconButton>
                                <IconButton>
                                    <Tooltip title={'Verify Domain'}>
                                        <CheckCircleIcon
                                            fontSize="large"
                                            onClick={reVerify}
                                        />
                                    </Tooltip>
                                </IconButton>
                            </>
                        ) : null}

                        <IconButton>
                            <Tooltip title={'Delete Domain'}>
                                <DeleteForeverIcon
                                    fontSize="large"
                                    onClick={handleDelete}
                                />
                            </Tooltip>
                        </IconButton>
                    </Grid>
                </Grid>
            </CardActions>
        </Card>
    )
}

export default Domain

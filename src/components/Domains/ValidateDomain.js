import React from 'react'
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Typography,
    TextField,
    Grid,
    Tooltip,
} from '@mui/material'

import Copy from '../Copy'

const ValidateDomain = (props) => {
    const title = props.title || 'Domain Verification Status'

    const handleClose = () => {
        props.handleClose()
    }

    let statusColor = 'darkred'
    if (props.validated) {
        statusColor = 'darkgreen'
    }

    return (
        <Dialog open={props.open} onClose={handleClose}>
            <DialogTitle
                style={{
                    textAlign: 'center',
                    color: statusColor,
                    verticalAlign: 'middle',
                }}
            >
                {title}
            </DialogTitle>
            <DialogContent>
                {props.validated ? (
                    <DialogContentText>{`${props.domain} is verified.`}</DialogContentText>
                ) : (
                    <DialogContentText>
                        <Typography>
                            Add TXT DNS Record to verify domain ownership.
                        </Typography>
                        <Copy caption={true} data={props.token}>
                            <Tooltip title={'Click to Copy'}>
                                <TextField
                                    id="domain-verification-token"
                                    label="TXT Record"
                                    fullWidth
                                    fullHeight
                                    defaultValue={props.token}
                                    sx={{
                                        marginTop: '30px',
                                    }}
                                    InputProps={{
                                        readOnly: true,
                                        multiline: true,
                                    }}
                                />
                            </Tooltip>
                        </Copy>
                        <Typography>
                            Add TXT CNAME Record for{' '}
                            <Typography sx={{ fontWeight: 'bold' }}>
                                {props.domain}
                            </Typography>{' '}
                            pointing to
                            <Typography sx={{ fontWeight: 'bold' }}>
                                srv.gopkgs.org
                            </Typography>
                        </Typography>
                    </DialogContentText>
                )}
            </DialogContent>
            <DialogActions>
                {props.validated ? (
                    <Grid container spacing={2}>
                        <Grid item>
                            <Button
                                onClick={() =>
                                    props.handleDelete(props.id, props.domain)
                                }
                            >
                                Delete
                            </Button>
                        </Grid>
                        <Grid item sx={{ textAlign: 'right' }}>
                            <Button onClick={handleClose}>Cancel</Button>
                        </Grid>
                    </Grid>
                ) : (
                    <Grid container spacing={4}>
                        <Grid item>
                            <Button
                                onClick={() =>
                                    props.handleRequestToken(
                                        props.id,
                                        props.domain
                                    )
                                }
                            >
                                New Token
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button
                                onClick={() =>
                                    props.handleReVerify(props.id, props.domain)
                                }
                            >
                                Verify
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button
                                onClick={() =>
                                    props.handleDelete(props.id, props.domain)
                                }
                            >
                                Delete
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button onClick={handleClose}>Cancel</Button>
                        </Grid>
                    </Grid>
                )}
            </DialogActions>
        </Dialog>
    )
}

export default ValidateDomain

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

const dateInPast = function (firstDate, secondDate) {
    if (firstDate.setHours(0, 0, 0, 0) <= secondDate.setHours(0, 0, 0, 0)) {
        return true
    }

    return false
}

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
                        {dateInPast(new Date(props.validate_by), new Date()) ? (
                            <Typography
                                variant="h3"
                                style={{ color: 'darkred', fontWeight: 'bold' }}
                            >
                                This domain TXT token has expired without
                                validation. Request a new token below.
                            </Typography>
                        ) : (
                            <div>
                                <Typography variant="h3">Step 1</Typography>
                                <hr />
                                <Typography>
                                    Add TXT DNS Record to verify domain
                                    ownership. This TXT token is only valid for
                                    7 days and must be validated within that
                                    time.
                                    <div style={{ marginTop: '10px' }}>
                                        <strong>NOTE:</strong> This record must
                                        remain on your DNS perpetually. GoPkgs
                                        verifies the TXT record daily to ensure
                                        domain ownership.
                                    </div>
                                </Typography>
                                <Typography
                                    variant="h4"
                                    sx={{ fontWeight: 'bold' }}
                                >
                                    {!props.updated ? null : (
                                        <div>
                                            Last Updated:{' '}
                                            {new Date(
                                                props.updated
                                            ).toLocaleString()}
                                        </div>
                                    )}
                                    <div>
                                        Current Token Expires:{' '}
                                        {new Date(
                                            props.validate_by
                                        ).toLocaleString()}
                                    </div>
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
                                <Typography variant="h3">Step 2</Typography>
                                <hr />
                                <Typography variant="body">
                                    Add CNAME Record for "
                                    <strong>{props.domain}</strong>" pointing to
                                    "<strong>srv.gopkgs.org.</strong>"
                                    (depending on your DNS provider the trailing
                                    `.` is optional) If you are using an APEX
                                    domain you must be using a domain with CNAME
                                    flattening.
                                </Typography>
                                <Typography variant="h3">Step 3</Typography>
                                <hr />
                                DNS records may take 24-48 hours to propagate.
                                The GoPkgs system limits validation attempts to
                                once per day.
                                <Typography variant="h3">Step 4</Typography>
                                <hr />
                                Verify the domain using the `Verify` button
                                below.{' '}
                                <div
                                    style={{
                                        fontStyle: 'italic',
                                        marginTop: '10px',
                                    }}
                                >
                                    Verification attempts do{' '}
                                    <strong>NOT</strong> happen automatically.
                                </div>
                            </div>
                        )}
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

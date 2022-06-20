import React, { useState } from 'react'

import { Card, Box, Button, TextField, Grid } from '@mui/material'

const domainPattern =
    /^(?:(?:[a-zA-Z0-9])(?:[a-zA-Z0-9\-.]){1,61}(?:\.[a-zA-Z]{2,})+|\[(?:(?:(?:[a-fA-F0-9]){1,4})(?::(?:[a-fA-F0-9]){1,4}){7}|::1|::)\]|(?:(?:[0-9]{1,3})(?:\.[0-9]{1,3}){3}))(?::[0-9]{1,5})?$/g
const AddDomain = (props) => {
    const [domain, setDomain] = useState('')

    const handleChange = (event) => {
        setDomain(event.target.value)
    }

    const handleAddDomain = (event) => {
        event.preventDefault()

        if (!domain?.match(domainPattern)) {
            props.alert({
                open: true,
                message: `Invalid domain. Please enter a valid domain.`,
                severity: 'error',
            })
            return
        }

        props.add(domain)
        setDomain('')
    }

    return (
        <Card>
            <Box
                component="form"
                sx={{
                    padding: '10px',
                }}
            >
                <Grid
                    container
                    spacing={2}
                    alignItems="center"
                    justify="center"
                >
                    <Grid item xs={12} md={11}>
                        <TextField
                            required
                            fullWidth
                            id="outlined-required"
                            label="Domain"
                            placeholder="sub.mydomain.com"
                            value={domain}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid
                        fullWidth
                        item
                        xs={12}
                        md={1}
                        sx={{ textAlign: 'right' }}
                    >
                        <Button
                            variant="contained"
                            type="submit"
                            onClick={handleAddDomain}
                        >
                            Add
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Card>
    )
}

export default AddDomain

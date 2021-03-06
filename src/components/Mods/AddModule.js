import React, { useState } from 'react'
import {
    Card,
    Box,
    Button,
    TextField,
    Grid,
    Typography,
    InputLabel,
    FormControl,
    Select,
    MenuItem,
} from '@mui/material'

const AddModule = (props) => {
    const types = ['git', 'mod', 'svn', 'hg', 'fossil', 'bzr']
    const [domain, setDomain] = useState('')
    const [name, setName] = useState('')
    const [type, setType] = useState(types[0])
    const [repo, setRepo] = useState('')
    const [docs, setDocs] = useState('')

    const handleDomainChange = (event) => {
        setDomain(event.target.value)
    }

    const handleVCSChange = (event) => {
        setType(event.target.value)
    }

    const handleModuleChange = (event) => {
        setName(event.target.value)
    }

    const handleRepoChange = (event) => {
        setRepo(event.target.value)
    }

    const handleDocsChange = (event) => {
        setDocs(event.target.value)
    }

    const handleAddModule = (event) => {
        event.preventDefault()

        if (!domain || !name || !repo) {
            props.alert({
                open: true,
                message: `Error adding module. All fields are required except Documentation.`,
                severity: 'error',
            })
            return
        }

        const mod = {
            path: name,
            type: type,
            repo: repo,
            docs: docs,
        }

        props.addModule(domain, mod)

        // Reset the form
        setDomain('')
        setName('')
        setRepo('')
        setDocs('')
        setType(types[0])
    }

    return (
        <Card>
            <Box
                component="form"
                sx={{
                    padding: '10px',
                }}
            >
                <Typography variant="h2">Add Module</Typography>
                <Grid
                    container
                    spacing={{ xs: 1, sm: 1 }}
                    sx={{ padding: '10px' }}
                    alignItems="center"
                    justify="center"
                >
                    <Grid item xs={12} sm={12} md={6}>
                        <FormControl fullWidth>
                            <InputLabel>Domain</InputLabel>
                            <Select
                                required
                                fullWidth
                                id="domain-select"
                                value={domain}
                                label="Domain"
                                onChange={handleDomainChange}
                            >
                                {props.domains
                                    ? props.domains.map((domain) => (
                                          <MenuItem
                                              disabled={!domain.validated}
                                              key={domain.id}
                                              value={domain}
                                          >
                                              {domain.validated
                                                  ? domain.domain
                                                  : `${domain.domain} (unvalidated)`}
                                          </MenuItem>
                                      ))
                                    : null}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6} s={8} md={5}>
                        <TextField
                            required
                            fullWidth
                            id="outlined-required"
                            label="Module"
                            value={name}
                            onChange={handleModuleChange}
                        />
                    </Grid>
                    <Grid item xs={6} s={4} md={1}>
                        <Select
                            labelId="demo-select-small"
                            id="demo-select-small"
                            fullWidth
                            value={type}
                            onChange={handleVCSChange}
                        >
                            {types.map((type) => (
                                <MenuItem key={type} value={type}>
                                    {type.toUpperCase()}
                                </MenuItem>
                            ))}
                        </Select>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <TextField
                            required
                            fullWidth
                            id="outlined-required"
                            label="Repository"
                            placeholder="https://github.com/user/repo"
                            value={repo}
                            onChange={handleRepoChange}
                        />
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <TextField
                            fullWidth
                            id="outlined-required"
                            label="Documentation"
                            placeholder="https://pkg.go.dev/go.example.com/name"
                            value={docs}
                            onChange={handleDocsChange}
                        />
                    </Grid>
                    <Grid item xs={12} sx={{ textAlign: 'right' }}>
                        <Button
                            variant="contained"
                            type="submit"
                            onClick={handleAddModule}
                        >
                            Add
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Card>
    )
}

export default AddModule

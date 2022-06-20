import React, { useState } from 'react'
import {
    TextField,
    Grid,
    Typography,
    Select,
    MenuItem,
    Button,
    DialogActions,
} from '@mui/material'

const EditModule = (props) => {
    const importPath = props.domain.domain + '/' + props.module.path
    const types = ['git', 'mod', 'svn', 'hg', 'fossil', 'bzr']
    const [type, setType] = useState(props.module.type)
    const [repo, setRepo] = useState(props.module.repo)
    const [docs, setDocs] = useState(props.module.docs)

    const handleVCSChange = (event) => {
        setType(event.target.value)
    }

    const handleRepoChange = (event) => {
        setRepo(event.target.value)
    }

    const handleDocsChange = (event) => {
        setDocs(event.target.value)
    }

    const handleEditModule = () => {
        props.updateModule({
            ...props.module,
            type: type,
            repo: repo,
            docs: docs,
        })

        props.handleEditClose()
    }

    return (
        <>
            <Grid
                container
                spacing={{ xs: 2 }}
                sx={{ padding: '10px' }}
                alignItems="center"
                justify="center"
            >
                <Grid item xs={12} md={10}>
                    <Typography variant="h2">{importPath}</Typography>
                </Grid>
                <Grid item xs={12} md={1}>
                    <Select
                        labelId="demo-select-small"
                        id="demo-select-small"
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
                <Grid item xs={12}>
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
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        id="outlined-required"
                        label="Documentation"
                        placeholder="https://pkg.go.dev/go.example.com/name"
                        value={docs}
                        onChange={handleDocsChange}
                    />
                </Grid>
            </Grid>

            <DialogActions>
                <Button onClick={props.handleEditClose}>Cancel</Button>
                <Button onClick={handleEditModule}>Save</Button>
            </DialogActions>
        </>
    )
}

export default EditModule

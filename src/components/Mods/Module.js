import React from 'react'
import {
    Card,
    Grid,
    Typography,
    Link,
    Tooltip,
    Dialog,
    IconButton,
} from '@mui/material'
import Copy from '../Copy'
import EditIcon from '@mui/icons-material/Edit'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'

import EditModule from './EditModule'
import DeleteDialog from '../DeleteDialog'
import './Modules.scss'

const Module = (props) => {
    const importPath = props.domain.domain + '/' + props.module.path

    const [editOpen, setEditOpen] = React.useState(false)
    const [deleteOpen, setDeleteOpen] = React.useState(false)
    const [mod, setMod] = React.useState(props.module)

    const updateModule = (mod) => {
        setMod(mod)
        props.updateModule(props.domain, mod)
    }

    const handleEditClickOpen = () => {
        setEditOpen(true)
    }

    const handleEditClose = () => {
        setEditOpen(false)
    }

    const handleDeleteClickOpen = () => {
        setDeleteOpen(true)
    }

    const handleDeleteClose = () => {
        setDeleteOpen(false)
    }

    const handleDeleteModule = () => {
        props.deleteModule(props.domain, mod)
        setDeleteOpen(false)
    }

    return (
        <Card
            sx={{
                padding: '10px',
            }}
            className={props.className}
        >
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Grid container spacing={2} className="module-header">
                        <Grid item xs={10} md={11}>
                            <Copy data={importPath}>
                                <Typography
                                    variant="h4"
                                    sx={{ fontWeight: 'bold' }}
                                >
                                    {importPath}
                                </Typography>
                            </Copy>
                        </Grid>
                        <Grid item xs={2} md={1}>
                            <Typography className="module-type">
                                {props.module.type}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={3}>
                            <Typography className="module-info" variant="h5">
                                Repository
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={9}>
                            <Link href={props.module.repo}>
                                <Typography className="module-info">
                                    {props.module.repo}
                                </Typography>
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={3}>
                            <Typography className="module-info" variant="h5">
                                Documentation
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={9}>
                            <Link href={props.module.docs}>
                                <Typography className="module-info">
                                    {props.module.docs}
                                </Typography>
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid fullWidth item xs={12} sx={{ textAlign: 'right' }}>
                    <IconButton>
                        <Tooltip title={'Edit Module'}>
                            <EditIcon
                                fontSize="large"
                                onClick={handleEditClickOpen}
                            />
                        </Tooltip>
                    </IconButton>
                    <Dialog open={editOpen} onClose={handleEditClose}>
                        <EditModule
                            domain={props.domain}
                            module={props.module}
                            updateModule={updateModule}
                            handleEditClose={handleEditClose}
                        />
                    </Dialog>
                    <IconButton>
                        <Tooltip title={'Delete Module'}>
                            <DeleteForeverIcon
                                fontSize="large"
                                onClick={handleDeleteClickOpen}
                            />
                        </Tooltip>
                    </IconButton>
                    <DeleteDialog
                        title={`Delete Module ${importPath}`}
                        confirmationText={
                            'Are you sure you want to delete this module?'
                        }
                        open={deleteOpen}
                        handleClose={handleDeleteClose}
                        handleDelete={handleDeleteModule}
                    />
                </Grid>
            </Grid>
        </Card>
    )
}

export default Module

import React from 'react'
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from '@mui/material'

import DangerousIcon from '@mui/icons-material/Dangerous'

const DeleteDialog = (props) => {
    // const [open, setOpen] = useState(props.open);
    const confirmationText =
        props.confirmationText || 'DESTRUCTIVE ACTION!!! Are you sure?'

    const title = props.title || 'Delete'

    const handleClose = () => {
        props.handleClose()
    }

    const confirmDelete = () => {
        props.handleDelete(props.id)
        handleClose()
    }

    return (
        <Dialog open={props.open} onClose={handleClose}>
            <DialogTitle>
                <div style={{ textAlign: 'center', color: 'darkred' }}>
                    <DangerousIcon
                        fontSize="large"
                        style={{ padding: '10px' }}
                    />
                </div>
                <div>{title}</div>
            </DialogTitle>
            <DialogContent>
                <DialogContentText>{confirmationText}</DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={confirmDelete}>Delete</Button>
            </DialogActions>
        </Dialog>
    )
}

export default DeleteDialog

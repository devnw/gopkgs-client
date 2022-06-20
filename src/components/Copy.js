import { Tooltip, IconButton, Box } from '@mui/material'
import copy from 'clipboard-copy'
import React, { useState } from 'react'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'

const Copy = (props) => {
    const [showTooltip, setShowTooltip] = useState(false)

    const onCopy = (content) => {
        copy(props.data)
        setShowTooltip(true)
    }

    const handleOnTooltipClose = () => {
        setShowTooltip(false)
    }

    return (
        <div>
            <Box
                component={Tooltip}
                open={showTooltip}
                title={'Copied to clipboard!'}
                leaveDelay={1500}
                onClose={handleOnTooltipClose}
                {...(props.TooltipProps || {})}
                onClick={onCopy}
                data={props.data}
            >
                {props.children}
            </Box>
            {!props.caption ? null : (
                <div style={{ textAlign: 'right' }}>
                    <IconButton onClick={onCopy}>
                        <ContentCopyIcon></ContentCopyIcon>
                    </IconButton>
                </div>
            )}
        </div>
    )
}

export default Copy

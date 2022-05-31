import React from 'react'
import { ListItemButton, ListItemText, List, Typography } from '@mui/material'

const headerStyles = {
    h2: { paddingLeft: '5px' },
    h3: { paddingLeft: '15px' },
    h4: { paddingLeft: '25px' },
    h5: { paddingLeft: '35px' },
    h6: { paddingLeft: '45px' },
}
let headerClass = ''

const RecursiveTOC = (children, headers) => {
    if (typeof children === 'string') {
        return []
    }

    if (!children) {
        return []
    }

    let contents = []
    children.forEach((child) => {
        if (!child || typeof child === 'string') {
            return
        }

        if (Array.isArray(child)) {
            contents = [...contents, ...RecursiveTOC(child, headers)]
        }

        let tag = ''

        if (!child.type || !headers.includes(child.type)) {
            if (
                !child.props?.variant ||
                !headers.includes(child.props?.variant)
            ) {
                contents = [
                    ...contents,
                    ...RecursiveTOC(child.props?.children, headers),
                ]
                return
            } else {
                tag = child.props?.variant
            }
        } else {
            tag = child.type
        }

        if (tag === 'h2') {
            headerClass = child.props.className
        }

        const id = encodeURIComponent(
            child.props.children.replace(/ /g, '-').toLowerCase()
        )

        contents = [
            ...contents,
            <ListItemButton
                key={id}
                sx={headerStyles[tag]}
                component="a"
                href={`#${id}`}
            >
                <ListItemText primary={child.props.children} />
            </ListItemButton>,
        ]
    })

    return contents
}

const TOC = (props) => {
    const headers = props.headers
        ? props.headers
        : ['h2', 'h3', 'h4', 'h5', 'h6']
    if (props.render) {
        return null
    }

    const contents = RecursiveTOC(props.children, headers)
    return (
        <>
            {props.children.map((child, index) => {
                if (
                    (!props.hasToc &&
                        (child.type === 'h1' ||
                            child.props.variant === 'h1')) ||
                    child.type?.name === 'TOC'
                ) {
                    return (
                        <div key={index}>
                            {child}
                            {contents.length === 0 ? null : (
                                <>
                                    <Typography
                                        id="toc"
                                        className={headerClass}
                                        sx={{
                                            marginTop: '10px',
                                        }}
                                        variant="h2"
                                        component="div"
                                        gutterBottom
                                    >
                                        {props.title
                                            ? props.title
                                            : 'Table Of Contents'}
                                    </Typography>
                                    <List className="toc-list">
                                        {contents.map((child, index) => {
                                            return (
                                                <div key={index}>{child}</div>
                                            )
                                        })}
                                    </List>
                                </>
                            )}
                        </div>
                    )
                }

                return <div key={index}>{child}</div>
            })}
        </>
    )
}

export default TOC

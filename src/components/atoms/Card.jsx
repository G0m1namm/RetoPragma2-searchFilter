import React from 'react'
import { Box, makeStyles } from '@material-ui/core'

const styles = makeStyles({
    image: {
        objectFit: "cover",
        width: "100%"
    }
})

export default function Card({ title, icon }) {
    const classes = styles();

    return (
        <Box display="grid">
            <Box borderRadius={12} overflow="hidden">
                <img src={icon} alt={title} className={classes.image} />
            </Box>
            <span>{title}</span>
        </Box>
    )
}

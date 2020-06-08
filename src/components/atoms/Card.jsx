import React from 'react'
import { Box, makeStyles, Typography } from '@material-ui/core'
import Skeleton from 'react-loading-skeleton';
import { LazyImage } from "react-lazy-images";

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
                <LazyImage
                    src={icon}
                    alt={title}
                    placeholder={({ imageProps, ref }) => (
                        <Box ref={ref}>
                            <Skeleton height={118}/>
                        </Box>
                    )}
                    actual={({ imageProps }) => <img {...imageProps} className={classes.image}/>}
                />
            </Box>
            <Typography component="span" variant="body1">{title || <Skeleton />}</Typography>
        </Box>
    )
}

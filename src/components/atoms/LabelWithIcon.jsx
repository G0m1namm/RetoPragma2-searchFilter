import React from 'react'
import { Grid, Typography } from '@material-ui/core'

export default function LabelWithIcon({ icon, alt, label }) {
    return (
        <Grid container alignItems="center" spacing={1} className="mb-12">
            <Grid item>
                <img src={icon} alt={alt} />
            </Grid>
            <Grid item >
                <Typography component="label" variant="subtitle1">{label}</Typography>
            </Grid>
        </Grid>
    )
}

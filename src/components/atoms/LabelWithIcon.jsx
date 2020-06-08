import React from 'react'
import { Grid } from '@material-ui/core'

export default function LabelWithIcon({ icon, alt, label }) {
    return (
        <Grid container alignItems="center" spacing={1}>
            <Grid item>
                <img src={icon} alt={alt} />
            </Grid>
            <Grid item >
                <label>{label}</label>
            </Grid>
        </Grid>
    )
}

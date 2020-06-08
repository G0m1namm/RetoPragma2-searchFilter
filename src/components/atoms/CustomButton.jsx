import React, { useState } from 'react';
import { withStyles, Button, fade } from '@material-ui/core';

export const CustomButton = withStyles({
    root:{
        borderRadius: 12,
        color: "#fff",
        fontSize: 16,
        backgroundColor: "#B5076B",
        textTransform: "none",
        padding: "12px",
        height: "fit-content",
        fontFamily: "Raleway, sans-serif",
        '&:hover, &:focus': {
            backgroundColor: `${fade("#B5076B", 0.8)} !important`,
        },
        '&.white':{
            color: "#B5076B",
            backgroundColor: "#fff",
            '&:hover, &:focus': {
                backgroundColor: `${fade("#B5076B", 0.1)} !important`,
            },
        }
    }
})(Button);

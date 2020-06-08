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
        '&.white':{
            color: "#707070",
            backgroundColor: "#fff"
        }
    }
})(Button);

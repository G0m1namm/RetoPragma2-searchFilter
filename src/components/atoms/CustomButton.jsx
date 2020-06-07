import React, { useState } from 'react';
import { withStyles, Button, fade } from '@material-ui/core';

const CustomButton = withStyles({
    root:{
        borderRadius: 12,
        color: "#707070",
        fontSize: 16,
    }
})(Button);

import React, { useState } from 'react';
import { withStyles, Badge, fade } from '@material-ui/core';

export const CustomBadge = withStyles({
    root:{
        flex: 1,
    },
    badge:{
        backgroundColor: "#B5076B",
        color: "#fff"
    }
})(Badge);
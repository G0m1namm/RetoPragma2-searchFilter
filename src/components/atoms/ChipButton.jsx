import React, { useState } from 'react';
import { withStyles, Chip, fade } from '@material-ui/core';

const CustomChip = withStyles({
    root:{
        borderRadius: 9,
        color: "#707070",
        fontSize: 14,
    },
    outlined:{
        borderColor: "#707070",
    },
    outlinedPrimary:{
        borderColor: "#B5076B",
        color: "#B5076B",   
        backgroundColor: fade("#B5076B", 0.1),
        '&:focus':{
            backgroundColor: `${fade("#B5076B", 0.1)} !important`
        }
    }
})(Chip);

export default function ChipButton({children}) {
    const [active, setActive] = useState(false);
    return (
        <CustomChip
            clickable 
            variant="outlined"
            color={active ? "primary" : "default"}
            onClick={() => setActive(prev => !prev)}
            label={children}
        />
    )
}

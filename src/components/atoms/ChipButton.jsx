import React, { useState } from 'react';
import { withStyles, Chip, fade } from '@material-ui/core';

const CustomChip = withStyles({
    root:{
        borderRadius: 9,
        color: "#707070",
        fontSize: 14,
        fontFamily: "Raleway, sans-serif"
    },
    outlined:{
        borderColor: "#707070",
    },
    outlinedPrimary:{
        borderColor: "#B5076B",
        color: "#B5076B",   
        backgroundColor: `${fade("#B5076B", 0.1)} !important`,
        '&:focus':{
            backgroundColor: `${fade("#B5076B", 0.1)} !important`
        }
    }
})(Chip);

export default function ChipButton({children, onChange, ...props}) {
    const [active, setActive] = useState(false);
    const handleSwitch = (value) => {
        setActive(!value);
        onChange(!value)
    }
    return (
        <CustomChip
            clickable 
            variant="outlined"
            color={props.active ? "primary" : "default"}
            onClick={() => handleSwitch(active)}
            label={children}
        />
    )
}

import React from 'react';
import { makeStyles, Box } from '@material-ui/core';

const useStyle = makeStyles({
    root: {
        backgroundColor: "#fff",
        '&::after':{
            position: "absolute",
            content: "''",
            width: 40,
            height: 4,
            borderRadius: 2,
            backgroundColor: "#70707070",
            zIndex: "2",
            top: 10,
            left: "50%",
            transform: "translateX(-50%)"
        }
    }
});

export default function BottomSheetHeader({children}) {
    const classes = useStyle();

    return (
        <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            height="72px"
            padding="12px 16px"
            position="sticky"
            top={0}
            zIndex={1}
            className={classes.root}
        >
            {children}
        </Box>
    )
}

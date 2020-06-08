import React from 'react';
import { makeStyles, Box } from '@material-ui/core';
import Card from '../../atoms/Card';

const useStyle = makeStyles({
    grid:{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(118px, 1fr))",
        gridAutoRows: "auto",
        gap: "10px",
    }
})

export default function CardsGrid({items}) {
    const classes = useStyle();

    return (
        <Box className={classes.grid}>
            {!!items && 
                items.map(({idDrink, strDrinkThumb, strDrink}, key) => <Card key={idDrink} icon={strDrinkThumb} title={strDrink} />)}
        </Box>
    )
}

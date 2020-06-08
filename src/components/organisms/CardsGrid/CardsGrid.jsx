import React, { useState } from 'react';
import { makeStyles, Box, CircularProgress } from '@material-ui/core';
import { useInfiniteScroll } from 'react-infinite-scroll-hook'
import Card from '../../atoms/Card';

const useStyle = makeStyles({
    grid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(118px, 1fr))",
        gridAutoRows: "auto",
        gap: "10px",
    }
})
export default function CardsGrid({ items }) {
    const classes = useStyle();
    const ARRAY_SIZE = 20;
    const [loading, setLoading] = useState(false);
    const [subItems, setSubItems] = useState([])

    const loadItems = (prevArray = [], startCursor = 0) => {
        return new Promise(resolve => {
            const newArray = items.slice(startCursor, startCursor + ARRAY_SIZE);
            const totalArray = prevArray.concat(newArray);

            resolve(totalArray);
        })
    }

    const handleLoadMore = () => {
        setLoading(true);
        loadItems(subItems, subItems.length).then(newArray => {
            setLoading(false);
            setSubItems(newArray);
        });
    }

    const infiniteRef = useInfiniteScroll({
        loading,
        hasNextPage: true,
        onLoadMore: handleLoadMore,
        scrollContainer: 'window'
    });

    return (
        <Box className={classes.grid} marginTop={4} ref={infiniteRef}>
            {!!subItems &&
                subItems.map(({ idDrink, strDrinkThumb, strDrink }) => <Card key={idDrink} icon={strDrinkThumb} title={strDrink} />)
            }
            {loading && <Box display="flex" justifyContent="center"><CircularProgress variant="indeterminate" /></Box>}
        </Box>
    )
}

import React, { useState, useEffect } from 'react';
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
export default function CardsGrid({ items, type }) {
    const classes = useStyle();
    const ARRAY_SIZE = 20;
    const [loading, setLoading] = useState(false);
    const [actualItems, setActualItems] = useState(items);
    const [subItems, setSubItems] = useState([])
    const alcoholType = ['', 'Alcoholic', 'Non alcoholic', 'Optional alcohol']

    const loadItems = (prevArray = [], startCursor = 0) => {
        return new Promise(resolve => {
            const newArray = actualItems.length <= ARRAY_SIZE ? actualItems.slice(startCursor, startCursor + ARRAY_SIZE) : actualItems;
            const totalArray = prevArray.concat(newArray);

            resolve(totalArray);
        })
    }

    const handleLoadMore = () => {
        setLoading(true);
        if (actualItems.length <= ARRAY_SIZE) {
            loadItems(subItems, subItems.length).then(newArray => {
                setLoading(false);
                setSubItems(newArray);
            });
        } else {
            setLoading(false);
            setSubItems(actualItems);
        }
    }

    const filterResults = (index) => {
        let filteredCoctels = [...items];
        if(type !== 0) {
            filteredCoctels = items.filter(({strAlcoholic}) => strAlcoholic === alcoholType[index])
        }
        return filteredCoctels;
    }

    const infiniteRef = useInfiniteScroll({
        loading,
        hasNextPage: true,
        onLoadMore: handleLoadMore,
        scrollContainer: 'window'
    });

    return (
        <>
            <Box className={classes.grid} marginTop={4} marginBottom={12} ref={infiniteRef}>
                {!!items &&
                    filterResults(type).map(({ idDrink, strDrinkThumb, strDrink }) => <Card key={idDrink} icon={strDrinkThumb} title={strDrink} />)
                }
                {loading && <Box display="flex" justifyContent="center"><CircularProgress variant="indeterminate" /></Box>}
            </Box>
        </>
    )
}

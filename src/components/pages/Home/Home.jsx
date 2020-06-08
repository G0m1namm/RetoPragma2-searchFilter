import React, { useState, useEffect } from 'react';
import SwipeableBottomSheet from 'react-swipeable-bottom-sheet';
import { Box, Button, Grid, Divider } from '@material-ui/core';
import ChipButton from '../../atoms/ChipButton';
import { CustomButton } from '../../atoms/CustomButton';
import CategoryIcon from '../../../assets/icons/IcoCategories.svg';
import IngredientsIcon from '../../../assets/icons/IcoIngredients.svg';
import SearchIcon from '../../../assets/icons/IcoSearch.svg';
import FilterIcon from '../../../assets/icons/IcoFilter.svg';
import './Home.scss';
import LabelWithIcon from '../../atoms/LabelWithIcon';
import { getFilterList } from '../../../services';
import { Link } from 'react-router-dom';

export default function Home() {
    const [categories, setCategories] = useState(null);
    const [ingredients, setIngredients] = useState(null);
    const [openFilter, setOpenFilter] = useState(false);

    useEffect(() => {
        async function fetchData() {
            const categories = await getFilterList("c");
            const ingredients = await getFilterList("i");
            setCategories(categories?.drinks);
            setIngredients(ingredients?.drinks);
        }
        if (categories === null && ingredients === null) {
            fetchData();
        }
    }, [categories, ingredients]);

    return (
        <div className="view">
            <SwipeableBottomSheet
                open={openFilter}
                onChange={() => setOpenFilter(prev => !prev)}
                marginTop={128}
                topShadow={false}
                shadowTip={false}
                overflowHeight={72}
                bodyStyle={{ borderRadius: "30px 30px 0 0" }}
            >
                <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    height="72px"
                    padding="12px 16px"
                    position="sticky"
                    top={0}
                    zIndex={1}
                    className="bg-white"
                >
                    <Link to="/search">
                        <CustomButton className="white" startIcon={<img src={SearchIcon} alt="Lupa" />}>Buscar</CustomButton>
                    </Link>
                    <CustomButton className="white" endIcon={<img src={FilterIcon} alt="filtros" />} onClick={() => setOpenFilter(prev => !prev)}>Filtros</CustomButton>
                </Box>
                <Divider />
                <Box padding="24px" paddingBottom={0}>
                    <Grid container className="mb-24">
                        <Grid item>
                            <LabelWithIcon icon={CategoryIcon} alt="Categorias" label="Categorias" />
                        </Grid>
                        <Grid container spacing={1}>
                            {categories && categories.map(({ strCategory }) =>
                                <Grid item>
                                    <ChipButton key={strCategory}>{strCategory}</ChipButton>
                                </Grid>
                            )}
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item>
                            <LabelWithIcon icon={IngredientsIcon} alt="Ingredientes" label="Ingredientes" />
                        </Grid>
                        <Grid container spacing={1}>
                            {ingredients && ingredients.slice(0, 10).map(({ strIngredient1 }) =>
                                <Grid item>
                                    <ChipButton key={strIngredient1}>{strIngredient1}</ChipButton>
                                </Grid>
                            )}
                        </Grid>
                    </Grid>
                    <Box position="sticky" bottom={0} className="bg-white" padding="12px 24px">
                        <CustomButton fullWidth>Aplicar Filtro</CustomButton>
                    </Box>
                </Box>
            </SwipeableBottomSheet>
        </div>
    )
}

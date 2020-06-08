import React, { useState, useEffect } from 'react';
import SwipeableBottomSheet from 'react-swipeable-bottom-sheet';
import { Box, Grid, Divider } from '@material-ui/core';
import ChipButton from '../../atoms/ChipButton';
import { CustomButton } from '../../atoms/CustomButton';
import CategoryIcon from '../../../assets/icons/IcoCategories.svg';
import IngredientsIcon from '../../../assets/icons/IcoIngredients.svg';
import SearchIcon from '../../../assets/icons/IcoSearch.svg';
import FilterIcon from '../../../assets/icons/IcoFilter.svg';
import LabelWithIcon from '../../atoms/LabelWithIcon';
import { getFilterList } from '../../../services';
import { Link } from 'react-router-dom';
import BottomSheetHeader from '../../atoms/BottomSheetHeader';

export default function BottomSheetFilter({ onChangeCategories, onChangeIngredients }) {
    const [categories, setCategories] = useState(null);
    const [ingredients, setIngredients] = useState(null);
    const [openFilter, setOpenFilter] = useState(false);
    const [categoriesSelected, setCategoriesSelected] = useState([]);
    const [ingredientsSelected, setIngredientsSelected] = useState([]);


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

    const handleCategoryOnChange = (active, name) => {
        if (active) {
            onChangeCategories(prev => [...prev, name]);
            setCategoriesSelected(prev => [...prev, name]);
        } else {
            onChangeCategories(prev => prev.filter(actualName => name !== actualName));
            setCategoriesSelected(prev => prev.filter(actualName => name !== actualName));
        }
    }

    const handleIngredientOnChange = (active, name) => {
        if (active) {
            onChangeIngredients(prev => [...prev, name]);
            setIngredientsSelected(prev => [...prev, name]);
        } else {
            onChangeIngredients(prev => prev.filter(actualName => name !== actualName));
            setIngredientsSelected(prev => prev.filter(actualName => name !== actualName));
        }
    }

    return (
        <SwipeableBottomSheet
            open={openFilter}
            onChange={() => setOpenFilter(prev => !prev)}
            marginTop={128}
            topShadow={false}
            shadowTip={false}
            overflowHeight={72}
            bodyStyle={{ borderRadius: "30px 30px 0 0", boxShadow: "0px 1px 4px" }}
        >
            <BottomSheetHeader>
                <Link to="/search">
                    <CustomButton className="white" startIcon={<img src={SearchIcon} alt="Lupa" />}>Buscar</CustomButton>
                </Link>
                <CustomButton className="white" endIcon={<img src={FilterIcon} alt="filtros" />} onClick={() => setOpenFilter(prev => !prev)}>Filtros</CustomButton>
            </BottomSheetHeader>
            <Divider />
            <Box padding="24px" paddingBottom={0}>
                <Grid container className="mb-24">
                    <Grid item>
                        <LabelWithIcon icon={CategoryIcon} alt="Categorias" label="Categorias" />
                    </Grid>
                    <Grid container spacing={1}>
                        {categories && categories.map(({ strCategory }) =>
                            <Grid item key={strCategory}>
                                <ChipButton key={strCategory} onChange={(val) => handleCategoryOnChange(val, strCategory)}>{strCategory}</ChipButton>
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
                            <Grid item key={strIngredient1}>
                                <ChipButton key={strIngredient1} onChange={(val) => handleIngredientOnChange(val, strIngredient1)}>{strIngredient1}</ChipButton>
                            </Grid>
                        )}
                    </Grid>
                </Grid>
                <Box position="sticky" bottom={0} className="bg-white" padding="12px 0px">
                    <Grid container spacing={1}>
                        {(!!categoriesSelected.length || !!ingredientsSelected.length) &&
                            <Grid item xs>
                                <CustomButton fullWidth className="white">Borrar Filtros</CustomButton>
                            </Grid>
                        }
                        <Grid item xs>
                            <CustomButton fullWidth>Aplicar Filtro</CustomButton>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </SwipeableBottomSheet>
    )
}

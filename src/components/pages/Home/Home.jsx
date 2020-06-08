import React from 'react';
import SwipeableBottomSheet from 'react-swipeable-bottom-sheet';
import { Box, Button, Grid } from '@material-ui/core';
import ChipButton from '../../atoms/ChipButton';
import { CustomButton } from '../../atoms/CustomButton';
import CategoryIcon from '../../../assets/icons/IcoCategories.svg';
import IngredientsIcon from '../../../assets/icons/IcoIngredients.svg';
import './Home.scss';
import LabelWithIcon from '../../atoms/LabelWithIcon';

export default function Home() {
    return (
        <div className="view">
            <SwipeableBottomSheet topShadow={false} shadowTip={false} overflowHeight={72} bodyStyle={{ borderRadius: "30px 30px 0 0" }}>
                <Box display="flex" justifyContent="space-between" minHeight="72px" padding="12px 24px">
                    <CustomButton className="white">Search</CustomButton>
                    <CustomButton className="white">Filter</CustomButton>
                </Box>
                <Grid container>
                    <Grid item>
                        <LabelWithIcon icon={CategoryIcon} alt="Categorias" label="Categorias" />
                    </Grid>
                    <Grid>
                        
                    </Grid>
                </Grid>
            </SwipeableBottomSheet>
        </div>
    )
}

import React from 'react';
import SwipeableBottomSheet from 'react-swipeable-bottom-sheet';
import { Box, Button } from '@material-ui/core';
import './Home.scss';
import ChipButton from '../../atoms/ChipButton';
import { CustomButton } from '../../atoms/CustomButton';

export default function Home() {
    return (
        <div className="view">
            <SwipeableBottomSheet topShadow={false} shadowTip={false} overflowHeight={72} bodyStyle={{borderRadius:"30px 30px 0 0"}}>
                <Box borderRadius="30px 30px 0 0" overflow="hidden">
                    <Box display="flex" justifyContent="space-between" minHeight="72px" padding="12px 24px">
                        <CustomButton className="white">Search</CustomButton>
                        <CustomButton className="white">Filter</CustomButton>
                    </Box>
                    <Box padding="34px">
                        <ChipButton>Cosas</ChipButton>
                    </Box>
                </Box>
            </SwipeableBottomSheet>
        </div>
    )
}

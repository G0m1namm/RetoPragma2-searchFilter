import React, { useState, useEffect } from 'react';
import BottomSheetFilter from '../../organisms/BottomSheetFilter/BottomSheetFilter';
import './Home.scss';
import Card from '../../atoms/Card';
import { Typography } from '@material-ui/core';
import FilterTabs from '../../molecules/FilterTabs';

export default function Home() {
    const [value, setValue] = useState(0);

    const handleChangeTabs = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className="view">
            <Typography component="h1" variant="h4" className="mb-12">Cocteles</Typography>
            <FilterTabs handleChange={handleChangeTabs} value={value} />
            <BottomSheetFilter />
        </div>
    )
}

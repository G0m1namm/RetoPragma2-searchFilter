import React, { useState, useEffect } from 'react';
import BottomSheetFilter from '../../organisms/BottomSheetFilter/BottomSheetFilter';
import './Home.scss';
import Card from '../../atoms/Card';

export default function Home() {

    return (
        <div className="view">
            <Card title="Guarapo" icon="https://www.thecocktaildb.com/images/media/drink/vrwquq1478252802.jpg/preview"/>
            <BottomSheetFilter />
        </div>
    )
}

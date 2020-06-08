import React, { useState } from 'react'

//Components
import EmptySearch from '../../molecules/EmptySearch'
import FilterTabs from '../../molecules/FilterTabs'

//styles
import './styles.scss'
import Card from '../../atoms/Card'
import { Typography } from '@material-ui/core'

const SearchResults = ({coctels, search, isEmpty}) => {


    const [value, setValue] = useState(0);
    const alcoholType = ['', 'Alcoholic', 'Non alcoholic', 'Optional alcohol']

    const filterResults = (index) => {
        let filteredCoctels = coctels
        if(value) {
            filteredCoctels = coctels.filter(({strAlcoholic}) => strAlcoholic === alcoholType[index])
        }
        return filteredCoctels
    }

    const handleChangeTabs = (event, newValue) => {
      setValue(newValue);
    }

    return(
        <>
        {!!coctels.length && 
            <>
                <Typography component="p" variant="body1" className="results-text mt-24">
                    Resultados para "{search}" ({coctels.length})
                </Typography>
                <FilterTabs handleChange={handleChangeTabs} value={value}/>
                <div className="search-results-container">
                    {!!coctels.length &&
                        filterResults(value).map(({strDrink, strDrinkThumb},key) => (
                            <Card key={key} title={strDrink} icon={strDrinkThumb} />
                        )) 
                    }
                </div>
            </>
        }
        {(isEmpty && search) && <EmptySearch />}
        </>
    )
}

export default SearchResults
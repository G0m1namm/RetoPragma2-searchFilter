import React, { useState } from 'react'

//Components
import EmptySearch from '../../molecules/EmptySearch'
import FilterTabs from '../../molecules/FilterTabs'

//styles
import './styles.scss'

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
                <p className="results-text">
                    Resultados para "{search}" ({coctels.length})
                </p>
                <FilterTabs handleChange={handleChangeTabs} value={value}/>
                <div className="search-results-container">
                    {!!coctels.length &&
                        filterResults(value).map((coctel,key) => (
                            <div key={key}>{coctel.strDrink}</div>
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
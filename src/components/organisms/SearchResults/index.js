import React, { useState } from 'react'

//Components
import EmptySearch from '../../molecules/EmptySearch'
import FilterTabs from '../../molecules/FilterTabs'

//styles
import './styles.scss'

const SearchResults = ({coctels, search, isEmpty}) => {


    const [value, setValue] = useState(0);

    const handleChangeTabs = (event, newValue) => {
      setValue(newValue);

    };
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
                        coctels.map((coctel) => (
                            <div>hola</div>
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
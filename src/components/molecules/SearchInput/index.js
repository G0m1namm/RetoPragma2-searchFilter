import React from 'react'
import CustomInput from  '../../atoms/CustomInput'

//Styles
import './styles.scss'

const SearchInput = ({search, results, handleChange, clear, handleSearch, isVisible}) => {

    
    return(
        <div className="search-container">
            <CustomInput 
                value={search}
                handleChange={handleChange}
                handleClear={clear}
                handleSearch={handleSearch}
            />
            <div className={`search-results ${!search && 'no-results'} ${!isVisible && 'hidden'}`}>
                { (search && results) &&
                    results.slice(0,5).map(({strDrink : name}) => (
                        <p>{name}</p>
                    ))
                }
                {search && <p className="value-search">Resultados para {search}</p>}
            </div>
            
        </div>
    )
}

export default SearchInput
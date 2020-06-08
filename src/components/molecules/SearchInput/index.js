import React from 'react'
import CustomInput from  '../../atoms/CustomInput'

//Styles
import './styles.scss'
import { Typography } from '@material-ui/core'

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
                    results.slice(0,5).map(({strDrink : name},key) => (
                        <Typography component="p" variant="body1" key={key}>{name}</Typography>
                    ))
                }
                {search && <Typography component="p" variant="body1" className="bold value-search">Resultados para {search}</Typography>}
            </div>
            
        </div>
    )
}

export default SearchInput
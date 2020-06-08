import React, { useState } from 'react'
import CustomInput from  '../../atoms/CustomInput'

//Services
import { getCocktailsByName } from '../../../services'

//Styles
import './styles.scss'

const SearchInput = () => {

    const [search, setSearch] = useState('')
    const [results, setResults] = useState([])

    const onChange = async (e) => {
        const value = e.target.value
        setSearch(value)
        value ? getResults(value) : setResults([])
    }

    const getResults = async (value) => {
        const { drinks } = await getCocktailsByName(value)
        setResults(drinks)
    }

    const handleSearch = (e) => {
        console.log('search');
    }

    const clear = () => {
        setSearch('')
        setResults([])
    }

    return(
        <div className="search-container">
            <CustomInput value={search} handleChange={onChange} handleClear={clear}/>
            <div className={`search-results ${!search && 'no-results'}`}>
                { (search && results) &&
                    results.slice(0,5).map(({strDrink : name}) => (
                        <p>{name}</p>
                    ))
                }
                {search && <p>Resultados para {search}</p>}
            </div>
            
        </div>
    )
}

export default SearchInput
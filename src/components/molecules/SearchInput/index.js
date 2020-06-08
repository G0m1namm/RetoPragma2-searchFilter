import React, { useState } from 'react'
import CustomInput from  '../../atoms/CustomInput'

//Services
import { getCocktailsByName } from '../../../services'


const SearchInput = () => {

    const [search, setSearch] = useState('')
    const [results, setResults] = useState([])

    const onChange = async (e) => {
        const value = e.target.value
        setSearch(value)
        getResults(value)
    }

    const getResults = async (value) => {
        const { drinks } = await getCocktailsByName(value)
        setResults(drinks)
        console.log(drinks);
    }

    const handleSearch = (e) => {
        console.log('search');
    }

    const clear = () => {
        setSearch('')
        setResults([])
    }

    return(
        <div>
            <CustomInput value={search} handleChange={onChange} handleClear={clear}/>
            { results &&
                results.map(({strDrink : name}) => (
                    <p>{name}</p>
                ))
            }
        </div>
    )
}

export default SearchInput
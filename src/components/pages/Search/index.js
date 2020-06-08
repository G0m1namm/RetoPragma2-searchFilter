import React from 'react'
import SearchInput from '../../molecules/SearchInput'
import { Link } from 'react-router-dom'

const SearchPage = () => {
    return(
        <div>
            <Link to="/">Regresar</Link>
            <SearchInput />


        </div>
    )
}

export default SearchPage
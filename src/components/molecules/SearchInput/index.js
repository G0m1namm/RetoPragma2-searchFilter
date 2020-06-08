import React, { useState } from 'react'
import CustomInput from  '../../atoms/CustomInput'


const SearchInput = () => {

    const [search, setSearch] = useState('')


    const onChange = (e) => {
        setSearch(e.target.value)
    }

    const handleSearch = (e) => {
        console.log('search');
    }

    const clear = () => {
        setSearch('')
        console.log('ghafasdf');
    }

    return(
        <div>
            <CustomInput value={search} handleChange={onChange} handleClear={clear}/>
        </div>
    )
}

export default SearchInput
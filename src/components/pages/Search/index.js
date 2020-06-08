import React, { useState } from 'react'
import SearchInput from '../../molecules/SearchInput'
import { Link } from 'react-router-dom'

//Components
import SearchResults from '../../organisms/SearchResults'

//Assets
import { ReactComponent as IcoBack } from '../../../assets/icons/IcoArrow.svg'

//Services
import { getCocktailsByName } from '../../../services'

//Styles
import './styles.scss'


const SearchPage = () => {

    const [search, setSearch] = useState('')
    const [results, setResults] = useState([])
    const [coctels, setCoctels] = useState([])
    const [isRecomendationVisible, setIsRecomendationVisible] = useState(true)
    const [isEmpty, setIsEmpty] = useState(false)

    const onChange = async (e) => {
        const value = e.target.value

        !isRecomendationVisible && setIsRecomendationVisible(true)
        coctels.length && setCoctels([])

        setSearch(value)
        setIsEmpty(false)
        value ? getResults(value) : setResults([])
    }

    const getResults = async (value) => {
        const { drinks } = await getCocktailsByName(value)
        setResults(drinks)
    }

    const onSearch = () => {
        results ? setCoctels(results) : setIsEmpty(true)
        setIsRecomendationVisible(false)
    }

    const clear = () => {
        setSearch('')
        setResults([])
        setCoctels([])
    }

    return(
        <div className="search-page">
            <Link to="/" className="back-button">
                <IcoBack />
                Regresar
            </Link>
            <SearchInput 
                search={search}
                results={results}
                handleChange={onChange}
                handleSearch={onSearch}
                clear={clear}
                isVisible={isRecomendationVisible}
            />
           <SearchResults coctels={coctels} search={search} isEmpty={isEmpty}/>
        </div>
    )
}

export default SearchPage
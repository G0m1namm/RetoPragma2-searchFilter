import React from 'react'

//Assets
import { ReactComponent as IcoSearch } from '../../../assets/icons/IcoSearch.svg' 

const EmptySearch = () => {
    return(
        <div>
            <IcoSearch />
            <p>No hemos encontrado resultados para tu búsqueda</p>
            <p>Intenta con otra palabra</p>
        </div>
    )
}

export default EmptySearch
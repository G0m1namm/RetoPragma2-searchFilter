import React from 'react'

//Assets
import { ReactComponent as IcoSearch } from '../../../assets/icons/IcoSearch.svg'

//Styles
import './styles.scss'

const EmptySearch = () => {
    return(
        <div className="empty-container">
            <IcoSearch />
            <p>No hemos encontrado resultados para tu búsqueda</p>
            <p className="alt-text">Intenta con otra palabra</p>
        </div>
    )
}

export default EmptySearch
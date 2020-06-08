import Axios from "axios"

const API = 'https://www.thecocktaildb.com/api/json/v1/1'
const letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

const httpClient = async (url) => {
    try {
        const response = await fetch(`${API}${url}`)
        const data = await response.json()
        return data
    } catch (error) {
        return error.message
    }
}

export const getCocktailsByName = async (name) => {
    return httpClient(`/search.php?s=${name}`)
}

export const getFilterList = async (letter) => {
    return httpClient(`/list.php?${letter}=list`)
}

export const getCocktailByAlcoholFilter = async (type) => {
    return httpClient(`/filter.php?a=${type}`)
}

export const getAll = async () => {
    const data = await Axios.all(letters.map(letter => Axios.get(`${API}/search.php?f=${letter}`)))
    const drinks = data.map(res => res.data.drinks).reduce((acc, curr) => acc.concat(curr)).filter(drink => drink !== null);
    return drinks;
}

// export const getAllCocktails = () => {
//     return getCocktailsByName('')
// }
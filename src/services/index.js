const API = 'https://www.thecocktaildb.com/api/json/v1/1'

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

// export const getAllCocktails = () => {
//     return getCocktailsByName('')
// }
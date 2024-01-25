import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'

export const mainContext = createContext()

const MainProvider = ({children}) => {
    const [categoryCocktails, setCategoryCocktails] = useState([])
    const [randomCocktails, setRandomCocktails] = useState([])
    const [nonalcoholicCocktails, setNonalcoholicCocktails] = useState([])
    const [idCocktails, setIdCocktails] = useState()
    const [idIngridients, setIdIngridients] = useState()

    useEffect(() => {
        const apiFetch = async() => {
            const resp = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${category}`)
            setCategoryCocktails(resp)
        }
        apiFetch()
    }, [])

    useEffect(() => {
        const apiFetch = async() => {
            const resp = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
            setRandomCocktails(resp.data.drinks)
            // console.log(resp.data.drinks);
        }
        apiFetch()
    }, [])

    // console.log(randomCocktails);

    useEffect(() => {
        const apiFetch = async() => {
            const resp = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic`)
            setNonalcoholicCocktails(resp)
        }
        apiFetch()
    }, [])

    useEffect(() => {
        const apiFetch = async() => {
            const resp = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
            setIdCocktails(resp)
        }
        apiFetch()
    }, [])

    useEffect(() => {
        const apiFetch = async() => {
            const resp = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?iid=${id}`)
            setIdIngridients(resp.data)
        }
        apiFetch()
    }, [])

    return (
        <>
            <mainContext.Provider value={{categoryCocktails, setCategoryCocktails, randomCocktails, setRandomCocktails, nonalcoholicCocktails, setNonalcoholicCocktails, idCocktails, setIdCocktails, idIngridients, setIdIngridients}}>
                {children}
            </mainContext.Provider>
        </>
    )
}

export default MainProvider
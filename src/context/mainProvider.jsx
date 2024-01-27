import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'

export const mainContext = createContext()

const MainProvider = ({children}) => {
    // const [categoryCocktails, setCategoryCocktails] = useState([])
    const [gin, setGin] = useState([])
    const [scotch, setScotch] = useState([])
    const [rum, setRum] = useState([])
    const [vodka, setVodka] = useState([])
    const [randomCocktails, setRandomCocktails] = useState([])
    const [nonalcoholicCocktails, setNonalcoholicCocktails] = useState([])
    const [idCocktails, setIdCocktails] = useState([])
    const [category, setCategory] = useState("")


    useEffect(() => {
        const apiFetch = async() => {
            const resp = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin`)
            setGin(resp.data.drinks)
            console.log("Ausgabe resp Gin", resp.data.drinks);
        }
        apiFetch()
    }, [])

    useEffect(() => {
        const apiFetch = async() => {
            const resp = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Scotch`)
            setScotch(resp.data.drinks)
            console.log("Ausgabe resp Scotch", resp.data.drinks);
        }
        apiFetch()
    }, [])

    useEffect(() => {
        const apiFetch = async() => {
            const resp = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Rum`)
            setRum(resp.data.drinks)
            console.log("Ausgabe resp Rum", resp.data.drinks);
        }
        apiFetch()
    }, [])

    useEffect(() => {
        const apiFetch = async() => {
            const resp = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka`)
            setVodka(resp.data.drinks)
            console.log("Ausgabe resp Vodka", resp.data.drinks);
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

    // ! Fetch für NonalcoholicList

    useEffect(() => {
        const apiFetch = async() => {
            const resp = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic`)
            setNonalcoholicCocktails(resp.data.drinks)
            // console.log("Non-alcoholic", resp.data.drinks);
        }
        apiFetch()
    }, [])



        // const idFetch = async() => {
        //     const resp = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
        //     setIdCocktails(resp.data.drinks)
        // }
        
    return (
        <>
            <mainContext.Provider value={{gin, setGin, scotch, setScotch, rum, setRum, vodka, setVodka, randomCocktails, setRandomCocktails, nonalcoholicCocktails, setNonalcoholicCocktails, idCocktails, setIdCocktails, category, setCategory, idFetch}}>
                {children}
            </mainContext.Provider>
        </>
    )
}

export default MainProvider
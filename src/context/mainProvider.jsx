import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'

export const mainContext = createContext()

const MainProvider = ({children}) => {
    const [categoryCocktails, setCategoryCocktails] = useState([])
    const [randomCocktails, setRandomCocktails] = useState([])
    const [nonalcoholicCocktails, setNonalcoholicCocktails] = useState([])
    const [idCocktails, setIdCocktails] = useState([])
    const [detailCocktail, setDetailCocktail] = useState([])
    const [category, setCategory] = useState("")

    let link = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${category}`
    
    useEffect(() => {
        const apiFetch = async() => {
            
            const resp = await axios.get(link)
            setCategoryCocktails(resp.data.drinks)
        }
        { category ? apiFetch() : null}
        
    }, [category])



    useEffect(()=> {
        const idFetch = async() => {
            const resp = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idCocktails}`)
            setDetailCocktail(resp.data.drinks)
            console.log(resp.data.drinks)
            console.log("ausgabe detail", detailCocktail);
            console.log("johanna will so", idCocktails)
        }
        { idCocktails ? idFetch() : null}
    },[idCocktails])



    useEffect(() => {
        const apiFetch = async() => {
            const resp = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
            setRandomCocktails(resp.data.drinks)
        }
        apiFetch()
    }, [])


    // ! Fetch für veraltete NonalcoholicList

    useEffect(() => {
        const apiFetch = async() => {
            const resp = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic`)
            setNonalcoholicCocktails(resp.data.drinks)
        }
        apiFetch()
    }, [])



    return (
        <>
            <mainContext.Provider value={{categoryCocktails, setCategoryCocktails, randomCocktails, setRandomCocktails, nonalcoholicCocktails, setNonalcoholicCocktails, idCocktails, setIdCocktails, category, setCategory, detailCocktail, setDetailCocktail}}>
                {children}
            </mainContext.Provider>
        </>
    )
}

export default MainProvider
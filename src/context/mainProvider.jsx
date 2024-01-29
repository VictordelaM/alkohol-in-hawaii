import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'

export const mainContext = createContext()

const MainProvider = ({children}) => {
    const [categoryCocktails, setCategoryCocktails] = useState([])
    const [randomCocktails, setRandomCocktails] = useState()
    const [nonalcoholicCocktails, setNonalcoholicCocktails] = useState([])
    const [idCocktails, setIdCocktails] = useState("")
    const [detailCocktail, setDetailCocktail] = useState([])
    const [searchInput, setSearchInput] = useState([])
    const [searchOutput, setSearchOutput] = useState([])
    const [check, setCheck] = useState(false)
    const [category, setCategory] = useState("")
    const [active , setActive] = useState(false)
    console.log("idCocktails", idCocktails);
    console.log("ausgabe detailNEU", detailCocktail);


    let link = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${category}`
    
    useEffect(() => {
        const apiFetch = async() => {
            
            const resp = await axios.get(link)
            setCategoryCocktails(resp.data.drinks)
        }
        { category ? apiFetch() : null}
        
    }, [category])


// ! Wieso funktioniert das nicht?????????????????? Farid mach

useEffect(()=> {
    const idFetch = async() => {
        const resp = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idCocktails}`)
        setDetailCocktail(resp.data.drinks)
        console.log("resp", resp.data.drinks)
        console.log("ausgabe detail", detailCocktail);
        console.log("johanna will so", idCocktails)
        console.log("check", check);
    }
   {idCocktails ? idFetch() : null}
  },[idCocktails])

    useEffect(() => {
        const apiFetch = async() => {
            const resp = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
            setRandomCocktails(resp.data.drinks)
        }
        apiFetch()
    }, [])

    useEffect(() => {
        const apiFetch = async() => {
            const resp = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchInput}`)
            setSearchOutput(resp.data.drinks)
            console.log("Test", searchOutput);
        }
        { searchInput ? apiFetch() : null}
    }, [searchInput])

    // ! Fetch für NonalcoholicList

    useEffect(() => {
        const apiFetch = async() => {
            const resp = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic`)
            setNonalcoholicCocktails(resp.data.drinks)
        }
        apiFetch()
    }, [])



    return (
        <>
            <mainContext.Provider value={{active , setActive, searchInput, setSearchInput, searchOutput, setSearchOutput, check, setCheck, categoryCocktails, setCategoryCocktails, randomCocktails, setRandomCocktails, nonalcoholicCocktails, setNonalcoholicCocktails, idCocktails, setIdCocktails, category, setCategory, detailCocktail, setDetailCocktail}}>
                {children}
            </mainContext.Provider>
        </>
    )
}

export default MainProvider
import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'

export const mainContext = createContext()

const MainProvider = ({children}) => {
    const [categoryCocktails, setCategoryCocktails] = useState([])
    const [randomCocktails, setRandomCocktails] = useState([])
    // const [alcoholicCocktails, setAlcoholicCocktails] = useState([])
    // const [nonAlcoholicCocktails, setNonAlcoholicCocktails] = useState([])
    const [nonalcoholicCocktails, setNonalcoholicCocktails] = useState([])
    const [idCocktails, setIdCocktails] = useState([])
    const [idIngridients, setIdIngridients] = useState([])
    const [detailCocktail, setDetailCocktail] = useState([])
    // const idArray = []
    // const [cocktailArray, setCocktailArray] = useState([])
    const [category, setCategory] = useState("")
    console.log(category);

    let link = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${category}`
    console.log(link);
    
    useEffect(() => {
        const apiFetch = async() => {
            
            const resp = await axios.get(link)
            setCategoryCocktails(resp.data.drinks)
            console.log("Ausgabe resp", resp.data.drinks);
        }
        { category ? apiFetch() : null}
        
    }, [category])



    useEffect(()=> {
        const idFetch = async() => {
            const resp = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idCocktails}`)
            setDetailCocktail(resp.data.drinks)
            console.log("ausgabe detail", detailCocktail);
        }
        { idCocktails ? idFetch() : null}
    },[idCocktails])
    // useEffect(() => {
    //     const apiFetch = async() => {
    //         const resp = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin`)
    //         setCategoryCocktails(resp.data.drinks)
    //         console.log("Ausgabe resp", resp.data.drinks);
    //     }
    //     apiFetch()
    // }, [])

    console.log(categoryCocktails);

    useEffect(() => {
        const apiFetch = async() => {
            const resp = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
            setRandomCocktails(resp.data.drinks)
            console.log(resp.data.drinks);
        }
        apiFetch()
    }, [])

    console.log(randomCocktails);

    // useEffect(() => {
    //     const apiFetch = async() => {
    //         const resp = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic`)
    //         setAlcoholicCocktails(resp.data.drinks)
    //         console.log("Alcoholic", resp.data.drinks);
    //     }
    //     apiFetch()
    // }, [])

    // alcoholicCocktails.map((cocktail) => {
    //     return(
    //         idArray.push(cocktail.idDrink)
    //     )
    // })

    // useEffect(() => {
    //     const apiFetch = async() => {
    //         const resp = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic`)
    //         setNonAlcoholicCocktails(resp.data.drinks)
    //         console.log("Non-Alcoholic", resp.data.drinks);
    //     }
    //     apiFetch()
    // }, [])

    // nonAlcoholicCocktails.map((cocktail) => {
    //     return(
    //         idArray.push(cocktail.idDrink)
    //     )
    // })

    // console.log("idArray", idArray);


    // ! Fetch für veraltete NonalcoholicList

    useEffect(() => {
        const apiFetch = async() => {
            const resp = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic`)
            setNonalcoholicCocktails(resp.data.drinks)
            // console.log("Non-alcoholic", resp.data.drinks);
        }
        apiFetch()
    }, [])


    // const apiFetch = () => {
    //     idArray.forEach(async (id) => {
    //     const resp = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
    //     console.log(resp);
    //     cocktailArray.push(resp.data.drinks)
    //     console.log(resp.data.drinks);
    // })
    // }
    // apiFetch()

    // console.log("cocktailArray", cocktailArray);

    // useEffect(() => {
    //     const apiFetch = async() => {
    //         const resp = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?iid=${id}`)
    //         setIdIngridients(resp.data)
    //     }
    //     apiFetch()
    // }, [])

    return (
        <>
            <mainContext.Provider value={{categoryCocktails, setCategoryCocktails, randomCocktails, setRandomCocktails, nonalcoholicCocktails, setNonalcoholicCocktails, idCocktails, setIdCocktails, idIngridients, setIdIngridients, category, setCategory}}>
                {children}
            </mainContext.Provider>
        </>
    )
}

export default MainProvider
import React, { useContext } from 'react'
import { mainContext } from '../../context/mainProvider'


const Popup = () => {
    const {detailCocktail} = useContext(mainContext)
    console.log("ausgabe detailNEU in popup", detailCocktail);
    return (
        <>
            {detailCocktail 
                ? (<h3>{detailCocktail?.[0]?.strDrink}</h3>)
                : (<p>Loading...</p>)
            }
        </>
    )
}

export default Popup
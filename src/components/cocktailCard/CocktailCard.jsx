import React, { useContext, useState } from 'react'
import { mainContext } from '../../context/mainProvider'
let counter = 0

const CocktailCard = ({cocktail}) => {
  const {idCocktails, setIdCocktails} = useContext(mainContext)
    // const {idFetch} = useContext(mainContext)
    counter++
    if(counter % 2 !== 0) {
        return (
            <>
                <button onClick={() => setIdCocktails(cocktail.idDrink)}>
                    <img src={cocktail.strDrinkThumb} alt="" />
                    <h2>{cocktail.strDrink}</h2>
                </button>
            </>
        )
    } else {
        return (
            <>
                <button onClick={() => setIdCocktails(cocktail.idDrink)}>
                    <h2>{cocktail.strDrink}</h2>
                    <img src={cocktail.strDrinkThumb} alt="" />
                </button>
            </>
        )
    }
}

export default CocktailCard
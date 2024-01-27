import React, { useContext, useState } from 'react'
import { mainContext } from '../../context/mainProvider'
let counter = 0

const CocktailCard = ({cocktail}) => {
    // const {idFetch} = useContext(mainContext)
    const [id, setId] = useState()
    console.log("id", id);
    counter++
    if(counter % 2 !== 0) {
        return (
            <>
                <button onClick={() => setId(cocktail.idDrink)}>
                    <img src={cocktail.strDrinkThumb} alt="" />
                    <h2>{cocktail.strDrink}</h2>
                </button>
            </>
        )
    } else {
        return (
            <>
                <button onClick={() => setId(cocktail.idDrink)}>
                    <h2>{cocktail.strDrink}</h2>
                    <img src={cocktail.strDrinkThumb} alt="" />
                </button>
            </>
        )
    }
}

export default CocktailCard
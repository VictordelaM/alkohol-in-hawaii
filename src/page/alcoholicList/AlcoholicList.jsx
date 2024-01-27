import React, { useContext } from 'react'
import { mainContext } from '../../context/mainProvider'
import CocktailCard from '../../components/cocktailCard/CocktailCard'

const AlcoholicList = () => {
    const {category, setCategory} = useContext(mainContext)
    const {gin, setGin} = useContext(mainContext)
    const {scotch, setScotch} = useContext(mainContext)
    const {rum, setRum} = useContext(mainContext)
    const {vodka, setVodka} = useContext(mainContext)
    console.log("category", category);
    let drink 
    switch(category) {
        case "Gin":
            drink = gin
            break
        case "Sotch":
            drink = scotch
            break
        case "Rum":
            drink = rum
            break
        case "Vodka":
            drink = vodka
            break
    }

    return (
        <>
            {drink.map((cocktail, index) => {
                // console.log("test", cocktail);
                return(
                    <div key={index}>
                    <CocktailCard
                        cocktail={cocktail}
                    />
                </div>
                )
            })}
        </>
    )
}

export default AlcoholicList
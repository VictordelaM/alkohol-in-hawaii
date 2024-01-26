import React, { useContext } from 'react'
import { mainContext } from '../../context/mainProvider'
import CocktailCard from '../../components/cocktailCard/CocktailCard'


const NonalcoholicList = () => {
    const {nonalcoholicCocktails, setNonalcoholicCocktails} = useContext(mainContext)
    return (
        <>
            {nonalcoholicCocktails.map((cocktail, index) => {
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

export default NonalcoholicList
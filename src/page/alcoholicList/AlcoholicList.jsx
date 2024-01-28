import React, { useContext } from 'react'
import { mainContext } from '../../context/mainProvider'
import CocktailCard from '../../components/cocktailCard/CocktailCard'

const AlcoholicList = () => {
    const { categoryCocktails, setCategoryCocktails } = useContext(mainContext)

    return (
        <>
            {categoryCocktails.map((cocktail, index) => {
                return (
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
import React, { useContext } from 'react'
import { mainContext } from '../../context/mainProvider'
import CocktailCard from '../../components/cocktailCard/CocktailCard'
import './alcoholicList.css'

const AlcoholicList = () => {
    const { categoryCocktails} = useContext(mainContext)

    return (
        <div className='listing'>
            {categoryCocktails.map((cocktail, index) => {
                return (
                    <div key={index} className='parentCard'>
                        <CocktailCard
                            cocktail={cocktail}
                        />
                    </div>
                )
            })}
        </div>
    )
}

export default AlcoholicList
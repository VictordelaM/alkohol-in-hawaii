import React, { useContext } from 'react'
import { mainContext } from '../../context/mainProvider'
import CocktailCard from '../../components/cocktailCard/CocktailCard'
import './alcoholicList.css'
import Popup from '../../components/popup/Popup'

const AlcoholicList = () => {
    const { categoryCocktails, active} = useContext(mainContext)

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
            <Popup className = {active ? "show" : "hide"}/>
        </div>
    )
}

export default AlcoholicList
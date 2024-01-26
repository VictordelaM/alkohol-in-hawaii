import React from 'react'
import { Link } from 'react-router-dom'

const CocktailCard = ({cocktail}) => {
    console.log(cocktail);
  return (
    <>
        <Link to=''>
            <img src={cocktail.strDrinkThumb} alt="" />
            <h2>{cocktail.strDrink}</h2>
        </Link>
    </>
  )
}

export default CocktailCard
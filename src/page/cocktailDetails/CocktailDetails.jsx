import React, { useContext, useEffect } from 'react'
import { mainContext } from '../../context/mainProvider'
import axios from 'axios'


const CocktailDetails = ({cocktail}) => {
  const{detailCocktail, setDetailCocktail, idCocktails, check} = useContext(mainContext)
  console.log("cock", detailCocktail)

  
  
  return (
    <div>
      <img src="" alt="" />
    </div>
  )
}

export default CocktailDetails
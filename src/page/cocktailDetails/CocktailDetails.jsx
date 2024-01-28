import React, { useContext } from 'react'
import { mainContext } from '../../context/mainProvider'


const CocktailDetails = ({cocktail}) => {
  const{detailCocktail, setDetailCocktail} = useContext(mainContext)
  console.log("cock", detailCocktail)
  
  return (
    <div>
      <img src="" alt="" />
    </div>
  )
}

export default CocktailDetails
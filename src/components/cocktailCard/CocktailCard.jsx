import React, { useState, useContext } from 'react';
import { mainContext } from '../../context/mainProvider';
import Popup from '../popup/Popup';
import CocktailDetails from '../../page/cocktailDetails/CocktailDetails';
import './cocktailCard.css'


let counter = 0;

const CocktailCard = ({ cocktail }) => {
  const {idCocktails, setIdCocktails, check, setCheck , active, setActive} = useContext(mainContext);
  
  

  const getId = () => {
    setCheck(true)
  console.log("Victor und Farid sehen sehr gut aus:)");
  console.log("id", cocktail.idDrink);
  console.log("cocktail", cocktail);
  setIdCocktails(cocktail.idDrink)
  console.log("idCocktails in Card", idCocktails);
}
  const getAndActive = () => {
    getId()
    setActive(true)
  }
  // console.log("cocktail", cocktail.idDrink)

  counter++;
  if (counter % 2 !== 0){

  return (
    <div className={`cards`}>
    <button onClick={getAndActive} className='buttonLeft'>
            <img src={cocktail.strDrinkThumb} alt="" />
            <h2 className='listH2'>{cocktail.strDrink}</h2>
    </button>
    </div>
  )
    } else {
        return (
            <div className={`cards`}>
            <button onClick={getAndActive} className='buttonLeft'>
            <h2 className='listH2'>{cocktail.strDrink}</h2>
                    <img src={cocktail.strDrinkThumb} alt="" />
              
            </button>
            </div>
          )
    }
  
};

export default CocktailCard;
import React, { useContext } from 'react';
import { mainContext } from '../../context/mainProvider';
import { Popup } from 'reactjs-popup';
import CocktailDetails from '../../page/cocktailDetails/CocktailDetails';
import './cocktailCard.css'

let counter = 0;
const CocktailCard = ({ cocktail }) => {
  const {setIdCocktails, setCheck } = useContext(mainContext);

  // console.log("cocktail", cocktail.idDrink)

  counter++;
if (counter % 2 !== 0){
  return (
    <div className={`cards`}>
      <Popup
        trigger={
          <button onClick={() => {setIdCocktails(cocktail.idDrink), setCheck(true)}} className='buttonLeft'>
            <img src={cocktail.strDrinkThumb} alt="" />
            <h2 className='listH2'>{cocktail.strDrink}</h2>
          </button>
        }
        modal
        nested
      >
        {(close) => (
          <div className="modal">
            <button className="close" onClick={close}>
              &times;
            </button>
            <div className="header">Modal Title</div>
            <div className="content">
              <img src={cocktail.strDrinkThumb} alt="" />
              <h2>{cocktail.strDrink}</h2>
            </div>
          </div>
        )}
      </Popup>
    </div>
  )}
  else{
    return (
      <div className='cards'>
        <Popup
          trigger={
            <button onClick={() => {setIdCocktails(cocktail.idDrink), setCheck(true)}} className='buttonRight'>
              <h2 className='listH2'>{cocktail.strDrink}</h2>
              <img src={cocktail.strDrinkThumb} alt="" />
            </button>
          }
          modal
          nested
        >
          {(close) => (
            <div className="modal">
              <button className="close" onClick={close}>
                &times;
              </button>
                  <div>
                    <CocktailDetails
                    cocktail={cocktail}
                    />
                  </div>
            </div>
          )}
        </Popup>
      </div>
    )
  }
};

export default CocktailCard;
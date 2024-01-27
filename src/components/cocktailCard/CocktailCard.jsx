import React, { useContext, useState } from 'react';
import { mainContext } from '../../context/mainProvider';
import { Popup } from 'reactjs-popup';

let counter = 0;

const CocktailCard = ({ cocktail }) => {
  const { idCocktails, setIdCocktails } = useContext(mainContext);
  counter++;

  return (
    <>
      <Popup
        trigger={
          <button onClick={() => setIdCocktails(cocktail.idDrink)}>
            <img src={cocktail.strDrinkThumb} alt="" />
            <h2>{cocktail.strDrink}</h2>
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
              {/* Hier kannst du weitere Inhalte des Popups hinzufügen */}
            </div>
          </div>
        )}
      </Popup>
    </>
  );
};

export default CocktailCard;
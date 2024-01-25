import React, { useContext } from 'react'
import { mainContext } from '../../context/mainProvider'

const CocktailListRandom = () => {
    const {randomCocktails, setRandomCocktails} = useContext(mainContext)
    console.log(randomCocktails[0].strDrink);
    const randomCocktail = [...randomCocktails]
    const array = []
    
    for(let i=1; i<=15; i++) {
      if (randomCocktail[0][`strIngredient${i}`] !== null) {
        console.log("check");
        array.push([randomCocktail[0][`strMeasure${i}`], randomCocktail[0][`strIngredient${i}`]])
        
      }
    }
    console.log(array);
    
  return (
    <>
      <section>
        <img src={randomCocktail[0].strDrinkThumb} alt="" />
        <div>
          <h2>{randomCocktail[0].strDrink}</h2>
          <h3>Zutaten</h3>
          <ul>
          {array.map((data, index) => {
            return(
              <li key={index}>{data[0]} {data[1]}</li>
            )
          })}
          </ul>
          <p>{randomCocktail[0].strInstructionsDE}</p>
        </div>
      </section>
    </>
  )
}

export default CocktailListRandom
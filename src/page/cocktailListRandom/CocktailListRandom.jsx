import React, { useContext } from 'react'
import { mainContext } from '../../context/mainProvider'

const CocktailListRandom = () => {
    const {randomCocktails, setRandomCocktails} = useContext(mainContext)
    console.log(randomCocktails[0].strDrink);
    // const randomCocktail = [...randomCocktails]
    const array = []
    
    for(let i=1; i<=15; i++) {
      if (randomCocktails[0][`strIngredient${i}`] !== null) {
        console.log("check");
        array.push([randomCocktails[0][`strMeasure${i}`], randomCocktails[0][`strIngredient${i}`]])
        
      }
    }
    console.log(array);
    
  return (
    <>
    {randomCocktails
    ? (
      <section>
        <img src={randomCocktails?.[0].strDrinkThumb} alt="" />
        <div>
          <h2>{randomCocktails?.[0].strDrink}</h2>
          <h3>Zutaten</h3>
          <ul>
          {array.map((data, index) => {
            return(
              <li key={index}>{data?.[0]} {data?.[1]}</li>
            )
          })}
          </ul>
          <p>{randomCocktails?.[0].strInstructionsDE}</p>
        </div>
      </section>
    )
    : (<p>Loading...</p>)
    }
      
    </>
  )
}

export default CocktailListRandom
import React, { useContext } from 'react'
import { mainContext } from '../../context/mainProvider'


const Popup = () => {
    const {detailCocktail, setActive} = useContext(mainContext)
    console.log("ausgabe detailNEU in popup", detailCocktail);
    const array = []
    
    for(let i=1; i<=15; i++) {
      if (detailCocktail?.[0]?.[`strIngredient${i}`] !== null) {
        array.push([detailCocktail?.[0]?.[`strMeasure${i}`], detailCocktail?.[0]?.[`strIngredient${i}`]])
      }
    }
    return (
        <>
            {detailCocktail 
                ? (<section>
                    <img src={detailCocktail?.[0]?.strDrinkThumb} alt="" />
                    <div className='random'>
                        <div>
                            <h2>{detailCocktail?.[0]?.strDrink}</h2>
                            <button className='x-button' onClick={setActive(false)}>X</button>
                        </div>
                     
                      <h3>Zutaten</h3>
                      <ul>
                      {array?.map((data, index) => {
                        return(
                          <li key={index}>{data?.[0]} {data?.[1]}</li>
                        )
                      })}
                      </ul>
                      <p>{detailCocktail?.[0]?.strInstructionsDE}</p>
                    </div>
                  </section>
                )
                : (<p>Loading...</p>)
            }
        </>
    )
}

export default Popup
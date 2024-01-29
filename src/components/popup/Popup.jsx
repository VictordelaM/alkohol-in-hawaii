import React, { useContext } from 'react'
import { mainContext } from '../../context/mainProvider'


const Popup = () => {
    const {detailCocktail} = useContext(mainContext)

    return (
        <>
            {detailCocktail 
                ? (<h3>{detailCocktail.strDrink}</h3>)
                : (<p>Loading...</p>)
            }
        </>
    )
}

export default Popup
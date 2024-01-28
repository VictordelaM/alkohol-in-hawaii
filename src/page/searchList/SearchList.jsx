import React, { useContext } from 'react'
import { mainContext } from '../../context/mainProvider'
import CocktailCard from '../../components/cocktailCard/CocktailCard'

const SearchList = () => {
    const {searchOutput} = useContext(mainContext)
    console.log("searchList", searchOutput);
    return (
        <>
            {searchOutput.map((cocktail, index) => {
                return (
                    <div key={index}>
                        <CocktailCard
                            cocktail={cocktail}
                        />
                    </div>
                )
            })}
        </>
    )
}

export default SearchList
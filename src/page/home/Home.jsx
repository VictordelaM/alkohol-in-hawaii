import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { mainContext } from '../../context/mainProvider'


const Home = () => {
    const {category, setCategory} = useContext(mainContext)

    return (
        <>  
            <Link to='/gincocktails'><button onClick={() => setCategory("Gin")}>Gin</button></Link>
            <Link to='/vodkacocktails'><button onClick={() => setCategory("Vodka")}>Vodka</button></Link>
            <Link to='/rumcocktails'><button onClick={() => setCategory("Rum")}>Rum</button></Link>
            <Link to='/scotchcocktails'><button onClick={() => setCategory("Scotch")}>Scotch</button></Link>
            <Link to='/nonalcoholic'>Hallo Johanna</Link>
            <Link to='/cocktaillistrandom'>Hi Victor</Link>
        </>
    )
}

export default Home
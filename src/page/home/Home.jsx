import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { mainContext } from '../../context/mainProvider'
import './home.css'

const Home = () => {
    const {setCategory, setSearchInput} = useContext(mainContext)

    return (
        <div className=''>  
            <Link to='/searchresult'><button onClick={() => setSearchInput("ma")}></button></Link>
            <div className='list'>
                <Link to='/gincocktails'>
                    <button onClick={() => setCategory("Gin")} className='homeButton lightblue'>
                        <h2 className='homeH2'>Gin</h2>
                        <p className='homeP'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    </button></Link>
                <Link to='/vodkacocktails'>
                    <button onClick={() => setCategory("Vodka")} className='homeButton purple'>
                        <h2 className='homeH2'>Vodka</h2>
                        <p className='homeP'>Ad, exercitationem!</p>    
                    </button></Link>
                <Link to='/rumcocktails'>
                    <button onClick={() => setCategory("Rum")} className='homeButton coral'>
                        <h2 className='homeH2'>Rum</h2>
                        <p className='homeP'>Laudantium, perspiciatis aliquam.</p>    
                    </button></Link>
                <Link to='/scotchcocktails'>
                    <button onClick={() => setCategory("Scotch")} className='homeButton mustYellow'>
                        <h2 className='homeH2'>Scotch</h2>
                        <p className='homeP'>Ducimus quaerat fugit nulla.</p>
                    </button></Link>
                <Link to='/nonalcoholic'>
                    <button className='homeButton blue'>
                        <h2 className='homeH2'>Alkoholfrei</h2>
                        <p className='homeP'>Esse neque, sunt eveniet illum explicabo.</p>
                    </button>
                </Link>
                <Link to='/cocktaillistrandom'>
                    <button className='homeButton green'>
                        <h2 className='homeH2'>Zufall</h2>
                        <p className='homeP'>Dolor minima rem a porro magni.</p>
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Home
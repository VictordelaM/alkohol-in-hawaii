import React from 'react'
import './nav.css'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <>

      <div id='navDiv'>

        <Link to="/"><h4>DRINKS&CHILL</h4></Link>
        <Link to="/AddDrink"><h3>ADD DRINK</h3></Link>
        
      </div>
    </>
  )
}

export default Nav

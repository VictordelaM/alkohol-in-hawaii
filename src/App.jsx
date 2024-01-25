
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './page/home/Home'
import CocktailListRandom from './components/cocktailListRandm/CocktailListRandom'

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cocktaillistrandom' element={<CocktailListRandom/>}/>
      </Routes>
    </>
  )
}

export default App

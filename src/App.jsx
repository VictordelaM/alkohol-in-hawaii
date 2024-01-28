
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './page/home/Home'
import CocktailListRandom from './page/cocktailListRandom/CocktailListRandom'
import NonalcoholicList from './page/nonalcoholicList/NonalcoholicList'
import AlcoholicList from './page/alcoholicList/AlcoholicList'
import SearchList from './page/searchList/SearchList'

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/searchresult' element={<SearchList/>}/>
        <Route path='/gincocktails' element={<AlcoholicList/>}/>
        <Route path='/vodkacocktails' element={<AlcoholicList/>}/>
        <Route path='/rumcocktails' element={<AlcoholicList/>}/>
        <Route path='/scotchcocktails' element={<AlcoholicList/>}/>
        <Route path='/nonalcoholic' element={<NonalcoholicList/>}/>
        <Route path='/cocktaillistrandom' element={<CocktailListRandom/>}/>
      </Routes>
    </>
  )
}

export default App

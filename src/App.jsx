import './App.css'
import Header2 from './components/header2/Header2'
import { Routes, Route } from 'react-router-dom'
import AddDrink from './pages/addDrink/AddDrink'

function App() {
  return (
    <>
      <Routes>
      <Route path="/" element={<Header2 />} />
      <Route path="/AddDrink" element={<AddDrink  />} />

      </Routes>
      {/* <Header2 /> */}
    </>
  )
}

export default App


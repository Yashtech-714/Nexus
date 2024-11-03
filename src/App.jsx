import React from 'react'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Events from './Pages/Events'
import Team from './Pages/Team'
import Header from './Components/Header'
import FooterEnd from './Components/FooterEnd'
import Header1 from './Components/Header1'
import Header2 from './Components/Header2'



const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="/events" element={<Events />} />
        <Route path='/team' element={<Team/>} />
      </Routes>
      <Header />
      <Header1 />
      <Header2 />
      <FooterEnd />
    </div>
  )
}

export default App

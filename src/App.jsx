import React from 'react'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Projects from './Pages/Projects'
import Events from './Pages/Events'
import Team from './Pages/Team'
import Header from './Components/Header'
import Footer from './Components/Footer'


const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Footer />

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/events' element={<Events/>} />
        <Route path='/team' element={<Team/>} />
      </Routes>
    </div>
  )
}

export default App

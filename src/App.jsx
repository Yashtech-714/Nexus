import React from 'react'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Projects from './Pages/Projects'
import Events from './Pages/Events'
import About from './Pages/About'
import Header from './Components/Header'


const App = () => {
  return (
    <div>
      <Navbar />
      <Header />

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/events' element={<Events/>} />
        <Route path='/about' element={<About/>} />
      </Routes>
    </div>
  )
}

export default App

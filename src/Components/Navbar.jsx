import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from '../assets/nexus-logo.jpg'
import pesu from '../assets/pesu-logo.png'

const Navbar = () => {

   
  return (
    <div className='fixed top-0 left-0 w-full opacity-90 '>
        <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-cyan-400 ml-10 mr-10'>
        <div className='flex '>
            <img className='w-8 h-10 m-2 cursor-pointer rounded-full brightness-150' src={logo} alt="Nexus-logo" />
            <h1 className='text-5xl font-bold text-cyan-400 hover:shadow-cyan-400'>NEXUS</h1>
        </div>
        <ul className='hidden md:flex items-center gap-20 font-medium mr-16'>
            <NavLink to='/'>
                <li className='py-1 text-white  hover:text-cyan-400' >HOME</li>
            </NavLink>
            <NavLink to='/events'>
                <li className='py-1 text-white  hover:text-cyan-400'>EVENTS</li>
            </NavLink>
            <NavLink to='/team'>
                <li className='py-1 text-white  hover:text-cyan-400'>TEAM</li>
            </NavLink>
        </ul>
        <img className='w-32 h-15 m-2 cursor-pointer rounded-full brightness-350 ' src={pesu} alt="Nexus-logo" />    
    </div>
    </div>
  )
}

export default Navbar

import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='justify-center m-64'>
        <div className='text-white justify-center mt-32'>
            <div className='flex justify-center gap-2'>Developing...  <h1 className='text-cyan-600 font-bold'> next-GENERATION TECHNOLOGY</h1>  by "us"</div> 
        </div>
        <div className='flex justify-center text-cyan-500 items-center mt-8'>
            <div className='font-bold text-9xl text-cyan-600 text-cyan-shadow'>
                NEX
            </div>

            <div className='ml-2'>
                <div className='mt-3 ml-2 text-xs font-bold text-white'>GENERATION</div>
                <div className='text-6xl font-bold ml-2 text-cyan-600 text-cyan-shadow'>US</div>
                <div className='mt-1  ml-2 text-xs font-bold  text-white'>TECHNOLOGY</div>
            </div>
        </div>
    </div>
  )
}

export default Header

import React from 'react'


const Header1 = () => {
  return (
    <div className='text-cyan-400 mt-56 ml-16 mr-15 text-2xl font-bold cursor-pointer'>
      EVENTS <br/> <br />
      <div className=' gap-52 text-white  w-1/2'>
        <div className='border border-solid border-cyan-300 rounded-md p-10 mb-5'>
            <p className='ml-64 text-md font-normal'>Event-1</p>
        </div>
        <div className='border border-solid border-cyan-300 rounded-md p-10 mb-5'>
            <p className='ml-64 text-md font-normal'>Event-2</p>
        </div>
        <div className='border border-solid border-cyan-300 rounded-md p-10 mb-5'>
            <p className='ml-64 text-md font-normal'>Event-3</p>
        </div>
      </div>

    </div>
  )
}

export default Header1

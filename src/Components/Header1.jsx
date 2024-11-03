import React from 'react'


const Header1 = () => {
  return (
    <div className='text-cyan-400 mt-32 ml-16 mr-15 text-2xl font-bold cursor-pointer'>
      DOMAINS <br/> <br />
      <div className=' gap-52 text-white  w-1/2'>
        <div className='border border-solid border-cyan-300 rounded-md p-10 mb-5'>
            <p className='ml-64 text-md font-normal'>App-Development</p>
        </div>
        <div className='border border-solid border-cyan-300 rounded-md p-10 mb-5'>
            <p className='ml-36 text-md font-normal'>Artificial Intelligence & Machine-Learning</p>
        </div>
        <div className='border border-solid border-cyan-300 rounded-md p-10 mb-5'>
            <p className='ml-64 text-md font-normal'>Web-Development</p>
        </div>
      </div>

    </div>
  )
}

export default Header1

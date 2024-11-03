import React from 'react'


const Header1 = () => {
  return (
    <div className='text-cyan-400 mt-32 ml-16 mr-15 text-2xl font-bold mb-32 cursor-pointer'>
      PROJECTS <br/> <br />
      <div className='text-white '>
        <div className='border border-solid border-cyan-300 rounded-md p-12 w-1/3 mb-5 '>
            <p className='ml-36 text-md font-normal'>Project-1</p>
        </div>
        <div className='border border-solid border-cyan-300 rounded-md p-12 w-1/3 mb-5 items-center'>
            <p className='ml-36 text-md font-normal'>Project-2</p>
       </div>
        <div className='border border-solid border-cyan-300 rounded-md p-12 w-1/3 mb-5 items-center'>
             <p className='ml-36 text-md font-normal'>Project-3</p>
        </div>
        <div className='border border-solid border-cyan-300 rounded-md p-12 w-1/3 mb-5 items-center'>
            <p className='ml-36 text-md font-normal'>Project-4</p>
        </div>
      </div>

    </div>
  )
}

export default Header1

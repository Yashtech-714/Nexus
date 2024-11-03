import React from 'react'

const footer = () => {
  return (
    <div className=' bottom-0 left-0 w-full'>
        <div className='flex justify-between text-white m-10 border-t border-t-white '>
            <div className='mt-4'>
                <h1 className='font-bold text-xl text-cyan-400 p-0'>NEXUS CLUB</h1> <br />
                PESU, <br/>
                RR Campus. <br/><br/>
                <p className='text-sm text-gray-400 font-bold'>&copy;Nexus. All rights reserved</p>
            </div>

            <div className='mr-16 mt-3 text-cyan-400'>
            Contact Us: <br/>
            <div className='flex justify-between gap-10'>
              <div>
                <a className='text-white hover:text-gray-500 cursor-grab' href="https://www.instagram.com/nexus.pesu/">Instagram</a> <br />
                <a className='text-white hover:text-gray-500 cursor-grab' href="https://www.linkedin.com/company/nexus-pes/">LinkedIn</a> <br />
                <a className='text-white hover:text-gray-500 cursor-grab' href="https://github.com/Nexus-PES/">GitHub</a> <br />  
              </div>
              <div>
                <p className='text-white hover:text-gray-500 cursor-text'> nexus.abc123@gmail.com</p>
                <p className='text-white hover:text-gray-500 p-0 '>+91-0123456789</p>
                <p className='text-white hover:text-gray-500 p-0'>+91-0123456789</p>
              </div>
            </div>

            </div>
        </div>
    </div>

  )
}

export default footer

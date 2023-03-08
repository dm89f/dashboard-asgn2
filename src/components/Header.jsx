import React from 'react'
import {SlOptionsVertical} from 'react-icons/sl'
import {FiMenu} from 'react-icons/fi'

function Header({toggleSidebar}) {

  

  return (
    <header className='px-2 md:px-5 lg:px-10 bg-white w-full py-3'>
      <div className='flex items-center justify-between'>
        
        {/* leftside Header */}
        <div className='flex items-center space-x-2'>
          <FiMenu onClick={toggleSidebar} className='md:hidden' size={25}/>
          <h3 className='text-lg md:text-2xl'>Knowledge</h3>
        </div>

        {/* rightside Header */}
        <div className='flex items-center space-x-2'>
          <button className='px-3 py-2 bg-blue-800 text-white'>Create Course</button>
          <div className='p-1 rounded-full border-2 hover:border-gray-500'>
            {/* <div 
              style={{backgroundImage:`url('/profile-img.jpeg)`}} 
              className='bg-contain bg-center bg-norepeat h-10 w-10 rounded-full'
              >
            </div> */}
            <img style={{objectFit:'-moz-initial'}} className='h-10 w-10 rounded-full' src="/profile-img.jpeg" alt="profile-img" />
          </div>
          
          <SlOptionsVertical/>
        </div>
      </div>
    </header>
  )
}

export default Header
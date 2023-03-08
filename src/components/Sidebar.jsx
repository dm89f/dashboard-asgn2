import React from 'react'
import {FiHome, FiUsers} from 'react-icons/fi'
import {SlGraduation} from 'react-icons/sl'
import {MdOutlineGroupWork} from 'react-icons/md';
import {TbMessage} from 'react-icons/tb'
import {CiVault} from 'react-icons/ci'
import {AiOutlineSetting, AiOutlineCloseCircle} from 'react-icons/ai'
import {BiBuildings} from 'react-icons/bi'
import {FaUserCircle} from 'react-icons/fa'



function Sidebar({sidebarActive, toggleSidebar}) {




  return (
    <section 
      className={`transition absolute bg-brown-dark sm:shadow-lg text-white h-screen  
        w-64 -left-64 px-3 xl:px-5 md:left-0  ${sidebarActive&&"translate-x-64"}
        md:translate-x-0 md:block md:w-3/12 xl:w-2/12 z-10 md:z-0`}>
      <div className='w-full h-full flex flex-col '>
        
        {/* sidebar Upper */}
        <div className='text-lg lg:text-xl'>
          <div className='flex items-center justify-between'>
            <h3 className='my-5 text-xl 2xl:text-3xl font-genos '>Remote SalesFuel</h3>
            <AiOutlineCloseCircle className='md:hidden' size={20} onClick={toggleSidebar}/>
          </div>
          <div className='w-full flex items-center space-x-3 px-1 py-1 hover:bg-brown-light my-1'>
            <FiHome size={20}/> <p className=''>Dashboard</p>
          </div>
          <div className='w-full flex items-center space-x-3 px-1 py-1 hover:bg-brown-light my-1'>
            <SlGraduation size={20}/> <p className=''>Knowledge</p>
          </div>
          <div className='w-full flex items-center space-x-3 px-1 py-1 hover:bg-brown-light my-1'>
            <FiUsers size={20}/> <p className=''>Members</p>
          </div>
          <div className='w-full flex items-center space-x-3 px-1 py-1 hover:bg-brown-light my-1'>
            <MdOutlineGroupWork size={20}/> <p className=''>Teams</p>
          </div>
          <div className='w-full flex items-center space-x-3 px-1 py-1 hover:bg-brown-light my-1'>
            <CiVault size={20}/> <p className=''>Vault</p>
          </div>
          <div className='w-full flex items-center space-x-3 px-1 py-1 hover:bg-brown-light my-1'>
            <TbMessage size={20}/> <p className=''>Chat</p>
          </div>
        </div>


        {/* sidebar bottom */}
        <div className='mt-auto mb-5'>
          <div className='w-full flex items-center space-x-3 px-1 py-1 hover:bg-brown-light my-1'>
            <AiOutlineSetting size={20}/> <p className='text-xl'>Settings</p>
          </div>
          <div className='w-full flex items-center space-x-3 px-1 py-1 hover:bg-brown-light my-1'>
            <BiBuildings size={20}/> <p className='text-xl'>Company</p>
          </div>
          <div className='w-full flex items-center space-x-3 px-1 py-1 hover:bg-brown-light my-1'>
            <FaUserCircle size={20}/> <p className='text-xl'>My Profile</p>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Sidebar  
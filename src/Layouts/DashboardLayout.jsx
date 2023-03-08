import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'

function Dashboard({toggleSidebar}) {



  return (
    <section className='w-full ml-auto  min-h-screen md:w-9/12 xl:w-10/12'>
      <Header toggleSidebar={toggleSidebar}/>

      <Outlet/>
    </section>
  )
}

export default Dashboard
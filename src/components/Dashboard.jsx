import React from 'react'
import Header from './Header'
import {courses} from '../constants/courses'
import Course from './Course'

function Dashboard({toggleSidebar}) {



  return (
    <section className='w-full ml-auto  min-h-screen md:w-9/12 xl:w-10/12'>
      <Header toggleSidebar={toggleSidebar}/>
      <main className='px-2 md:px-5 lg:px-10 mt-10'>

        {/* dashboard nav */}
        <div className='flex items-center justify-between'>
          <div className='flex items-center space-x-2 text-md lg:space-x-5 lg:text-xl'>
            <p className='py-2 border-b-2 hover:border-brown' >ALL</p>
            <p className='py-2 border-b-2 hover:border-brown' >LIVE</p>
            <p className='py-2 border-b-2 hover:border-brown' >DRAFT</p>
            <p className='py-2 border-b-2 hover:border-brown' >ARCHIVED</p>
          </div>
          <div >
            <form className='bg-white' action="#">
              <select className='bg-white px-2 py-1 outline-none' name="team">
                <option className='px-2 py-1' value="">-- Select Team --</option>
                <option className='px-2 py-1' value="Sales">Sales</option>
                <option className='px-2 py-1' value="Marketing">Marketing</option>
              </select>
            </form>
          </div>
        </div>
        
        
        <section className='mt-5 grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {
            courses&&courses.map((course)=>{
              return(
                <Course key={course.title} course={course} />
              )
            })
          }
        </section>
      </main>
    </section>
  )
}

export default Dashboard
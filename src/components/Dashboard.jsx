import React from 'react'
import Header from './Header'
import {courses} from '../constants/courses'
import Course from './Course'

function Dashboard() {
  return (
    <section className='w-full ml-auto bg-red-100 h-screen md:w-9/12 xl:w-10/12'>
      <Header/>
      <main className='xl:px-10 mt-10'>
        <div className='flex items-center space-x-5 text-xl'>
          <p className='py-2 border-b-2 hover:border-brown' >ALL</p>
          <p className='py-2 border-b-2 hover:border-brown' >LIVE</p>
          <p className='py-2 border-b-2 hover:border-brown' >DRAFT</p>
          <p className='py-2 border-b-2 hover:border-brown' >ARCHIVED</p>
        </div>
        
        <section className='mt-5'>
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
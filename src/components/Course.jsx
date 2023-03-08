import React from 'react'
import {BiNotepad} from 'react-icons/bi'
import {FiClock} from 'react-icons/fi';
import CourseCateg from './utils/CourseCateg';

function Course({course}) {
  return (
    <div className='p-2'>
      <div className='border-2 border-brown-light hover:border-blue-700 bg-white shadow-sm md:shadow-lg'>

        {/* course card header */}

        <div className='relative w-full'>
          <img src={course.image} className='w-full h-48' alt="" />
          <CourseCateg category={course.category}/>
        </div>
        {/* course card body */}
        <div className='p-2'>
          
          <h3 className='text-md font-bold'>{course.title}</h3>
          <p className='text-sm text-gray-500'>Last updated : {course.last_updated}</p>
          <div className='flex space-x-4 mt-2'>
            <p className='flex items-center space-x-2'> <BiNotepad size={15}/> <span>Lessons : ${course.tot_lessons}</span> </p>
            <p className='flex items-center space-x-2'> <FiClock size={15}/> <span>Minutes : ${course.tot_duration}</span> </p>
          </div>
          <div className='flex items-center text-sm space-x-4 my-2'>
           {
             course.teams&&course.teams.map((team)=>{
                return (<div key={team} className='rounded-full bg-gray-200 rounded px-2 py-1'>{team}</div>)
             })
           }
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Course
import React from 'react'
import { useSearchParams } from 'react-router-dom'
import {courses} from '../constants/courses'
import Course from './Course'

function Knowledge() {

  const [ searchParams, setSearchParams ] = useSearchParams({ category:'All', team:'All' })

  let category = searchParams.get('category');
  let team = searchParams.get('team');

  let categories = [
    'All',
    'Live',
    'Draft',
    'Archived',
  ]

  let teams = [
    'Marketing',
    'Sales'
  ]
  
  const handleCategClick = (category)=>{
    setSearchParams({team, category})
  }

  const handleTeamChange = (e)=>{
    e.preventDefault();
    setSearchParams({category, team:e.target.value})

  }

  return (
    <main className='px-2 md:px-5 lg:px-10 mt-10'>

        {/* dashboard nav */}
        <div className='flex items-center justify-between'>
          <div className='flex items-center space-x-2 text-md lg:space-x-5 lg:text-xl'>
            {
              categories&&categories.map( (categ)=>{
                return(
                  <p 
                    key={categ}
                    onClick={()=>{handleCategClick(categ)}}
                    className={
                      `py-2 border-b-2 hover:border-brown 
                      ${category.toUpperCase() ===categ.toUpperCase() &&'border-brown'} `
                    }
                  >
                    {categ.toUpperCase()}
                  </p>
                )
              } )
            }
          </div>
          <div >
            <form className='bg-white' action="#">
              <select onChange={handleTeamChange} className='bg-white px-2 py-1 outline-none' name="team">
                <option className='px-2 py-1' defaultValue={true} value="All">-- Select Team --</option>
                <option className='px-2 py-1' value="Sales">Sales</option>
                <option className='px-2 py-1' value="Marketing">Marketing</option>
              </select>
            </form>
          </div>
        </div>
        
        <section className='mt-5 grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {
            courses&&courses.filter((course)=>{
              return ( category=== 'All' || course.category.toUpperCase() === category.toUpperCase() )&&(team === 'All'|| course.teams.find((tm)=>{ return tm.toUpperCase() === team.toUpperCase() }))
            }).map((course)=>{
              return(
                <Course key={course.title} course={course} />
              )
            })
          }
        </section>
    </main>
  )
}

export default Knowledge
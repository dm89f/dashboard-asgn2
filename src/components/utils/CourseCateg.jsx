import React from 'react'
import {FaCircle} from 'react-icons/fa'

function CourseCateg({category}) {

  let color = '';

  if( category.toUpperCase() === 'DRAFT' ){
    color='red'
  }else if( category.toUpperCase() === 'Archived' ){
    color="gray"
  }else if( category.toUpperCase() === 'LIVE' ){
    color="green"
  }


  return (
    <p className={`absolute right-2 top-2 flex items-center space-x-1  bg-gray-100/100 px-2 py-1 text-sm`}>
      <FaCircle size={10} color={color}/>
      <span>{category}</span>
    </p>
  )
}

export default CourseCateg
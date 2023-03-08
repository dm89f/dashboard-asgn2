import React from 'react'
import {useLocation} from 'react-router-dom'

function OtherPageLayout() {
  
  let location = useLocation()
  let currentPath = location.pathname.split('/')[1].toUpperCase();


  return (
    <section className='h-full flex items-center justify-center'>
      <h1 className='text-5xl text-gray-300'>
      {currentPath}
      </h1>
    </section>
  )
}

export default OtherPageLayout
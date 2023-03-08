import React from 'react'
import {useLocation} from 'react-router-dom'
import {BiError} from 'react-icons/bi'

function ErrorPage() {

  let location = useLocation()
  let currentPath = location.pathname.split('/')[1].toUpperCase();

  return (
    <section className='h-full flex items-center justify-center text-2xl lg:text-5xl text-red-300 space-x-3'>
      <BiError/> 
      <h1 >
        Error 404 Page Not Found
      </h1>
  </section>
  )
}

export default ErrorPage

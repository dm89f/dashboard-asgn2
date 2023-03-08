import React from 'react'

function Sidebar() {

  let active = false;

  return (
    <section className={`transition absolute w-64 -left-64 md:left-0  ${active&&"translate-x-64"}
    md:translate-x-0 md:block md:w-3/12 xl:w-2/12 bg-green-100 h-screen `}>
fwqe
    </section>
  )
}

export default Sidebar
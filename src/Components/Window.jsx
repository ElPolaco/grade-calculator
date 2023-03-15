import React from 'react'

function Window(props) {
  return (
    <div className='md:w-2/4 w-full h-screen md:h-2/3  bg-sky-800 text-center rounded text-3xl text-yellow-50'>
        {props.children}
    </div>
  )
}

export default Window
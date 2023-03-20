import React from 'react'

function Window(props) {
  return (
    <div className='md:w-2/4 w-full bg-sky-800 text-center rounded text-3xl text-yellow-50 p-10'>
        {props.children}
    </div>
  )
}

export default Window
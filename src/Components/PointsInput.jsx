import React from 'react'


function PointsInput({min, max,onChange,value,reff,placeholder,id}) {
  return (
    <div className='self-center p-2'>
    <label htmlFor={id} className='text-left min-w-min'>{placeholder}</label>
    <input id={id} ref={reff} placeholder={placeholder} type="number" inputMode="numeric" className='text-blue-900 bg-slate-100 w-24 self-center m-3' min={min} max={max} onChange={onChange} value={value} />
    </div>
  )
}

export default PointsInput
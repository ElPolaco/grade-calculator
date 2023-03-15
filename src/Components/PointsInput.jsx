import React from 'react'


function PointsInput({min, max,onInput,value,reff,placeholder,id}) {
  return (
    <input id={id} ref={reff} placeholder={placeholder} type="number" inputMode="numeric" className='text-blue-900 bg-slate-100 w-24 self-center m-3' min={min} max={max} onInput={onInput} value={value} />
  )
}

export default PointsInput
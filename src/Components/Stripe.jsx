import React from 'react'

function Stripe({val}) {
  return (
    <div className="w-[16.66%] mt-32 px-4 py-3 border border-zinc-700 flex justify-between items-center">
    <img 
      src={val.url} 
      alt={`Image ${val.Number}`} 
      style={{ width: '240px', height: '70px', objectFit: 'cover',}} 
    /> 
    <span className='font-semibold ms-3'>{val.Number}</span>
   </div>
  )
}

export default Stripe
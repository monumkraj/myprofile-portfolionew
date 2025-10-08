import React from 'react'
import Button from '../Button'

function Product({ val }) {
  return (
    <div className="w-full text-white  py-8 px-4">
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl capitalize font-medium">
          {val.title}
        </h1>

        {/* Details */}
        <div className="w-full lg:w-1/2 mt-5 lg:mt-0">
          <p className="text-sm sm:text-base md:text-lg leading-relaxed">
            {val.description}
          </p>

          {/* Buttons */}
          <div className="mt-5 flex flex-wrap gap-4">
            {val.live && <Button />}
            {val.live && <Button title="Case study" />}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product

import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

function Card({ width, start, para, hover }) {
  return (
    <div className={`bg-zinc-800 p-5 rounded-xl hover:${hover} ${width} min-h-[30rem] flex flex-col justify-between`}>
      <div className='w-full'>
        <div className='w-full flex justify-between items-center'>
          <h3>one heading</h3>
          <FaArrowRightLong />
        </div>
        <h1 className='text-3xl font-medium mt-12'>Front-end Developer</h1>
      </div>

      <div className='down w-full'>
        {start === true && (
          <>
            <h1 className='Pro-text  text-6xl font-bold  text-set tracking-tight leading-none'>Start a Project</h1>
            <button className='rounded-full py-2 px-5 mt-5 border-2 border-zinc-50'>Contact Us</button>

            {/* Flex container to align text and image */}
            <div className='flex items-center justify-between mt-8'>
              <p className='text-small text-zinc-500 font-medium w-2/3'>
                Building fast, responsive, and accessible web interfaces using modern tools.
              </p>
              <div>

              </div>
          
            </div>
          </>
        )}

        {para && (
          <p className='text-small text-zinc-500 font-medium mt-4'>
            Building fast, responsive, and accessible web interfaces using modern tools.
          </p>
        )}
      </div>
    </div>
  )
}

export default Card

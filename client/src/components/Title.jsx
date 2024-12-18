/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const Title = ({text1, text2}) => {
  return (
    <div className="inline-flex gap-2 items-center mb-4">
     <p className='text-gray-800'>{text1} <span className='text-gray-700 font-medium'>{text2}</span></p>
     <p className='w-8 sm:w-12 h-1 sm:h-2 bg-gray-800'></p>
    </div>
  )
}

export default Title
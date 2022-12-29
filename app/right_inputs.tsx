import React from 'react'
import Image from 'next/image'

function RightInputs() {


  
  return (
    <div className="flex items-center">
      <img className="rounded-full border border-gray-100 shadow-sm ml-2"  src='/thresh_icon.png' alt="thresh" width="64" height="64"/>
      <input type="text" placeholder='Enter name' className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" value="Jane Doe"'/>
    </div>
  )
}

export default RightInputs
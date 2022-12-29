import React from 'react'
import LeftTeam from './left_team'
import RightTeam from './right_team'

export default function left_team() {
  return (
    <div className="flex justify-center p-20">
      <div className='grid grid-cols-2 gap-5 '>
              <LeftTeam/>
              <RightTeam/>
      </div>
    </div>

  )
    
}

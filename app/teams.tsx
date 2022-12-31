"use client"
import React, { useEffect, useState } from 'react'
import LeftTeam from './left_team'
import RightTeam from './right_team'

export default function Teams() {

  const [champ_list, setChampList] = useState(null)
  const champ_name_api = "http://ddragon.leagueoflegends.com/cdn/12.23.1/data/en_US/champion.json"

  useEffect(() => {
    fetch(champ_name_api)
    .then(res => res.json())
    .then(data => setChampList(data))
  })



  return (
    <div className="flex justify-center p-20">
      <div className='grid grid-cols-2 gap-5 '>
              <LeftTeam/>
              <RightTeam/>
              {console.log(champ_list)}
      </div>
    </div>

  )
    
}

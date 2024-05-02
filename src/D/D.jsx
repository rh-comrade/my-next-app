"use client"
import React from 'react'
import { useSelector } from 'react-redux'
const D = () => {
  const location = useSelector((state)=>{
    return state.appReducer.location
  })
  return (
    <div>
      <h1>D</h1>
      <h6>Location: {location}</h6>
    </div>
  )
}

export default D

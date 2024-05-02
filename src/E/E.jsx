"use client"
import React from 'react'
import { useSelector } from 'react-redux'
const E = () => {
  const [name,location] = useSelector((state)=>{
    return [state.appReducer.name, state.appReducer.location];
  })
  return (
    <div>
      <h1>E</h1>
      <h4>Name: {name}</h4>
      <h4>Location: {location} </h4>
    </div>
  )
}

export default E

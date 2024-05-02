"use client"
import React from 'react'
import { useSelector } from 'react-redux'
const C = () => {
  const name = useSelector((state)=>{
    return state.appReducer.name
  })
  return (
    <div>
      <h1>C</h1>
      <h6>Name: {name} </h6>
    </div>
  )
}

export default C

"use client"
import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import "./B.css"
const B = () => {
    const [location,setLocation]=useState("");
    const dispatch = useDispatch();
    const handleClick = ()=>{
      dispatch({
        type:"LOCATION_UPDATE",
        location
      })
    }
  return (
    <div>
      <h1>B</h1>
      <p>Location: <input onChange={(e)=>setLocation(e.target.value)} type="text" /></p>
      <button onClick={handleClick}>submit</button>
    </div>
  )
}

export default B

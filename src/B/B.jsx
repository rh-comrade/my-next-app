"use client"
import React,{useState} from 'react'
import "./B.css"
const B = () => {
    const [location,setLocation]=useState("");
  return (
    <div>
      <h1>B</h1>
      <p>Location: <input onChange={(e)=>setLocation(e.target.value)} type="text" /></p>
      <button onClick={()=>alert(location)}>submit</button>
    </div>
  )
}

export default B

"use client"
import "./A.css"
import React,{ useState } from "react";
const A = ()=>{
    const[name,setName]=useState("");
    return(
        <>
        <h1>A</h1>
        <p>Name: <input onChange={(e)=>setName(e.target.value)} type="text" /></p>
        <button onClick={(e)=>{alert(name)}}>submit</button>
        </>
    )
}

export default A;
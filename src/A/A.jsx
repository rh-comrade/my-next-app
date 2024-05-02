"use client"
import "./A.css"
import React,{ useState } from "react";
import { useDispatch } from "react-redux";

const A = ()=>{
    const[name,setName]=useState("");
    const dispatch = useDispatch();

    const handleClick = ()=>{
        dispatch({
            type:"NAME_UPDATE",
            name
        })
    }
    return(
        <>
        <h1>A</h1>
        <p>Name: <input onChange={(e)=>setName(e.target.value)} type="text" /></p>
        <button onClick={handleClick}>submit</button>
        </>
    )
}

export default A;
import React from "react";
import { useState } from "react";
 
function Nav(props) {
    const [input,setInput]=useState("")
    const handleButtonClick = () => {
        console.log("Button in child component was clicked!");
        
      }
    return (
        <header>
        <label for="search" ></label>
        <input type="text" id="name" name="name" placeholder="Enter the city" onChange={e=>setInput(e.target.value)} />
        <button className="btn" onClick={()=>props.setCity(input)} >FIND WEATHER</button>
        </header>
    )
}



export default Nav 

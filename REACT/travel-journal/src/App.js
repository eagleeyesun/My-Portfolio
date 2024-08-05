import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Data from "./Data";
import { useState } from "react"




export default function App (){
  const [darkMode,setDarkMode]=useState(false)

  function toggleDarkMode(){
    setDarkMode(prevMode=>!prevMode)
  }
    const Heros = Data.map(item =>{
        return (<Hero
        key={item.id}
        item={item}
        darkMode={darkMode}
        />
        )
    })


  return(
    <div>
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
       <section className="container">
        {Heros}
        </section>

    </div>
  )
   
        

     
    
}
import React from 'react'
import { useState } from 'react'


const Home = () => {
    // var ner = "bold"
    const [ner , setNer] = useState("Bat")
    const clickHand =()=>
    {
        setNer('bold');
    }
    return (
        <div>
            <h1>{ner}</h1>
            <button onClick={clickHand}   style={{margin:"3px"}}>
                Click me!
            </button>
        </div>
  )
}

export default Home

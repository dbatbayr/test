import React from 'react'
import { useState } from 'react'

const Too = () => {
    const [eToo,setT ] = useState(0)

    return (
        <div>
            <h1>{eToo}</h1>
            
            <button style={{margin:"2px", padding:'2px'}} 
                onClick={()=> setT((eToo)=> eToo + 1)}>Add by 1</button>
            <button style={{margin:"2px", padding:'2px'}} 
                onClick={()=> setT((eToo)=> eToo - 1)}>minus by 1</button>
            <button style={{margin:"2px", padding:'2px'}} 
                onClick={()=> setT((eToo)=> eToo / 2)}>to divede by 2</button>
            <button style={{margin:"2px", padding:'2px'}} 
                onClick={()=> setT((eToo)=> eToo * 2)}>multiply by 2</button>
        </div>
    )
}

export default Too

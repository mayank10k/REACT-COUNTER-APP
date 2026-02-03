import React, { useState } from 'react'
import './Counter.css'

//useState Hook

const Counter = () => {
    //[state variable ,state function]
    const[count,setCount]=useState(0);
  return (
    <div className='counter-container'>
        <p id='para'>You have clicked {count} times</p>
        <button id='btn'  onClick={()=>{setCount(count+1)}}>Click Me</button>
    </div>
  )
}

export default Counter
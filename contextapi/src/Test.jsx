
import React from 'react';

function Test(){
    

const handleInput=(event)=>{
    console.clear()
console.log("value : ",event.target.value)
}

   return(
    <input  type='text' onChange={handleInput} placeholder='type your message' />
   )
}

export default Test;

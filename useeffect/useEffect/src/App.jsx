import { useState,useEffect } from 'react'


function App() {
const [count,setCount] = useState(0)

useEffect(()=>{
  console.log("comoponent re-render")
},[count])

//jab jab count ki value change hogi console main print hoga ye message bex of useEffect method and iss main timer ka bhi used kar sakt hai

  return (
    <>
<div>
<h2>Count:{count}</h2>
<button onClick={()=>setCount(count+1)}>Increment</button>

</div>
        
      
      
    </>
  )
}

export default App


import React from 'react'

function Parent(){
const userName="This is Garima Tomar"
return <Child name ={userName} />
}

function Child({name}){
return <GrandChild name2 ={name} />
}

function GrandChild({name2}){
return <h3>Hello{name2}</h3>
}

function App() {
  return (
    <div>
      <Parent />
    </div>
  )
}

export default App

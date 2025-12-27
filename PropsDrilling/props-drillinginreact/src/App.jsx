
import React from 'react'

function Parent(){
const userName="This is Garima Tomar"
return <Child name ={userName} />
}
// first parent comopnent banaya fir ek value di isko jis main data save kiya jo grandchild compoment main humko dikhana ho,fir return kar diya child component ko with name property de kar, name ki jagha par hum kuch bhi naam de sakte hai  retrun karvate waqt and varaible name diya hai object main
function Child({name}){
return <GrandChild name2 ={name} />
}
// yaha par reurn ke time par {name} property di hai jo grandchild accept karega jab hum usko denge issi se vo upar ka data access karega
function GrandChild({name2}){
return <h3>Hello{name2}</h3>
}
// yaha par reurn ke time par {name2} property di hai jo grandchild accept karega jab hum usko denge issi se vo upar ka data access karega

function App() {
  return (
    <div>
      <Parent />
    </div>
  )
}

export default App

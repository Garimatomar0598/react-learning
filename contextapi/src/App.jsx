import React, { useState } from 'react'
import './App.css'
import UserContext from './Context/UserContext'
import Login from './Components/Login'
import Profile from './Components/Profile'
import Test from './Test'
import Loggedin from './Loggedin'

function App() {

  const [user, setUser] = useState(null);
  return (
 
      <UserContext.Provider value={{ user, setUser }}>
<Login/>
<Profile/>
<Test />
<Loggedin />
      
      </UserContext.Provider>
    
  )
}

export default App

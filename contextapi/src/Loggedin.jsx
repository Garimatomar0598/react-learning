import React from 'react'

function Loggedin() {
    const userlogin = false
  return (
    <div>
      {userlogin ?  <h1>Welcome user</h1>: <h2>Please login</h2>}
    </div>
  )
}

export default Loggedin

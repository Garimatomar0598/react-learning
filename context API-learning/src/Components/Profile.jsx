import React, { useContext } from 'react';
import UserContext from '../Context/UserContext'

function Profile() {
const {User} = useContext(UserContext)
if(!User) return<div>
please log in</div>
return <div>Welcome{User.username}</div>
  
}

export default Profile

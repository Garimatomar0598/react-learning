import React, { useEffect } from 'react'

function Github() {
const [data,setData] = React.useState([]);
    useEffect(() => {
       fetch('https://api.github.com/users/Garimatomar0598')
       .then(res => res.json())
       .then(data => console.log(data))
       setData(data);
      },[])
  return (
    <div className='text-3xl text[white] bg-amber-500'>
      Github  Followers: {data.followers}
    <img src={data.avatar_url} alt="not found" />
    </div>
  )
}

export default Github

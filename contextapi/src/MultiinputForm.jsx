
import React, { useState } from 'react'
function MultiinputForm() {
const [formData,setFormData] = useState({
    name:"",
    email:"",
    age:"",
    phone: "",
    gender:"",
    city:"",
    
    
})

const handleSubmit = (e)=>{
e.preventDefault()
console.log(formData)

}

const handleChange = (e)=>{
  const {name,value}= e.target;
setFormData((prev)=>({
...prev,
[name]: value
}))

}

  return (
    <div>
      <h2>Multiple Forms in React</h2>
      <br />
      <form onSubmit={handleSubmit}>
        <input name="name" type="text" placeholder="Name"
        value={formData.name}
        onChange={handleChange}
         />
        <br />
        <input name="email" type="email" placeholder="Email"
         value={formData.email}
        onChange={handleChange} />
        <br />

                <input name="phone" type="number" placeholder="phone"
         value={formData.phone}
        onChange={handleChange} />
        <br />

        <input name="gender" type="text" placeholder="gender"
         value={formData.gender}
        onChange={handleChange} />
        <br />

                <input name="city" type="text" placeholder="city"
         value={formData.city}
        onChange={handleChange} />
        <br />
       
        <input name="age" type="number" placeholder="Age"
         value={formData.age}
        onChange={handleChange}/>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default MultiinputForm;


import React, { useState } from 'react'
function MultiinputForm() {
const [formData,setFormData] = useState({
    name:"",
    email:"",
    age:"",
})


  return (
    <div>
      <h2>Multiple Forms in React</h2>
      <form>
        <input name="name" type="text" placeholder="Name" />
        <br />
        <input name="email" type="email" placeholder="Email" />
        <br />
        <input name="age" type="number" placeholder="Age" />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default MultiinputForm;

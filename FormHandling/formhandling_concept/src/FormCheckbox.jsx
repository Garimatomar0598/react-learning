import {React, useState} from 'react'

function FormCheckbox() {
const [formData,setFormData] = useState({
    gender:"",
    country:"india",
})

const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(handleSubmit);
}

const handleChange = (e)=>{
    const {name,value,type} = e.target;
    setFormData((prev)=>({
        ...prev,
        [name]:type ==="text" ? checked : value
    }))


}


  return (
    <div>
<h2>Form Checkbox Undesrstanding in React</h2>
<form onSubmit={handleSubmit}  >
<label>
    <input
     type='radio' name='gender' value="Female" checked={formData.gender === "Female"}
     onChange={handleChange}

     /> Female
</label>

<label>
    <input type='radio' name='gender' value="male" 
    checked={formData.gender === "male"}
     /> male
</label>
<br />
<label>
Country:
<select name= "country"value={formData.country} onChange={handleChange} >
<option value="India">india</option>
<option value="USA">USA</option>
<option value="China">China</option>
<option value="Brazil">Brazil</option>
<option value="Thailand">Thailand</option>
<option value="Japan">Japan</option>

</select>
</label>


<br />
<button>Submit</button>

</form>
    </div>
  );
  
}

export default FormCheckbox;

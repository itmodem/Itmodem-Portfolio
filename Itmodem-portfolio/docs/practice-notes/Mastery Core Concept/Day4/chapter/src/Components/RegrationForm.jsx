import React from 'react'
import { useState } from 'react'
const RegrationForm = () => {
    const [formData , setFormData] = useState({
        name: "",
        email: "",
        password: "",
    })
const [error, setError] = useState({});

const handleChange = (e) => {
    setFormData({...formData [e.target.name] :  e.target.value });
}

const validate = () => {
    const newErrors = {};

    if(!formData.name)
        newErrors.name = "Name is required.";
    if(!formData.email) = "Email is required.";
    if(!/\+@/S+/./S+/.test (formData.email))
        newErrors.email = "Email is invaild.";
if(!formData.password)
    newErrors.password = "Password is required.";
else if(formData.password.length < 6)
    newErrors.password = "Password must be at least 6 characters.";
return newErrors;

const handlSubmit = (e) => {
e.preventDefalut();
}

const validationErros = validate();
if(Object.keys(validationErros).length > 0)
{
    setError(
        (validatationErrors);
        return;
    )
}
}
  return (
    <div>
      
    </div>
  )
}

export default RegrationForm

import React, { useState } from 'react'
import axios from 'axios';
// import Joi from 'joi';
import { useNavigate } from 'react-router-dom';

export default function Login({saveuser}) {
  let [ User , setUser] = useState({
    email:"",
    password:""
   
  })
  let[validateError]= useState([])
  let[apiError,setapiError]= useState(null)
  let[loading,setloading]= useState(false)
let navigate = useNavigate()

  function loginuser(e){
    let currentUser ={...User};
    currentUser[e.target.name]=e.target.value;
    setUser(currentUser)
  }

  // function validateUser(){
  //   let schema = Joi.object({
  //     email:Joi.string().required().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).messages({"string.empty":"email is required"}),
  //     password:Joi.string().required().pattern(new RegExp(/^^[a-zA-Z0-9]{3,10}$/)).messages({"string.empty":"password is required"})
  //   })
  //   let validation = schema.validate(User, {abortEarly:false})
  //   console.log(validation);

  //   if (validation.error){
  //     setvalidateError(validation.error.details)
  //     return false
  //   }else{
  //     return true
  //   }
  // }
  
 async function loginUser(e){
  e.preventDefault();
  if(  true ){
    setloading(true)
    let {data} = await axios.post(`https://route-movies-api.vercel.app/signin` , User);

    console.log(data);
if(data.message === "success")
{
  localStorage.setItem("token",data.token)
  saveuser()
 navigate("/home");
setloading(false)
setapiError(null)
}
else{setapiError(data.message)
  setloading(false)

}
  }
}
  return (
    <div className="w-50 mx-auto py-4">
    <h1 className="mb-4">Login Form</h1>
    {apiError && <div className='alert alert-danger'>{apiError}</div>}
<form  >

    <div className="form-group mb-4">
        <label htmlFor="email">Email</label>
        <input type="email" className={validateError.filter((element)=>element.context.label === "email")[0] ? " is-invalid form-control":"form-control  "} name='email' id="email" onChange={e=>{loginuser(e)}}/>
        <div className='validation text-danger'>
{validateError.filter((element)=>element.context.label === "email" )[0]?.message}
        </div>
    </div>
    <div className="form-group mb-4">
        <label htmlFor="password">Password</label>
        <input type="password"  className={validateError.filter((element)=>element.context.label === "password")[0] ? " is-invalid form-control":"form-control  "} name='password' id="password" onChange={e=>{loginuser(e)}} />
        <div className='validation text-danger'>
{validateError.filter((element)=>element.context.label === "password" )[0]?.message}
        </div>
    </div>
    <button onClick={(e)=>{ loginUser(e)}}  className="btn btn-outline-primary">{loading ?<i className='fa fa-spinner fa-spin'></i>:"Sign In"}</button>

</form>
    
    </div>  )
}

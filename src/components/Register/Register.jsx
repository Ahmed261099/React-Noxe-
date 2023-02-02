import React, { useState } from 'react'
import axios from 'axios';
import Joi from 'joi';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  let [ User , setUser] = useState({
    first_name :"",
    last_name:"",
    age:"",

    email:"",
    password:""
   
  })
  let[validateError,setvalidateError]= useState([])
  let[apiError,setapiError]= useState(null)
  let[loading,setloading]= useState(false)
let navigate = useNavigate()

  function getuserdata(e){
    let currentUser ={...User};
    currentUser[e.target.name]=e.target.value;
    setUser(currentUser)
  }
  function validateUser(){
    let schema = Joi.object({
      first_name: Joi.string().min(3).max(10).required().messages({
        "string.empty":"first name is required" ,
        "string.min":"first name length must be at least 3 characters long",
        "string.max":"first name length must be less than or equal to 10 characters long"
      }),
      last_name: Joi.string().min(3).max(10).required().messages({
        "string.empty":"last name is required" ,
        "string.min":"last name length must be at least 3 characters long",
        "string.max":"last name length must be less than or equal to 10 characters long"

      }),
      age:Joi.number().min(16).required().messages({"number.base":"age is required"}),

      email:Joi.string().required().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).messages({"string.empty":"email is required"}),
      password:Joi.string().required().pattern(new RegExp(/^^[a-zA-Z0-9]{3,10}$/)).messages({"string.empty":"password is required"})
    })
    let validation = schema.validate(User, {abortEarly:false})
    console.log(validation);

    if (validation.error){
      setvalidateError(validation.error.details)
      return false
    }else{
      return true
    }
  }
 async function saveUser(e){
  e.preventDefault();
  if(  validateUser()  ){
    setloading(true)
    let {data} = await axios.post(`https://route-movies-api.vercel.app/signup` , User);

    console.log(data);
if(data.message === "success")
{
 navigate("/login");
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
    <h1 className="mb-4">Registeration Form</h1>
    {apiError && <div className='alert alert-danger'>{apiError}</div>}
<form  >
<div className="form-group mb-3" > 
        <label htmlFor="first_name">First Name </label>
        <input type="text" className={validateError.filter((element)=>element.context.label === "first_name")[0] ? " is-invalid form-control":"form-control  "} name='first_name' id="first_name" onChange={e=>{getuserdata(e)}} />
        <div className='validation text-danger'>
{validateError.filter((element)=>element.context.label === "first_name" )[0]?.message}
        </div>
    </div>
    <div className="form-group mb-3">
        <label htmlFor="last_Name">last Name</label>
        <input type="text" className={validateError.filter((element)=>element.context.label === "first_name")[0] ? " is-invalid form-control":"form-control  "} name='last_name' id="last_name" onChange={e=>{getuserdata(e)}}/>
        <div className='validation text-danger'>
{validateError.filter((element)=>element.context.label === "last_name" )[0]?.message  }
        </div>
    </div>
    <div className="form-group mb-3">
        <label htmlFor="age">Age</label>
        <input type="number" className={validateError.filter((element)=>element.context.label === "age")[0] ? " is-invalid form-control":"form-control  "} name='age' id="age" onChange={e=>{getuserdata(e)}}/>
        <div className='validation text-danger'>
{validateError.filter((element)=>element.context.label === "age" )[0]?.message}
        </div>
    </div>
    <div className="form-group mb-4">
        <label htmlFor="email">Email</label>
        <input type="email" className={validateError.filter((element)=>element.context.label === "email")[0] ? " is-invalid form-control":"form-control  "} name='email' id="email" onChange={e=>{getuserdata(e)}}/>
        <div className='validation text-danger'>
{validateError.filter((element)=>element.context.label === "email" )[0]?.message}
        </div>
    </div>
    <div className="form-group mb-4">
        <label htmlFor="password">Password</label>
        <input type="password" className={validateError.filter((element)=>element.context.label === "password")[0] ? " is-invalid form-control":"form-control  "} name='password' id="password" onChange={e=>{getuserdata(e)}} />
        <div className='validation text-danger'>
{validateError.filter((element)=>element.context.label === "password" )[0]?.message}
        </div>
    </div>
    <button onClick={(e)=>{ saveUser(e)}}  className="btn btn-outline-primary">{loading ?<i className='fa fa-spinner fa-spin'></i>:"SignUp"}</button>

</form>
    
    </div>  )
}

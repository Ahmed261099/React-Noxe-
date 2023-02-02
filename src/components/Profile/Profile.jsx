import React from 'react'
import img from './551-5510463_default-user-image-png-transparent-png.png'

export default function Profile({userData}) {
    console.log(userData.email);
  return (
<div className=" container   py-5" >
<div className="row d-flex justify-content-center align-items-center flex-column ">
    <div className="col-md-12 w-75 d-flex justify-content-center align-items-center flex-column  text-center">
    <h1  >welcome <span className='colored'>{userData.first_name}</span></h1>
    <img src={img} className="w-25 rounded-2 mb-3" alt="" />
    <div class="card-body  ">
    <div className='d-flex align-items-center mb-2'>
    <i class="fa-solid fa-user pe-2"></i>
        <h3 className='fs-5 mb-0'>{userData.first_name } {userData.last_name}</h3>   
    </div>
    <div className='d-flex align-items-center mb-2'>
    <i class="fa-solid fa-envelope pe-2"></i>
            <h3 className='fs-5  mb-0 '>{userData.email} </h3>   
    </div>
    </div>
</div>
 
        </div>
        </div>
  )
}

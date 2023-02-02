import React from 'react'
import { Link } from 'react-router-dom'
import img from './Untitled2.png'
import img2 from './mobile-0819.jpg'
export default function Start() {
  return (
    <>
    <div className='front '>
<div className="overlay w-100 h-100 bg-black bg-opacity-50 d-flex flex-column align-items-center justify-content-center ">
<h1 className=' fw-bolder '>Watch Your Favourite Movies and Series</h1>
<p>Unlimited movies, TV shows, and more.</p>

<div className='d-flex'>
<Link className="nav-link  btn signin me-3  px-5 py-2 shadow-sm" aria-current="page" to="login">Login</Link>


<Link className="nav-link btn signup   px-3 py-2 " aria-current="page" to="register">Register</Link>
</div>
</div>

 </div>
 <div className='py-5 mb-5 '>
    <div className="container">
<div className="">
<div className="row   d-flex ">
    <div className="col-md-6 d-flex">
    <div className='d-flex flex-column justify-content-center'>
<h1 className='fw-bolder ' >Enjoy on your TV.</h1>
<p className='fs-5'>Watch on Smart TVs, Playstation,  Xbox, <br /> Chromecast, Apple TV, Blu-ray players, and more.</p>
</div>
    </div>
    <div className="col-md-6 ">
    <img className='noxeimg w-100 shadow-sm' src={img} alt="" />

    </div>
</div>
</div>
    </div>
 </div>
 <div className='py-5 bg-black'>
    <div className="container">
<div className="">
<div className="row   d-flex ">
<div className="col-md-6 ">
    <img className='noxeimg w-100' src={img2} alt="" />

    </div>
    <div className="col-md-6 d-flex">
    <div className='d-flex flex-column justify-content-center'>
<h1 className='fw-bolder ' >Download your shows <br /> to watch offline.</h1>
<p className='fs-5'>Save your favorites easily and always have something to watch.</p>
</div>
    </div>
  
</div>
</div>
    </div>
 </div>
    </>
  )
}

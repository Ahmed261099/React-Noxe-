import React from 'react'
import { NavLink } from 'react-router-dom'
export default function Navbar({userData,logOut}) {
  return (
<nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 bg-opacity-50">
  <div className="container-fluid">
    <NavLink className="navbar-brand fw-bolder" exact='' to='/' >NO<span className='colored fw-bolder'>XE</span></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
{ userData ? <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link " aria-current="page" to="home">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link " aria-current="page" to="movies">Movies</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link " aria-current="page" to="tvShows">Tv Shows</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link " aria-current="page" to="People">People</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link  " aria-current="page" to="Search">Search</NavLink>
        </li>
        
      </ul>:""}
<div className=' d-flex'>
 

      <ul className="navbar-nav ms-lg-auto me-sm-auto mb-2 mb-lg-0 me-2">
       
   
   
   {userData ?<>
    <li className="nav-item">
          <span className="nav-link " aria-current="page" onClick={logOut} >Logout</span>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link colored fw" aria-current="page" to="Profile">{userData.first_name}</NavLink>

        </li>
   </>
        
        : <>
        <li className="nav-item">
          <NavLink className="nav-link " aria-current="page" to="register">Register</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link  fw-bolder" aria-current="page" to="login">Login</NavLink>
        </li>
        </>}
   
        
      </ul>
</div>
    </div>
  </div>
</nav>  )
}

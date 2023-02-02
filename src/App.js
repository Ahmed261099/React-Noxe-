import './App.css';
import {  RouterProvider, Navigate, createHashRouter  } from 'react-router-dom';
import Mainlayout from './components/Mainlayout/Mainlayout';
import Home from './components/Home/Home';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Movies from './components/Movies/Movies';
import TvShows from './components/TvShows/TvShows';
import People from './components/People/People';
import Search from './components/Search/Search';
import Profile from './components/Profile/Profile';
import NotFound from './components/NotFound/NotFound';
import Start from './components/Start/Start.jsx';
import MovieDetails from './components/MovieDetails/MovieDetails';
import { useEffect, useState } from 'react';
import jwt_Decode from 'jwt-decode';


export default function App() {
  let [userData,setuserData] = useState(null)
  function saveuser(){
let token = localStorage.getItem("token");
let decoded =   jwt_Decode(token)
setuserData(decoded);
  }
  function ProtectedRoute(props){
if(localStorage.getItem("token")){
  return props.children
}else{
  return <Navigate to="/login"/>
}
  }
  function logOut(){
    localStorage.removeItem("token")
    setuserData(null)
    return <Navigate to="/login"/>

  }
  useEffect(()=>{
    if(localStorage.getItem("token")){
      saveuser()
    }
  },[])
  const routers =  createHashRouter([

    {path:'/',element:<Mainlayout userData={userData} logOut={logOut}/>,children:[
      {path:'/',element : <Start/>},

      {path:'home',element :<ProtectedRoute><Home/></ProtectedRoute> },
      {path:'register',element :<Register/>},
      {path:'login',element: <Login saveuser={saveuser}/>},
      {path:'movies',element:<ProtectedRoute><Movies/></ProtectedRoute> },
      {path:'tvShows',element:<ProtectedRoute><TvShows/></ProtectedRoute> },
      {path:'People',element:<ProtectedRoute><People/></ProtectedRoute> },
      {path:'Profile',element:<ProtectedRoute><Profile userData={userData}/></ProtectedRoute> },
      {path:'Search',element:<ProtectedRoute><Search/></ProtectedRoute> },
      {path:'*',element: <NotFound/>},
  {path:'Details/:id/:type',element:<ProtectedRoute><MovieDetails/></ProtectedRoute> }
  
    ]}
  ])
  return (
    <>
    <RouterProvider router={routers}> </RouterProvider>

    </>
  )
}


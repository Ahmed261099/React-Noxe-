import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Item from '../Item/Item';
import Loading from '../Loading/Loading';

export default function Movies() {
  console.log();
let [tv,setTv]= useState([])
let [isloading,setisLoading]= useState(true)

async  function gettrinding(pageNumber) {
 let {data} =   await axios.get(`https://api.themoviedb.org/3/trending/tv/day?api_key=f8da90800ac06cd2e52f7c328051a6cd&page=${pageNumber}`) 
 setTv(data.results)
 setisLoading(false)

   }
   useEffect(() => {
    gettrinding(1)
  
  },[])
let pagenumbers=new Array(10).fill("h").map((ele,i)=>i+1)

function pagesnum(pages) {
  setisLoading(true)

  gettrinding(pages)
}
  return (
 <>
 <div className="container py-5 ">
 {isloading && <Loading/>}
 {!isloading && <> <div className="row mb-4">
  
  {tv?.map(movie =><Item key={movie.id} data={movie}/> )}
    </div></>}
    <nav aria-label="Page navigation example   py-5">
  <ul className="pagination justify-content-center">
    {pagenumbers.map((ele)=><li key={ele} className="page-item" onClick={()=>pagesnum(ele)}><a className="page-link" >{ele}</a></li>
)}


  </ul>
</nav>

 </div>
 <>


</>
</>
  )
}

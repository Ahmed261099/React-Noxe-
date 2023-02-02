import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Item from '../Item/Item';
import Loading from '../Loading/Loading';

export default function Movies() {
  console.log();
let [movies,setMovies]= useState([])
let [isloading,setisLoading]= useState(true)

useEffect(() => {
  gettrinding(1)

},[])
async  function gettrinding( pageNum ) {
 let {data} =   await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=f8da90800ac06cd2e52f7c328051a6cd&page=${pageNum}&`) 
 setMovies(data.results)
 setisLoading(false)

   }
   

let pagenumbers=new Array(10).fill("h").map((elem,i)=>i+1)
function pagsenum(pages) {
  setisLoading(true)

  console.log(pages);
  gettrinding(pages)
}

  return (
 <>
 <div className="container py-5">
 
 {isloading && <Loading/>}
 {!isloading && <>
  <div className="row mb-4">
  <div className="col-md-12">

  </div>
  {movies?.map(movie =>< Item  key={movie.id} data={movie}/> )}
    </div>
  
 
 </>}
 <nav aria-label="Page-navigation example">
  <ul className="pagination justify-content-center">
    {pagenumbers.map((el,i)=>    <li key={el} className="page-item" onClick={()=>pagsenum(el)}><a className="page-link">{el}</a></li>
)}


  </ul>
</nav>
 </div>
 <>


</>
</>
  )
}

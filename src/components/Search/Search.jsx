
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Item from '../Item/Item';
import Loading from '../Loading/Loading';

export default function Movies() {
  console.log();
let [movies,setMovies]= useState([])
let [isloading,setisLoading]= useState()

useEffect(() => {

},[])
async function search (e){
  setisLoading(true)
  let value = e.target.value;
  console.log(value);
  let {data} = await axios.get(` https://api.themoviedb.org/3/search/multi?api_key=f8da90800ac06cd2e52f7c328051a6cd&language=en-US&query=${value}&page=1&include_adult=false `)
  console.log(movies);
  setMovies(data.results)
  setisLoading(false)

 }


  return (
    
 <div className="container py-5">
   <div className="row mb-4">
  <div className="col-md-12">
  <div className='d-flex search mb-3  align-items-center justify-content-center'>
    <input type="text" className='form-control-plaintext rounded-3 border-0 me-4  w-50 px-3 ' onChange={search} placeholder='Search..' />
  </div>
  </div>
  {isloading && <Loading/>}
  {!isloading && <>  {movies?.map(movie => movie.poster_path &&<Item key={movie.id} data={movie}/>)}
</>}

    </div>
    </div>

 



  )
}

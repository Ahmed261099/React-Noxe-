import React, { useEffect, useState }  from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import Loading from '../Loading/Loading';

import { useParams } from 'react-router-dom'

export default function MovieDetails() {
 
  let [details,setdetails]= useState(null)
  let [actors,setactors]= useState(null)
  let [isloading,setisLoading]= useState(true)

  let {id,type} = useParams()

async  function getdetails() {
 let {data} =   await axios.get(`https://api.themoviedb.org/3/${type}/${id}?api_key=f8da90800ac06cd2e52f7c328051a6cd&language=en-US`) 
 setdetails(data)
 setisLoading(false)

//console.log(details);
   }
   async  function getactors() {
    let {data} =   await axios.get(`https://api.themoviedb.org/3/${type}/${id}/credits?api_key=f8da90800ac06cd2e52f7c328051a6cd&language=en-US`) 
    setactors(data.cast)

    //console.log(actors);
      }
useEffect(() => {
  getdetails()
  getactors()
},)
  return (
    <>
    <div className="container py-5">
    {isloading && <Loading/>}
    {!isloading && <>
      <div className="row">
        <div className="col-md-3">
        <img src={"https://image.tmdb.org/t/p/w500" + details?.poster_path} className="w-100 rounded-2" alt="" />
        <img src={"https://image.tmdb.org/t/p/w500" +details?.profile_path } className="w-100 rounded-2" alt="" />

        </div>
        <div className="col-md-9 pt-1">
    <h1 className=''>{details?.original_title} {details?.name}</h1>
    <p className=''>{details?.tagline}</p>
    <ul className='list-unstyled d-flex w-100'>
      {details?.genres?.map((gener,index)=>(
        <div key={index}  className=' p-2 rounded-2 mx-3 disc'>{gener.name}</div>
      ))}
    </ul>
    {details?.vote_average &&<>
      <p className=''> Vote  :  {details?.vote_average}    <i class="fa-solid fa-star star pe-1 "></i>
</p>
    </>}   
    {details?.release_date &&<p>Release date : {details?.release_date}</p>}{details?.first_air_date && <p>Release date : {details?.first_air_date}</p>} 
    {details?.number_of_seasons &&<p>number of seasons : {details?.number_of_seasons}</p>}
    {details?.birthday &&<p>birthday date :{details?.birthday}</p>}
    {details?.deathday &&<p>death day date :{details?.deathday}</p>}

    {details?.place_of_birth && <p className='pt-2'>place of birth:  {details?.place_of_birth}</p>}    

    <ul className='list-unstyled d-flex w-100 '>
    
  {details.also_known_as?  <p className='pt-2'>also known as:</p>:""}    
      {details?.also_known_as?.slice(0,2).map((mov,index)=>(
        <div key={index}   className=' p-2 rounded-2 mx-3 disc'>{mov}</div>
      ))}
    </ul>
    <p>{details?.biography?.slice(0,700)}</p>
    <p className='fs-4'>{details?.overview}</p>
    <p></p>
    {!details?.profile_path&& <p>Actors:</p> }
    <div className='d-flex'>

    {actors?.slice(0,4).map(actor =><>
    <div  key={actor.id} className=''>
    <Link to={`/Details/`+actor.id+`/person`}>
    {isloading && <Loading/>}

    <img src={"https://image.tmdb.org/t/p/w500" + actor?.profile_path} className="w-75 rounded-3 mb-1" alt="" />
    </Link> 

      <h4 className='fs-6'>{actor?.name}</h4>
    </div>

    </> )}
    </div>
        </div>
      </div>
  
 
    </>}
    
    </div>
    </>
)
}

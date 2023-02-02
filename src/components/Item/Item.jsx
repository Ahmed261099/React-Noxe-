import React from 'react'
import './item.css' 
import { Link } from 'react-router-dom'
export default function Item({data}) {
  return (
  
     <div className="col-md-2 mb-1 position-relative">
          <Link to={`/Details/`+data.id+`/`+data?.media_type}> 
      <img src={"https://image.tmdb.org/t/p/w500" + data.poster_path } className="w-100" alt="" />
      <img src={"https://image.tmdb.org/t/p/w500" +data.profile_path } className="w-100" alt="" />

      </Link>
 
      <h4 className='fs-6 mb-0'>{data.title} {data.name}</h4>
      <div className='d-flex align-items-center position-absolute item-vote bg-white fw-bolder p-1'>
        {data?.vote_average && <>
          <i class="fa-solid fa-star star pe-1 " ></i>
          <p className='mb-0 star '>{data?.vote_average?.toFixed(1)}</p>

        </>}   
        {!data.vote_average && null}   

      </div>
    </div> 
    )
}

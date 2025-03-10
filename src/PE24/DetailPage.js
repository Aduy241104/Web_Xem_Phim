import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { News } from './news'

function DetailPage() {
  const { id } = useParams();

  const Content =  News.find((item) => {
    return item.id == id;
  });

  console.log(Content);
  

  return (
    <div className='detail-layout'>
      <Link className='btn btn-md cv' to={'/'}>
        <span>Back to Home Page</span>
      </Link>
      <img src={ Content.image } alt="" />
      <h5>{ Content.title }</h5>
      <p>{ Content.description }</p>
     
    </div>
  )
}

export default DetailPage
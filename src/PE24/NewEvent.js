import React from 'react'
import { Link } from 'react-router-dom'

function NewEvent(props) {
  return (
    <div className='col-lg-4' style={{position:'relative'}} >
      <div className='newsss'>
        <img src={ props.content.image } alt="" />
        <div className='text-center' style={{height:'30%', padding:'2px 10px'}}>
          <p className='name-new'>{props.content.title}</p>
          <p className='line-clamp '>{ props.content.description }</p>

          
        </div>
        <div className='nmt'>
          <Link to={ `/news/${props.content.id}` } className='btn btn-md detail-button'>
            <span>Detail</span>
          </Link>
        </div>
      </div>

      <div className='flut-section'>
        <span>{ props.content.date }</span>
        <span>Leave a comment</span>
      </div>
    </div>
  )
}

export default NewEvent
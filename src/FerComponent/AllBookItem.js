import React from 'react'
import { Link } from 'react-router-dom'


function AllBookItem(props) {
  return (
    <div className='col-lg-3 layout-3'>
      <img src={ props.linkUrlImg } alt="" />
      <div className='description-book'>
        <p>{ props.year }</p>
        <h5 className='line-clamp' ><Link to={`/DescriptionPage/${props.id}`} style={ { textDecoration: 'none' } }>{props.title}</Link></h5>
        <p>{ props.genre }</p>
        <p>Director: { props.director }</p>
      </div>
    </div>
  )
}

export default AllBookItem
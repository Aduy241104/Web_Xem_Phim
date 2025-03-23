import React from 'react'
import { Link } from 'react-router-dom'

function CategoryMovie({ id, imgUrl, title }) {

  return (
    <div className='col-lg-2 text-center'>
      <img className='rounded-1 mb-2' style={ { width: '100%', height: '280px' } } src={ imgUrl } alt="" />
      <Link to={ `DescriptionPage/${id}` } style={ { color: 'white', textDecoration: 'none' } }>{ title }</Link>
    </div>
  )
}

export default CategoryMovie
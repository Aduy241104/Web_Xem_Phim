import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function CategoryMovie({ id, imgUrl, title }) {

  return (
    <div className='col-lg-2 text-center'>
      <img className='rounded-1 mb-2' style={ { width: '100%', height: '280px' } } src="https://s.movieinsider.com/images/p/600//453711_m1497313466.jpg" alt="" />
      <Link to={ `DescriptionPage/${id}` } style={ { color: 'white', textDecoration: 'none' } }>SpiderMan: Homecoming</Link>
    </div>
  )
}

export default CategoryMovie
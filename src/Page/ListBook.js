import React, { useEffect, useState } from 'react'
import AllBookItem from '../FerComponent/AllBookItem'
import { Link } from 'react-router-dom';
// import data from '../Movie.json'


function ListBook() {

  const [data, setData] = useState([]);

  useEffect(() => {

    fetch('http://localhost:5000/tv_series?_limit=6')
      .then(res => res.json())
      .then(rs => setData(rs));

  }, [])

  return (
    <div className='container-fluid' style={ { backgroundColor: 'black' } }>
      <div className='row p-4'>
        <h5 style={ { color: 'white', paddingBottom: '32px', paddingTop: '30px' } }>Xem gì tiếp theo</h5>

        <div className='col-lg-12 row'>
          { data.map((item) => {
            return (
              <AllBookItem
                key={ item.id }
                id={ item.id }
                title={ item.title }
                year={ item.year }
                genre={ item.genre }
                linkUrlImg={ item.linkUrlImg }
                director={ item.director }
              />
            )
          }) }
        </div>
      </div>
      <div className='text-center'>
        <Link to={ '/AllMovie' } className='text-center btn btn-warning'>Xem tất cả <i class="fa-solid fa-arrow-right"></i></Link>
      </div>
    </div>
  )
}

export default ListBook
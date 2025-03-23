import React, { useEffect, useState } from 'react'
import NewBookItem from './NewBookItem'

function NewBook() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/tv_series?_sort=id&_order=desc&_limit=5')
      .then(res => res.json())
      .then(rs => setData(rs));

  }, [])

  return (
    <div className='layout-2'>
      <div className='row content-new mb-4'>
        <div className='col-lg-3 col-md-2 text-end'>
          <img className='mt-2' src="https://waka.vn/svgs/icon-blur-star-left.svg" alt="" />
        </div>
        <h2 className='text-center col-lg-6 col-md-8'>Phim Mới Nhất, Vừa Được Ra Mắt</h2>
        <div className='col-lg-3 col-md-2 text-start'>
          <img className='mt-2' src="https://waka.vn/svgs/icon-blur-star-right.svg" alt="" />
        </div>
      </div>


      <div className='row justify-content-center mt-4'>
        { data.map((item) => {
          return (
            <NewBookItem
              imgUrl={ item.linkUrlImg }
              title={ item.title }
            />
          )
        }) }
      </div>
      <img className='image' src="https://307a0e78.vws.vegacdn.vn/view/v2/image/img.media/uploads/shop/shipper/Freeship.png" alt="" />
    </div>
  )
}

export default NewBook
import React from 'react'
import { Link } from 'react-router-dom'

function IntroComponent() {
  return (
    <div className='container-fluid'>
      <div className='col-lg-5 p-4'>
        <h1 style={ { fontWeight: '700' } }>Phim</h1>
        <p style={ { margin: '0' } }>Phim ảnh lay động chúng ta theo một cách rất riêng, dù cho đó là phim đáng sợ, hài hước, bi ai,
          lãng mạn hay dung hòa giữa các yếu tố đó.
          Thật nhiều nội dung, thật nhiều cơ hội trải nghiệm.
        </p>
        <Link className='m-3 bnt'><i class="fa-solid fa-play"></i> Xem Ngay</Link>
      </div>
    </div>
  )
}

export default IntroComponent
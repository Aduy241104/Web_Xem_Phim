import React from 'react'
import NewEvent from './NewEvent'
import {News} from './news'


function HomePage() {
  return (
    <div>
      <header className='text-center header-page'>
        <h5>PHÒNG QUAN HỆ DOANH NGHIỆP</h5>
        <h5>ĐẠI HỌC FPT CẦN THƠ</h5>
      </header>

   
        <div id="carouselExampleIndicators" className="carousel slide layout-carou">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img  src="img/Banner_1.jpg" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="img/Banner_2.png" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="img/Banner_3.png" className="d-block w-100" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <div className='row new-section'>
          <h3 className='col-xs-12 text-center p-5'>TIN TỨC & SỰ KIỆN</h3>
          <div className='row new-content'>
            {News.map((item) => {
              return (
                <NewEvent
                   content = {item}
                />
          
              )
            })}
            

          </div>


        </div>
     


    </div>
  )
}

export default HomePage
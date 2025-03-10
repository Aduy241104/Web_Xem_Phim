import React, { useEffect, useState } from 'react'
import AllBookItem from '../FerComponent/AllBookItem'
import NewBookItem from '../FerComponent/NewBookItem'
import CategoryMovie from '../FerComponent/CategoryMovie'

function ListMovieByGenre({ genre }) {
    const [data, setData] = useState([]);

    useEffect(() => {
        

    }, [])
    return (
        <div className='p-5' style={ { backgroundColor: 'black' } }>
            <h5 style={ { marginLeft: '123px' } }>Phim siêu anh hùng</h5>
            <div id="carouselExampleIndicators2" className="carousel slide layout-carou">
                <div className="carousel-indicators">
                    <button style={ { display: 'none' } } type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button style={ { display: 'none' } } type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button style={ { display: 'none' } } type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className='row justify-content-center mt-4'>
                            <CategoryMovie />
                            <CategoryMovie />
                            <CategoryMovie />
                            <CategoryMovie />
                            <CategoryMovie />
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className='row justify-content-center mt-4'>
                            <CategoryMovie />
                            <CategoryMovie />
                            <CategoryMovie />
                            <CategoryMovie />
                            <CategoryMovie />
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className='row justify-content-center mt-4'>
                            <CategoryMovie />
                            <CategoryMovie />
                            <CategoryMovie />
                            <CategoryMovie />
                            <CategoryMovie />
                        </div>

                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>

                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                </button>
            </div>

        </div>
    )
}

export default ListMovieByGenre
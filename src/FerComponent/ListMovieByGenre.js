import React, { useEffect, useState } from 'react'
import CategoryMovie from './CategoryMovie'

function ListMovieByGenre({ genre, num }) {
    const [data, setData] = useState([]);

    function chunkArray(arr, size) {
        const result = [];
        for (let i = 0; i < arr.length; i += size) {
            result.push(arr.slice(i, i + size));
        }
        return result;
    }

    useEffect(() => {
        fetch(`http://localhost:5000/tv_series?_limit=15&genre=${genre}`)
            .then(res => res.json())
            .then(rs => {

                const splitArray = chunkArray(rs, 5);
                console.log(splitArray[0]);
                console.log(typeof data);

                splitArray[0].map(element => {
                    console.log(element.id);

                });


                setData(splitArray)
            })
    }, [])



    return (
        <div className='p-5' style={ { backgroundColor: 'black' } }>
            <h5 style={ { marginLeft: '123px' } }>Phim { genre }</h5>
            <div id={`carouselExampleIndicators22${num}`} className="carousel slide layout-carou">
                <div className="carousel-indicators">
                    <button style={ { display: 'none' } } type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button style={ { display: 'none' } } type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button style={ { display: 'none' } } type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className='row justify-content-center mt-4'>
                            {
                                (data.length == 0) ? 'true' : (
                                    data[1].map((item) => {
                                        return (
                                            <CategoryMovie
                                                id={ item.id }
                                                imgUrl={ item.linkUrlImg }
                                                title={ item.title }
                                                key={ item.id }
                                            />
                                        )
                                    })
                                )
                            }

                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className='row justify-content-center mt-4'>
                            {
                                (data.length == 0) ? 'true' : (
                                    data[0].map((item) => {
                                        return (
                                            <CategoryMovie
                                                id={ item.id }
                                                imgUrl={ item.linkUrlImg }
                                                title={ item.title }
                                                key={ item.id }
                                            />
                                        )
                                    })
                                )
                            }
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className='row justify-content-center mt-4'>
                            {
                                (data.length == 0) ? 'true' : (
                                    data[2].map((item) => {
                                        return (
                                            <CategoryMovie
                                                id={ item.id }
                                                imgUrl={ item.linkUrlImg }
                                                title={ item.title }
                                                key={ item.id }
                                            />
                                        )
                                    })
                                )
                            }
                        </div>

                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target={`#carouselExampleIndicators22${num}`} data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>

                </button>
                <button className="carousel-control-next" type="button" data-bs-target={ `#carouselExampleIndicators22${num}` } data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                </button>
            </div>

        </div>
    )
}

export default ListMovieByGenre
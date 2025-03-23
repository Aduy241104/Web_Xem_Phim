import React, { useEffect, useState } from 'react'
import AllMovieItem from '../FerComponent/AllMovieItem';

function AllMovie() {
    const [data, setData] = useState([]);

    const handleLoadData = () => {
        fetch('http://localhost:5000/tv_series')
            .then(res => res.json())
            .then(rs => setData(rs));
    }

    useEffect(() => {
        handleLoadData();
    }, []);

    return (
        <div className='container-fluid' style={ { marginTop: '120px'} }>
            <div className='row'>
                { data.map((item) => {
                    return (
                        <AllMovieItem
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
    )
}

export default AllMovie
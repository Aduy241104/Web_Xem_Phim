import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import '../watchMovie.css'

function WatchMovie() {
    const [data, setData] = useState([]);
    const [currentChapter, setChapter] = useState({})
    const [currentIndex, setIndex] = useState(1);
    const { movieID } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/tv_series?id=${movieID}`)
            .then(res => res.json())
            .then(rs => {
                setChapter(rs[0].episodes[0])
                setData(rs[0].episodes)
            }
            );
    }, [movieID]);


    function handleChangeChapter(number) {
        const newChap = data.find((item) => item.episode == number)
        setChapter(newChap);
        setIndex(number)
    }

    return (
        <div className='container-fluid' style={ { marginTop: "140px" } }>
            <div className='row'>
                <div className='col-lg-9 col-md-12 play-movie'>
                    <iframe className='movie-layout mb-5'
                        src={ currentChapter.linkUrl }
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen="true">
                    </iframe>

                    <div className='text-end bth'>
                        <button>Xem tiếp <i class="fa-solid fa-arrow-right"></i></button>
                    </div>

                    <div>
                        <h4 className='title'>Tập { currentChapter.episode }: { currentChapter.title }</h4>
                        <p className='duration'>Thời lượng: { currentChapter.duration }</p>
                    </div>
                </div>

                <div className='col-lg-3 col-md-12'>
                    <ul className='chapter-section'>
                        { data.map((item) => {
                            return (
                                <li
                                    className={ (currentIndex == item.episode ? 'activess' : '') }
                                    onClick={ () => handleChangeChapter(item.episode) }
                                >
                                    { item.episode }
                                </li>
                            )
                        }) }
                    </ul>
                </div>

                <div className='col-lg-9 comment-place'>
                    <div className='content-comment'>
                        <h5>Đánh giá: <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></h5>
                        <p>Bình Luận(0)</p>
                    </div>
                    <div className='text-center'>
                        <img src="https://waka.vn/images/comment-empty.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WatchMovie
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import '../DetailPage.css'
import ModalTrailer from '../FerComponent/ModalTrailer';


function DescriptionPage() {
    const { id } = useParams();
    const [movie, setMovie] = useState({});



    useEffect(() => {
        window.scrollTo(0, 0);
        fetch(`http://localhost:5000/tv_series?id=${id}`)
            .then(res => res.json())
            .then(res => setMovie(res[0]));

    }, [])


    return (
        <div className='hjk'>
            <div style={ {  position: 'relative' } } className='container'>
                <div className='row'>
                    <div className='col-lg-4 col-md-12 image-movie'>
                        <img src={ movie.linkUrlImg } alt="" />
                    </div>
                    <div className='col-lg-6 col-md-12'>
                        <h1>{ movie.title }</h1>
                        <h5>Năm phát hành: { movie.year }</h5>

                        <div className='row mt-4 cx'>
                            <p className='row col-lg-6 ct'>
                                <span>Tác giả</span>
                                <span>{ movie.director }</span>
                            </p>
                            <p className='row col-lg-6 ct'>
                                <span>Thể loại</span>
                                <span>{ movie.genre }</span>
                            </p>

                            <p className='row col-lg-6 ct'>
                                <span>Trạng Thái</span>
                                <span>Đang cập nhật...</span>
                            </p>
                        </div>


                        <div className='bhg'>
                            <Link to={`/WatchMovie/${id}`} className='button-watch'><i class="fa-solid fa-circle-play"></i> Xem Ngay</Link>
                            <ModalTrailer
                                LinkTrailer={ movie.linkTrailer }
                                className='button-watch'
                            />
                        </div>
                        <div>
                            <h3>Mô Tả</h3>
                            <p>Một vụ án mất tích và giết người hàng loạt chưa được giải quyết đã gây ra ảnh hưởng vô cùng tiêu cực đến xã hội, đẩy thành phố nhỏ Phong Hà vào tâm điểm của dư luận. Cục Cảnh sát thành phố Phong Hà không còn cách nào khác phải yêu cầu tổ điều tra đặc biệt tham gia phá án.

                                Sau khi vụ án này được giải quyết, Diệp Trúc - một thành viên của đại đội chuyên án nhận được lời mời hợp tác từ tổ điều tra đặc biệt.

                                Diệp Trúc vừa sống lại và đang hoang mang: Tại sao lại là tôi?

                                Ngôn Vũ: Tổ thiếu xe tăng hình người.

                                Diệp Trúc: …

                                ***

                                Kiếp trước, khi đang làm nhiệm vụ, Diệp Trúc và đồng nghiệp bị một tội phạm vô danh sát hại. Sống lại lần nữa, cô tình cờ được mời gia nhập tổ điều tra đặc biệt trong truyền thuyết.

                                Nhìn góc nghiêng của đội trưởng Ngôn Vũ, cô hài lòng nghĩ: Có chỗ dựa lớn, biết đâu kiếp này không chỉ bảo vệ được mình và đồng đội, mà còn có thể đưa lũ tội phạm hèn mọn kia ra ánh sáng công lý.

                                Tuy nhiên, sự ngưỡng mộ đối với “Ngôn đại thần” mà người trong nghề vẫn truyền tai chỉ kéo dài vài giây, bởi một cuộc đối thoại…

                                Tổ viên: Tại sao anh gọi Diệp Trúc là xe tăng?

                                Ngôn Vũ: Dời được núi, lấp được biển, đi đến đâu cỏ rạp đến đó, quan trọng là chịu đòn giỏi.

                                Waka trân trọng giới thiệu bộ truyện Tổ điều tra đặc biệt - tác giả Từ Tiểu Miêu.</p>
                        </div>
                    </div>


                </div>

            </div>
        </div>
    )
}

export default DescriptionPage
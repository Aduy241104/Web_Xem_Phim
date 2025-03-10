import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className='container-fluid layout-1' style={ { position: 'fixed', zIndex: '2', top: "0" } }>


            <div className='row align-items-center header-part-2'>
                <div className='col-lg-3 col-md-4 col-12 text-center banner-header'>
                    <img src="https://www.justwatch.com/appassets/img/logo/JustWatch-logo-large.webp" alt="" className="img-fluid" />
                </div>

                <div className='col-lg-5 col-md-4 col-12 option-header text-center'>
                    <ul className="list-inline m-0">
                        <li className="list-inline-item px-3">
                            <Link to={ '/' }><span><i class="fa-solid fa-house fa-beat-fade"></i> Trang chủ</span></Link>
                        </li>
                        <li className="list-inline-item px-3">
                            <Link><span>About Us</span></Link>
                        </li>
                        <li className="list-inline-item px-3">
                            <Link><span>Contact</span></Link>
                        </li>
                        <li className="list-inline-item px-3">
                            <Link><span>Author</span></Link>
                        </li>
                    </ul>
                </div>

                <div className='col-lg-4 col-md-4 col-12 search-header'>
                    <input type="text" className="form-control" placeholder="Search..." />
                    <Link className='login-btn'>Đăng nhập</Link>
                </div>
            </div>
        </div>

    )
}

export default Header
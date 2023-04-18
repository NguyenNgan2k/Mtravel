import React from 'react';
import IgI1 from "assets/img/i1.jpg"
import IgI2 from "assets/img/i2.jpg"
import IgI3 from "assets/img/i3.jpg"
import IgI4 from "assets/img/i4.jpg"
import IgI5 from "assets/img/i5.jpg"
import IgI6 from "assets/img/i6.jpg"
import IgI7 from "assets/img/i7.jpg"
import IgI8 from "assets/img/i8.jpg"

const DefaultFooter: React.FunctionComponent = () => {
    return (
        <footer className="footer-area section-gap">
            <div className="container">

                <div className="row">
                    <div className="col-lg-3  col-md-6 col-sm-6">
                        <div className="single-footer-widget">
                            <h6>About MTRAVEL</h6>
                            <p>
                                Gotadi.com là mạng đặt vé máy bay, khách sạn và tour du lịch đầu tiên tích hợp hệ thống chia sẻ thông tin du lịch dành riêng cho du khách Việt Nam. Với phương châm “Click là đi”, Gotadi.com nỗ lực trở thành một dịch vụ trực tuyến, nơi du khách chỉ với một số thao tác click chuột đơn giản có thể lên kế hoạch toàn diện cho chuyến đi của mình.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="single-footer-widget">
                            <h6>Navigation Links</h6>
                            <div className="row">
                                <div className="col">
                                    <ul>
                                        <li><a href="#">Trang chủ</a></li>
                                        <li><a href="#">Vé máy bay</a></li>
                                        <li><a href="#">Khách sạn</a></li>
                                        <li><a href="#">Tour</a></li>
                                    </ul>
                                </div>
                                <div className="col">
                                    <ul>
                                        <li><a href="#">Đặt xe</a></li>
                                        <li><a href="#">Khuyến mại</a></li>
                                        <li><a href="#">Tuyển dụng</a></li>
                                        <li><a href="#">Liên hệ</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3  col-md-6 col-sm-6">
                        <div className="single-footer-widget">
                            <h6>Thông tin ưu đãi</h6>
                            <p>
                                Đăng ký email để nhận ưu đãi và thông tin mới nhất về MTravel
                            </p>
                            <div id="mc_embed_signup">
                                <form target="_blank" action="" method="get" className="subscription relative">
                                    <div className="input-group d-flex flex-row">
                                        <input name="EMAIL" placeholder="Email của bạn" type="email" />
                                        <button className="btn bb-btn"><span className="lnr lnr-location"></span></button>
                                    </div>
                                    <div className="mt-10 info"></div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3  col-md-6 col-sm-6">
                        <div className="single-footer-widget mail-chimp">
                            <h6 className="mb-20">Ảnh hoạt động</h6>
                            <ul className="instafeed d-flex flex-wrap">
                                <li><img src={IgI1} alt="" /></li>
                                <li><img src={IgI2} alt="" /></li>
                                <li><img src={IgI3} alt="" /></li>
                                <li><img src={IgI4} alt="" /></li>
                                <li><img src={IgI5} alt="" /></li>
                                <li><img src={IgI6} alt="" /></li>
                                <li><img src={IgI7} alt="" /></li>
                                <li><img src={IgI8} alt="" /></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="row footer-bottom d-flex justify-content-between align-items-center">
                    <p className="col-lg-8 col-sm-12 footer-text m-0" style={{ color: '#fff' }}>
                        Copyright ©2023 - HBCom.
                    </p>
                    <div className="col-lg-4 col-sm-12 footer-social">
                        <a href="#"><i className="fa fa-facebook"></i></a>
                        <a href="#"><i className="fa fa-twitter"></i></a>
                        <a href="#"><i className="fa fa-dribbble"></i></a>
                        <a href="#"><i className="fa fa-behance"></i></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default DefaultFooter;

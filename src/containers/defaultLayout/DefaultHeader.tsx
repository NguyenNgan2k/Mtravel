import React, { useEffect, useState } from 'react';
import IgVietNam from 'assets/images/vietnam.png';
import { ReactComponent as IgLogo1 } from 'assets/images/logo/logo1.svg';
import { ReactComponent as IgLogo2 } from 'assets/images/logo/logo2.svg';

const DefaultHeader: React.FunctionComponent = () => {
	const [sticky, setSticky] = useState(false)

	useEffect(() => {
		window.addEventListener("scroll", handleStickyHeader);
		return () => {
			window.removeEventListener("scroll", handleStickyHeader);
		}
	})

	const handleStickyHeader = () => {
		if (window.pageYOffset > 100) {
			setSticky(true)
		} else {
			setSticky(false)
		}
	}

	return (
		<header id="header" className={sticky ? "header-scrolled" : ""}>
			<div className="header-top">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-4 col-sm-4 col-4 header-top-left">
							<ul>
								<li><a href="#">(84) 243 538 1029</a></li>
							</ul>
						</div>
						<div className="col-lg-8 col-sm-8 col-8 header-top-right">
							<div className="header-social">
								<a href="#"><i className="fa fa-registered"></i> Đăng ký</a>
								<a href="#"><i className="fa fa-user-o"></i> Đăng nhập</a>
								<a href="#"><img src={IgVietNam} height="16px" /></a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="container main-menu">
				<div className="row align-items-center justify-content-between d-flex">
					<div id="logo">
						<a href="index.html" className="large"><IgLogo1 height="50px" /></a>
						<a href="index.html" className="small"><IgLogo2 height="30px" /></a>
					</div>
					<nav id="nav-menu-container">
						<ul className="nav-menu">
							<li><a href="about.html">Giới thiệu</a></li>
							<li><a href="packages.html">Vé máy bay</a></li>
							<li><a href="hotels.html">Khách sạn</a></li>
							<li><a href="insurance.html">Tour</a></li>
							<li><a href="">Đặt xe</a></li>
							<li><a href="contact.html">Khuyến mại</a></li>
							<li><a href="contact.html">Tin tức</a></li>
							<li><a href="contact.html">CSKH</a></li>
							<li><a href="contact.html">Liên hệ</a></li>
						</ul>
					</nav>
				</div>
			</div>
		</header>
	)
}

export default DefaultHeader;

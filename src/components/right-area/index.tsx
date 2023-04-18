import React from "react";
import { CatProps } from "./type";
import IgCat1 from "assets/img/blog/cat-widget1.jpg";
import IgCat2 from "assets/img/blog/cat-widget2.jpg";
import IgCat3 from "assets/img/blog/cat-widget3.jpg";
import IgIcon1 from "assets/images/logo/icon4.svg";
import IgIcon2 from "assets/images/logo/icon5.svg";
import IgIcon3 from "assets/images/logo/icon6.svg";

const CatWidget: React.FunctionComponent<CatProps> = (props) => {
  const { img, icon, header, content } = props;
  return (
    <div className="single-cat-widget">
      <div className="content relative">
        <div className="overlay overlay-bg"></div>
        <a href="#" target="_blank">
          <div className="thumb">
            <img className="content-image img-fluid d-block mx-auto" src={img} alt="" />
          </div>
          <div className="content-details">
            <h4 className="content-title mx-auto text-uppercase" style={{ marginTop: '-20px' }}>{header}</h4>
            <img className="header-icon" src={icon} height="40px" />
            <span></span>
            <p>{content}</p>
          </div>
        </a>
      </div >
    </div >
  )
}

const RightMember: React.FunctionComponent = () => {
  return (
    <section className="top-category-widget-area pt-30 pb-90 ">
      <div className="container">
        <div className="title text-center">
          <h1 className="mb-10 pb-30">QUYỀN LỢI THÀNH VIÊN</h1>
        </div>
        <div className="row">

          <div className="col-lg-4">
            <CatWidget img={IgCat1} icon={IgIcon1} header="Giá tốt nhất" content="Được sử dụng dịch vụ của Gotadi.com với mức giá tốt nhất thị trường." />
          </div>
          <div className="col-lg-4">
            <CatWidget img={IgCat2} icon={IgIcon2} header="Ưu đãi hấp dẫn" content="Được hưởng ưu đãi hấp dẫn từ các đối tác Du lịch/ Khách sạn/ Ngân hàng." />
          </div>
          <div className="col-lg-4">
            <CatWidget img={IgCat3} icon={IgIcon3} header="Tích luỹ điểm" content="Mỗi giao dịch sẽ tích lũy điểm, nâng hạng thành viên với nhiều ưu đãi" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default RightMember;

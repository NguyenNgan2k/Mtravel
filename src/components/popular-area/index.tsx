import React from "react";
import { DefinitionProps } from "./type";
import IgIcon1 from 'assets/images/logo/icon1.svg';
import IgIcon2 from 'assets/images/logo/icon2.svg';
import IgIcon3 from 'assets/images/logo/icon3.svg';

const Definition: React.FunctionComponent<DefinitionProps> = (props) => {
  const { img, header, content } = props
  return (
    <div className="single-defination">
      <img src={img} style={{ float: "left" }} />
      <h4>{header}</h4>
      <p style={{ color: 'rgb(119, 119, 119)', fontSize: '14px' }}>{content}</p>
    </div>
  )
}

const PopularArea: React.FunctionComponent = () => {
  return (
    <section className="popular-destination-area section-gap">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-4">
            <Definition header="CAM KẾT GIÁ LUÔN RẺ" img={IgIcon1} content="Vé máy bay & Khách sạn trong nước & quốc tế." />
          </div>
          <div className="col-md-4">
            <Definition header="DỊCH VỤ ĐA NỀN TẢNG" img={IgIcon2} content="PC, Tablet, Tải ứng dụng IOS , Android" />
          </div>
          <div className="col-md-4">
            <Definition header="XUẤT HÓA ĐƠN GTGT" img={IgIcon3} content="Xuất hóa đơn VAT cho mọi đơn hàng giao dịch" />
          </div>
        </div>
      </div>
    </section >
  );
}

export default PopularArea;

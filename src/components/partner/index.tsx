import React from 'react';
import IgPartner from "../../assets/images/partner.png"
const PartNer: React.FunctionComponent = () => {
  return (
    <section className="top-category-widget-area pt-30 pb-90 ">
      <div className="container">
        <div className="title text-center">
          <h1 className="mb-10 pb-30">ĐỐI TÁC CỦA GOTADI</h1>
        </div>
        <div className="title text-center">
          <img src={IgPartner} className="partner-icons" />
        </div>
      </div>
    </section>
  );
};

export default PartNer;

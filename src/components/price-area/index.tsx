import { CardImgProps } from "./type";
import IgPlane from "assets/images/plane.jpg";
import IgRoom from "assets/images/room-2.jpg";
import IgHotel from "assets/images/hotel-3.jpg";
import IgCar from "assets/images/car.jpeg";
import IgVoucher from "assets/images/voucher.jpg"

const CardImg: React.FunctionComponent<CardImgProps> = (props) => {
    const { img, content, classname } = props;
    return (
        < div className="single-cat-widget" >
            <div className="card">
                <img className="card-img-top" src={img} />
                <div className="info">
                    <h5 className="info"><a href="#" className={classname}>{content}<i className="fa fa-arrow-right" aria-hidden="true"></i></a></h5>
                </div>
            </div>
        </div >
    )
}

const Price: React.FunctionComponent = () => {
    return (
        <section className="price-area section-gap pt-30 pb-90 ">

            <div className="container">
                <div className="row">

                    <div className="col1">
                        <CardImg img={IgPlane} classname="genric-btn info circle small" content="Vé máy bay" />
                    </div>
                    <div className="col1">
                        <CardImg img={IgRoom} classname="genric-btn danger circle small" content="Khách sạn" />
                    </div>
                    <div className="col1">
                        <CardImg img={IgHotel} classname="genric-btn warning circle small" content="Tour" />
                    </div>
                    <div className="col1">
                        <CardImg img={IgCar} classname="genric-btn success circle small" content="Đặt xe" />
                    </div>
                    <div className="col1">
                        <CardImg img={IgVoucher} classname="genric-btn info circle small" content="Khuyến  mại" />
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Price;
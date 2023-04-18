import React, { useState } from 'react';
import TabFlight from './layout/TabFlight';
import TabHotel from './layout/TabHotel';
import TabTour from './layout/TabTour';

const BannerArea: React.FunctionComponent = () => {
    const [tab, setTab] = useState('flight-tab');
    return (
        <section className="banner-area relative">
            <div className="overlay overlay-bg"></div>
            <div className="container">
                <div className="row fullscreen align-items-center justify-content-center" style={{ height: '700px' }}>
                    <div className="col-lg-10 banner-right">
                        <ul className="nav nav-tabs" role="tablist">
                            <li className="nav-item" onClick={() => setTab('flight-tab')}>
                                <a className={tab === "flight-tab" ? "nav-link active" : "nav-link"} data-toggle="tab" href="#flight" role="tab" aria-controls="flight" aria-selected="true">
                                    <i className="fa fa-plane mr-2"></i>
                                    <span>Vé máy bay</span>
                                </a>
                            </li>
                            <li className="nav-item" onClick={() => setTab('hotel-tab')}>
                                <a className={tab === "hotel-tab" ? "nav-link active" : "nav-link"} data-toggle="tab" href="#hotel" role="tab" aria-controls="hotel" aria-selected="false">
                                    <i className="fa fa-hotel mr-2"></i>
                                    <span>Khách sạn</span></a>
                            </li>
                            <li className="nav-item" onClick={() => setTab('holiday-tab1')}>
                                <a className={tab === "holiday-tab1" ? "nav-link active" : "nav-link"} data-toggle="tab" href="#tour" role="tab" aria-controls="holiday" aria-selected="false">
                                    <i className="fa fa-plane mr-2"></i>
                                    <span>Tour</span>
                                </a>
                            </li>
                            <li className="nav-item" onClick={() => setTab('holiday-tab2')}>
                                <a className={tab === "holiday-tab2" ? "nav-link active" : "nav-link"} data-toggle="tab" href="#car" role="tab" aria-controls="holiday" aria-selected="false">
                                    <i className="fa fa-globe mr-2"></i>
                                    <span>Đặt xe</span>
                                </a>
                            </li>
                            <li className="nav-item" onClick={() => setTab('holiday-tab3')}>
                                <a className={tab === "holiday-tab3" ? "nav-link active" : "nav-link"} data-toggle="tab" href="#car" role="tab" aria-controls="holiday" aria-selected="false">
                                    <i className="fa fa-gift mr-2"></i>
                                    <span>Khuyến mại</span>
                                </a>
                            </li>
                        </ul>
                        <div className="tab-content">
                            {
                                tab === 'flight-tab' && <TabFlight />
                            }
                            {
                                tab === 'hotel-tab' && <TabHotel />
                            }
                            {
                                tab === 'holiday-tab1' && <TabTour />
                            }
                            {
                                tab === 'holiday-tab2' && <TabTour />
                            }
                            {
                                tab === 'holiday-tab3' && <TabTour />
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BannerArea;

import React from 'react';
import IgJetstar from 'assets/images/logo/jetstar.svg';
import IgVietject from 'assets/images/logo/vietjet.svg';
import IgVnLines from 'assets/images/logo/vietnamairlines.svg';

const TabFlight: React.FunctionComponent = () => {
    return (
        <div className="tab-pane fade show active" role="tabpanel" aria-labelledby="flight-tab">
            <form className="form-wrap">
                <table style={{ width: "100%", border: "0" }}>
                    <tr>
                        <td>
                            <button style={{ float: 'left', marginRight: '10px' }} className="genric-btn danger circle small">Nội địa</button><button style={{ float: 'left' }} className="genric-btn info circle small">Quốc tế</button>
                            <div className="custom-radios" style={{ float: 'right' }}>
                                <div className='mr-2'>
                                    <input type="radio" id="color-1" name="color" value="color-1" checked />
                                    <label className="color-1">
                                        <span></span>
                                    </label>Một chiều
                                </div>

                                <div>
                                    <input type="radio" id="color-2" name="color" value="color-2" />
                                    <label className="color-2">
                                        <span></span>
                                    </label>Hai chiều
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <table style={{ width: "100%", border: '0' }}>
                                <tr>
                                    <td width="48%" align="left"><i className="fa fa-plane"></i> Điểm đi</td>
                                    <td width="4%"></td>
                                    <td width="48%" align="left"><i className="fa fa-plane"></i> Điểm đến</td>
                                </tr>
                                <tr>
                                    <td><select className="form-control" style={{ height: '42px' }}>
                                        <option>Hà Nội</option>
                                        <option>Đà Nẵng</option>
                                        <option>Tp. Hồ Chí Minh</option>
                                    </select></td>
                                    <td></td>
                                    <td><select className="form-control" style={{ height: '42px' }}>
                                        <option>Hà Nội</option>
                                        <option>Đà Nẵng</option>
                                        <option>Tp. Hồ Chí Minh</option>
                                    </select></td>
                                </tr>
                                <tr>
                                    <td align="left"><i className="fa fa-calendar"></i> Ngày đi</td>
                                    <td></td>
                                    <td align="left"><i className="fa fa-calendar"></i> Ngày đến</td>
                                </tr>
                                <tr>
                                    <td align="left"><input className="form-control" value="01/05/2019" /></td>
                                    <td></td>
                                    <td align="left"><input className="form-control" value="05/05/2019" /></td>
                                </tr>
                            </table>

                        </td>
                    </tr>
                    <tr>
                        <td>
                            <table style={{ width: "100%", border: '0', fontSize: '16px', height: '40px' }}  >
                                <tr>
                                    <td align="left"><i className="fa fa-male"></i> Người lớn <i className="fa fa-minus"></i>2<i className="fa fa-plus"></i></td>
                                    <td align="left"><i className="fa fa-child"></i>Trẻ em <i className="fa fa-minus"></i>2<i className="fa fa-plus"></i></td>
                                    <td align="left"><i className="fa fa-child"></i> Em bé <i className="fa fa-minus"></i>2<i className="fa fa-plus"></i></td>
                                </tr>
                            </table>

                        </td>
                    </tr>
                    <tr>
                        <td style={{ height: '40px' }}>
                            <div>
                                <div className="chiller_cb" style={{ float: 'left', paddingRight: '10px' }}>
                                    <input id="myCheckbox" type="checkbox" checked />
                                    <label htmlFor="myCheckbox"><img src={IgJetstar} style={{ height: '16px' }} className="img-fluid" /></label>
                                    <span></span>
                                </div>
                                <div className="chiller_cb" style={{ float: 'left', paddingRight: '10px' }}>
                                    <input id="myCheckbox2" type="checkbox" checked />
                                    <label htmlFor="myCheckbox2"><img src={IgVietject} style={{ height: '16px' }} className="img-fluid" /></label>
                                    <span></span>
                                </div>
                                <div className="chiller_cb" style={{ float: 'left' }}>
                                    <input id="myCheckbox3" type="checkbox" checked />
                                    <label htmlFor="myCheckbox3"><img src={IgVnLines} style={{ height: '16px' }} className="img-fluid" /></label>
                                    <span></span>
                                </div>
                                <button style={{ float: 'right' }} className="btn btn-sm btn-info"><i className="fa fa-search"></i> Tìm chuyến bay</button>
                            </div>
                        </td>
                    </tr>
                </table>
            </form>
        </div>
    )
}

export default TabFlight;

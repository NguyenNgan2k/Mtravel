import React from 'react';
const TabHotel: React.FunctionComponent = () => {
    return (
        <div className="tab-pane fade show active" role="tabpanel" aria-labelledby="tour-tab">
            <form className="form-wrap">
                <input type="text" className="form-control" name="name" placeholder="From " />
                <input type="text" className="form-control" name="to" placeholder="To " />
                <input type="text" className="form-control date-picker" name="start" placeholder="Start " />
                <input type="text" className="form-control date-picker" name="return" placeholder="Return " />
                <input type="number" min="1" max="20" className="form-control" name="adults" placeholder="Adults " />
                <input type="number" min="1" max="20" className="form-control" name="child" placeholder="Child " />
                <a href="#" className="primary-btn text-uppercase">Search Holidays</a>
            </form>
        </div>
    )
}

export default TabHotel;
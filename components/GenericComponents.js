
import React from 'react';

const NoData = () => {
    return (
        <div className="no-data">
            <div className="map-circle">
                <div className="map-icon"></div>
            </div>
            <div className="txt">
                Kindly Add Yours Location First<br />
                <span className="fade-txt">There is no location added right now</span>
            </div>
        </div>
    )
}

export default NoData;

export const DatatableHeader = () => {
    return (
        <div className="heading rows">
            <div className="cols">Location Name</div>
            <div className="cols ">Address</div>
            <div className="cols" >Phone No.</div>
            <div className="cols" ></div>
        </div>
    )
}



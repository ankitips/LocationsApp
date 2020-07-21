import React from 'react';
import { connect } from 'react-redux';
import Locationtable from './LocationTable';
import AddLocationModal from './AddLocationModal';


class LocationPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }

    }


    render() {
        return (
            <React.Fragment>
                <div className="btn-section">
                    <AddLocationModal />
                </div>
                <Locationtable />
            </React.Fragment>

        )

    }
}



export default LocationPage;
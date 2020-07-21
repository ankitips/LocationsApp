import React, { Component } from 'react';
import LocationPage from './LocationPage';
import { ErrorAlert, SuccessAlert } from '../services/Services';


class HomePage extends Component {

    render() {
        return (
            <div className="homepage">
                <LocationPage />
                <ErrorAlert />
                <SuccessAlert />
            </div>
        )
    }
}

export default HomePage;

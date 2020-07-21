import React from 'react';
import { connect } from 'react-redux';
import { ShowOverlay } from '../services/Services';
import LocationForm from './LocationForm';
import * as actions from '../actions/index';



class AddLocationModal extends React.Component {

    constructor(props) {
        super(props);


    }
    handleAddEditForm() {
        ShowOverlay.darkOverlay(true);
        this.props.openAddEditModal("add");
    }

    render() {
        return (
            <React.Fragment>
                <button className="add-btn btn" type="button" onClick={() => this.handleAddEditForm()}>
                    + Add Location
                    </button>
                <div className={`addEditModal ${this.props.showAddEditModal ? "" : "hidden"}`}>
                    <LocationForm />
                </div>
            </React.Fragment>

        )

    }
}



const mapStateToProps = (state) => {
    return {
        showAddEditModal: state.Warehouse.openAddEditModal
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        openAddEditModal: (which) => dispatch(actions.toggleAddEditModal(which))
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddLocationModal);

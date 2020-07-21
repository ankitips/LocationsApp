import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import { Error, Success, ShowOverlay } from '../services/Services';
import FacilityTimeWIndow from './FacilityTimeWIndow';






class LocationForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showFacilityWindow: false
        }
    }

    checkDuplicaton() {
        let stack = this.props.locationDataStack, bool = false, item, id;
        item = this.props.currentItem.loc_name;
        id = item.replace(/ /g, '').toLowerCase();
        stack.forEach((item) => {
            if (item["id"] == id) {
                bool = true;
            }
        })
        return bool;
    }
    handleFormSubmit() {
        event.preventDefault();
        const yes = this.checkDuplicaton();
        if (!yes) {
            this.props.saveLocationData();
            ShowOverlay.darkOverlay(false);
            Success.alert("Location saved.");
        } else {
            Error.alert("Location already exists.")
        }
    }
    seeFormChanges(e) {
        this.props.changeItem(e.target.getAttribute('data-attr'), e.target.value);
    }
    addEditCancel() {
        ShowOverlay.darkOverlay(false);
        this.props.closeAddEditModal();
    }
    toggleFacilityTimeWindow() {
        this.setState({
            showFacilityWindow: !this.state.showFacilityWindow
        })
    }


    render() {
        const { loc_name, add_1, state, suit, add_2, zip, phn, apt, city, tz } = this.props.currentItem;
        return (
            <React.Fragment>
                <form className="location-form" id="locForm" onChange={(e) => this.seeFormChanges(e)} onSubmit={() => this.handleFormSubmit()}>
                    <div className="title">Add Locations</div>
                    <div className="form-field">
                        <input className="input wid100" data-attr="loc_name" value={loc_name ? loc_name : ""} type="text" required />
                        <label htmlFor="name" className="lbl">Location Name</label>

                    </div>
                    <div className="form-field dis-ib wid50">
                        <input className="input wid90" data-attr="add_1" type="text" value={add_1 ? add_1 : ""} />
                        <label htmlFor="name" className="lbl">Address Line 1</label>
                    </div>
                    <div className="form-field dis-ib wid50 rtl">
                        <input className="input wid90" data-attr="suit" value={suit ? suit : ""} type="text" />
                        <label htmlFor="name" className="lbl lft10">Suit No.</label>
                    </div>
                    <div className="form-field dis-ib wid50">
                        <input className="input wid90" data-attr="add_2" value={add_2 ? add_2 : ""} type="text" />
                        <label htmlFor="name" className="lbl">Address Line 2</label>
                    </div>
                    <div className="form-field dis-ib wid25 rtl">
                        <input className="input wid80" data-attr="city" value={city ? city : ""} type="text" />
                        <label htmlFor="name" className="lbl lft20">City</label>
                    </div>
                    <div className="form-field dis-ib wid25 rtl">
                        <select data-attr="state" value={state ? state : "0"} defaultValue name="Loc_DropDownList" className="input wid80">
                            <option value="0"></option>
                            <option value="243">Bangalore</option>
                            <option value="244">Chennai</option>
                            <option value="406">Delhi</option>
                            <option value="423">Gurugram</option>
                            <option value="246">Hyderabad</option>
                            <option value="247">Kolkata</option>
                            <option value="437">Mumbai City</option>
                            <option value="453">Noida</option>
                            <option value="249">Pune</option>
                        </select>
                        <label htmlFor="name" className="lbl lft20">State</label>
                    </div>
                    <div className="form-field dis-ib wid25 ltl">
                        <input className="input wid80" data-attr="zip" value={zip ? zip : ""} type="text" minLength="5" maxLength="10" />
                        <label htmlFor="name" className="lbl">Zipcode</label>
                    </div>
                    <div className="form-field dis-ib wid25 ltl">
                        <input className="input wid80" type="tel" id="phone" name="phone"
                            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                            data-attr="phn"
                            value={phn ? phn : phn}
                            required />
                        <label htmlFor="name" className="lbl">Phone No</label>
                    </div>
                    <div className="form-field dis-ib wid50 rtl">
                        <select data-attr="tz" name="time_zone" value={tz ? tz : "0"} defaultValue className="input wid90">
                            <option value="0"></option>
                            <option value="530">05:30</option>
                            <option value="230">02:30</option>
                            <option value="130">01:30</option>
                            <option value="430">04:30</option>
                            <option value="630">06:30</option>
                        </select>
                        <label htmlFor="name" className="lbl lft10">Timezone</label>
                    </div>
                    <div className="form-field dis-ib wid50">
                        <input className="input wid90" type="text" readOnly onFocus={() => this.toggleFacilityTimeWindow()} data-attr="ft" />
                        <label htmlFor="name" className="lbl">Facility Time</label>
                    </div>
                    <div className="form-field dis-ib wid50 rtl">
                        <input className="input wid90" type="text" data-attr="apt" value={apt ? apt : ""} />
                        <label htmlFor="name" className="lbl lft10">Appointment Pool</label>
                    </div>
                    <div className="edit-btns">
                        <button className="btn cncl" type="button" onClick={() => this.addEditCancel()}>Cancel</button>
                        <button className="btn" type="submit">Save</button>
                    </div>
                </form>
                <div className={`addEditModal wid100 ${this.state.showFacilityWindow ? "" : "hidden"}`}>
                    <FacilityTimeWIndow handleFacilityWindow={() => this.toggleFacilityTimeWindow()} />

                </div>
            </React.Fragment>

        )

    }
}


const mapStateToProps = (state) => {
    return {
        locationDataStack: state.Warehouse.locFactory,
        itemToBeEditedData: state.Warehouse.itemToBeEditedData,
        currentItem: state.Warehouse.currentItem
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        closeAddEditModal: () => dispatch(actions.toggleAddEditModal()),
        saveLocationData: () => dispatch(actions.saveLocationData()),
        changeItem: (key, val) => dispatch(actions.changeItem(key, val))
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LocationForm);



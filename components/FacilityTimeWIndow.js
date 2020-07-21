import React from 'react';
import { connect } from 'react-redux';
import Pagination from '../services/Pagination';
import * as actions from '../actions/index';
import { Error, Success, ShowOverlay, CapsFirst } from '../services/Services';
import NoData, { DatatableHeader } from './GenericComponents';




class FacilityTimeWIndow extends React.Component {

    constructor(props) {
        super(props);

    }
    toggleFacilityTimeWindow() {
        this.props.handleFacilityWindow();
        this.props.resetFacilityTiminigs();
    }
    seeFormChanges(e) {
        let val = e.target.value;
        if (e.target.getAttribute('data-attr') === "defaultChecked") {
            val = !(e.target.getAttribute('data-checked') == 'true');
        }
        this.props.changeItem(e.target.getAttribute('data-attr'), val, e.target.getAttribute('data-row'));
    }
    applyAllFacilityTime(d, c, f, t) {
        this.props.setAllFacilityTime(d, c, f, t);
    }
    handleFormSubmit() {
        event.preventDefault();

    }

    render() {
        const { ft } = this.props.currentItem;

        return (
            <React.Fragment>
                <form className="location-form fac_time" id="locForm" onChange={(e) => this.seeFormChanges(e)} onSubmit={() => this.handleFormSubmit()}>
                    <div className="title">Facility Times</div>
                    {
                        Object.keys(ft).map((item, i) => (
                            <div className="facility-time" key={item + i}>
                                <div className="form-field">
                                    <div className="dis-ib rtm">
                                        <input data-row={item} data-checked={ft[item]["defaultChecked"]} checked={ft[item]["defaultChecked"] ? true : ""} className="input" type="checkbox" data-attr="defaultChecked" />
                                        <span className="day">{CapsFirst(item)}</span>
                                    </div>
                                    <div className="dis-ib ltm">
                                        <input data-row={item} value={ft[item]["from"]} data-attr={"from"} className="rmv_ampm" type="time" />
                                    </div>
                                    <div className="dis-ib rtm">
                                        <div className="format">
                                            <span className="active">AM</span>
                                            <span className="inactive">PM</span>
                                        </div>
                                    </div>
                                    <div className="dis-ib ltm">
                                        <input data-row={item} value={ft[item]["to"]} data-attr={"to"} className="rmv_ampm" type="time" />
                                    </div>
                                    <div className="dis-ib rtm">
                                        <div className="format">
                                            <span className="inactive">AM</span>
                                            <span className="active">PM</span>
                                        </div>
                                    </div>
                                    <div className="dis-ib ltm">
                                        <button data-row={item}
                                            onClick={() => this.applyAllFacilityTime(item, ft[item]["defaultChecked"], ft[item]["from"], ft[item]["to"])}
                                            className="btn apply-all-btn" type="button" >Apply to all checked</button>
                                    </div>

                                </div>
                            </div>

                        ))
                    }
                    <div className="edit-btns">
                        <button className="btn cncl" type="button" onClick={() => this.toggleFacilityTimeWindow()}>Cancel</button>
                        <button onClick={() => this.props.handleFacilityWindow()} className="btn" type="submit">Save</button>
                    </div>
                </form>
            </React.Fragment>
        )

    }
}

const mapStateToProps = (state) => {
    return {
        currentItem: state.Warehouse.currentItem
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeItem: (key, val, ftday) => dispatch(actions.changeItem(key, val, ftday)),
        resetFacilityTiminigs: () => dispatch(actions.resetFacilityTiminigs()),
        setAllFacilityTime: (d, c, f, t) => dispatch(actions.setAllFacilityTime(d, c, f, t))
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FacilityTimeWIndow);


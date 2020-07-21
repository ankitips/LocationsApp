import React from 'react';
import { connect } from 'react-redux';
import Pagination from '../services/Pagination';
import * as actions from '../actions/index';
import { Error, Success, ShowOverlay } from '../services/Services';
import NoData, { DatatableHeader } from './GenericComponents';




class LocationTable extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            DataStack: [],
            stackSize: 2
        };

    }

    onChangePage(pageOfItems) {
        this.setState({ DataStack: pageOfItems });
    }
    handleEditForm(id) {
        let uid = id.replace(/ /g, '').toLowerCase();
        ShowOverlay.darkOverlay(true);
        this.props.openAddEditModal();
        this.props.editSelectedLocation(uid);
    }
    handleDeleteItem(e, id) {
        let uid = id.replace(/ /g, '').toLowerCase();
        this.props.deleteLocationItem(uid);
    }

    render() {

        if (this.props.locationDataStack.length == 0) {
            return (
                <NoData />
            );
        }
        const { DataStack } = this.state;
        return (
            <div className="dataTable">
                {
                    DataStack.length > 0 ?
                        <DatatableHeader /> : ""
                }

                {
                    DataStack.length > 0 ?
                        DataStack.map((key, i) => (
                            <div className="rows" key={key['loc_name'].trim().toLowerCase() + i}>
                                <div className="cols"><span className="counter">{i + 1}</span>{key['loc_name']}</div>
                                <div className="cols ">{key['add_1']}</div>
                                <div className="cols" >{key['phone']}</div>
                                <div className="cols" >
                                    <span className="edit-icons">
                                        <span className="editi icon" onClick={() => this.handleEditForm(key['loc_name'])} >
                                            <img src="../img/pencil.png" />
                                        </span>
                                        <span className="deletei icon" onClick={(e) => this.handleDeleteItem(e, key['loc_name'])}>
                                            <img src="../img/delete.png" />
                                        </span>
                                    </span>

                                </div>
                            </div>

                        ))
                        :
                        ""
                }
                {this.props.locationDataStack.length > 0 ?
                    <Pagination items={this.props.locationDataStack} size={this.state.stackSize} onChangePage={(items) => this.onChangePage(items)} />
                    :
                    ""
                }
            </div>

        )

    }
}

const mapStateToProps = (state) => {
    return {
        locationDataStack: state.Warehouse.locFactory
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteLocationItem: (id) => dispatch(actions.deleteLocationItem(id)),
        openAddEditModal: () => dispatch(actions.toggleAddEditModal()),
        editSelectedLocation: (id) => dispatch(actions.editSelectedLocation(id))
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LocationTable);


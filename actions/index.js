


export const toggleAddEditModal = (which) => {
    return {
        type: 'TOGGLE_ADD_EDIT_MODAL',
        which: which
    }
}

export const saveLocationData = () => {
    return {
        type: 'SAVE_LOCATION_DATA',
    }
}

export const deleteLocationItem = (id) => {
    return {
        type: 'DELETE_LOCATION_ITEM',
        id: id
    }
}

export const editSelectedLocation = (id) => {
    return {
        type: 'FETCH_SELECTED_LOCATION_ITEM_DATA_TO_EDIT',
        id: id
    }
}
export const resetFacilityTiminigs = () => {
    return {
        type: 'RESET_FACILITY_TIMINGS'
    }
}

export const changeItem = (key, val, ftday) => {
    return {
        type: 'CHNAGE_INPUT_ITEM',
        key: key,
        val: val,
        ftday: ftday
    }
}

export const setAllFacilityTime = (d, c, f, t) => {
    return {
        type: 'APPLY_ALL_FACILITY_TIME',
        check: c,
        from: f,
        to: t
    }
}


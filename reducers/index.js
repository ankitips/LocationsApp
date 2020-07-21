import { combineReducers } from 'redux';



const initialStore = {
  openAddEditModal: false,
  emptyBox: {
    loc_name: "", add_1: "", state: "", suit: "", add_2: "", zip: "", phn: "", apt: "", city: "", tz: "",
    ft: {
      sun: { from: "10:30", to: "06:30", defaultChecked: false },
      mon: { from: "10:30", to: "06:30", defaultChecked: true },
      tue: { from: "10:30", to: "06:30", defaultChecked: true },
      wed: { from: "10:30", to: "06:30", defaultChecked: true },
      thu: { from: "10:30", to: "06:30", defaultChecked: true },
      fri: { from: "10:30", to: "06:30", defaultChecked: true },
      sat: { from: "10:30", to: "06:30", defaultChecked: true }
    }
  },
  locFactory: [],
  currentItem: {
    loc_name: "", add_1: "", state: "", suit: "", add_2: "", zip: "", phn: "", apt: "", city: "", tz: "",
    ft: {
      sun: { from: "10:30", to: "06:30", defaultChecked: false },
      mon: { from: "10:30", to: "06:30", defaultChecked: true },
      tue: { from: "10:30", to: "06:30", defaultChecked: true },
      wed: { from: "10:30", to: "06:30", defaultChecked: true },
      thu: { from: "10:30", to: "06:30", defaultChecked: true },
      fri: { from: "10:30", to: "06:30", defaultChecked: true },
      sat: { from: "10:30", to: "06:30", defaultChecked: true }
    }
  },
  editMode: false
}
function Warehouse(state = initialStore, action) {
  const newState = { ...state };

  switch (action.type) {

    case 'TOGGLE_ADD_EDIT_MODAL':
      newState.openAddEditModal = !newState.openAddEditModal;
      if (action.which == "add") {
        newState.editMode = false;
        let obj = JSON.parse(JSON.stringify(newState.emptyBox));
        newState.currentItem = { ...newState.currentItem, ...obj };
      }
      break;

    case 'DELETE_LOCATION_ITEM':
      let id = action.id;
      let factory = newState.locFactory.filter((item) => {
        return item["id"] != id;
      })
      newState.locFactory = factory;
      newState.locFactory = [...newState.locFactory];
      break;

    case 'FETCH_SELECTED_LOCATION_ITEM_DATA_TO_EDIT':
      let uid = action.id;
      let fetchItem = newState.locFactory.filter((item) => {
        return item["id"] == uid;
      })
      newState.currentItem = fetchItem[0];
      newState.currentItem = { ...newState.currentItem };
      newState.editMode = true;
      break;

    case 'CHNAGE_INPUT_ITEM':
      let key = action.key, val = action.val;
      if (action.ftday) {
        newState.currentItem["ft"][action.ftday][key] = val
        let obj = newState.currentItem;
        newState.currentItem = { ...obj };
      } else {
        newState.currentItem = { ...newState.currentItem, ...{ [key]: val } };
      }
      break;

    case 'APPLY_ALL_FACILITY_TIME':
      let items = newState.currentItem["ft"], day = action.day, ch = action.check, from = action.from, to = action.to;
      for (let i in items) {
        items[i]["defaultChecked"] = ch;
        items[i]["from"] = from;
        items[i]["to"] = to;
      }
      newState.currentItem["ft"] = { ...items };
      newState.currentItem = { ...newState.currentItem };
      break;

    case 'RESET_FACILITY_TIMINGS':
      newState.currentItem["ft"] = JSON.parse(JSON.stringify(newState.emptyBox["ft"]));
      newState.currentItem = { ...newState.currentItem };
      break;

    case 'SAVE_LOCATION_DATA':
      let cookedData = newState.currentItem;
      if (newState.editMode) {
        let item = newState.locFactory.filter((item) => {
          if (item["id"] == newState.currentItem["id"]) {
            return item;
          }
        })
        let collection = newState.locFactory.filter((item) => {
          if (item["id"] != newState.currentItem["id"]) {
            return item;
          }
        })
        const obj = { ...item[0], ...newState.currentItem };
        obj["id"] = obj["loc_name"].replace(/ /g, '').toLowerCase();
        let arr = [obj];
        arr = [...arr, ...collection];
        newState.locFactory = [].concat(arr);

      } else {
        cookedData["id"] = cookedData["loc_name"].replace(/ /g, '').toLowerCase();
        const arr = [];
        arr.push(cookedData);

        newState.locFactory = newState.locFactory.concat(arr);
      }

      newState.openAddEditModal = !newState.openAddEditModal;

      break;

  }

  return newState;

}

export default combineReducers({
  Warehouse
});
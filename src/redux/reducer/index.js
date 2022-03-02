import { combineReducers } from "redux";
// menggabungkan semua reducer menjadi 1
import authReducer from "./auth";
import authSignUpReducer from "./authSignUp"
import getProfileReducer from "./getprofile"
import detailVehicleReducer from "./detailvehicle";
import setReservationReducer from "./setReservation";
// import createHistoryReducer from "./createHistory";
// import detailHistoryReducer from "./detailhistory";
// import getAllVehicleReducer from "./getallvehicle";
// import setFilterVehicleReducer from "./setfiltervehicle";
import getPopularReducer from "./getPopular"
// import getVehicleTypeReducer from "./getvehicletype";
// import createVehicleReducer from "./createVehicle";


const reducers = combineReducers({
  auth: authReducer,
  signUp : authSignUpReducer,
  getProfile : getProfileReducer,
  detailVehicle : detailVehicleReducer,
  setReservation: setReservationReducer,
//   createHistory : createHistoryReducer,
//   detailHistory : detailHistoryReducer,
//   getAllVehicle : getAllVehicleReducer,
//   setFilterVehicle : setFilterVehicleReducer,
  getPopular : getPopularReducer,
//   getVehicleType : getVehicleTypeReducer,
//   createVehicle :createVehicleReducer,
});

export default reducers;
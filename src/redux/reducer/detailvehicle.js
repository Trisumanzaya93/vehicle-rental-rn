import { ACTION_STRING } from "../action/actionString";
import { ActionType } from "redux-promise-middleware";

const initialState = {
  datavehicle: {
    counter: 0,
    category: "",
    location: "",
    photo: "",
    price: "",
    status: "",
    stock: "",
    vehiclename: "",
    isSucces: false,
  },
  isPending: false,
  isFulfilled: false,
  isRejected: false,
  err: {},
};
const detailVehicleReducer = (prevState = initialState, action) => {
  const { detailVehicle } = ACTION_STRING;
  const { Pending, Fulfilled, Rejected } = ActionType;
  // membuat logic berdasarkan action
  switch (action.type) {
    // case authLogin + pending:
    case detailVehicle.concat("_", Pending):
      return {
        ...prevState,
        isPending: true,
        isFulfilled: false,
        isRejected: false,
      };

    // case authLogin + fulfilled:
    case detailVehicle.concat("_", Fulfilled):
      const data = action.payload.data.data[0];
      console.log("full", data);
      const datavehicle = {
        ...prevState.datavehicle,
        // token: data.data.token,
        category: data.category,
        location: data.location,
        photo: data.photo,
        price: data.price,
        status: data.status,
        stock: data.stock,
        vehiclename: data.vehiclename,
      };
      return {
        ...prevState,
        isPending: false,
        isFulfilled: true,
        datavehicle,
      };

    // case authLogin + rejected:
    case detailVehicle.concat("_", Rejected):
      const err = action.payload;
      return {
        ...prevState,
        isPending: false,
        isRejected: true,
        err,
      };

    default:
      return prevState;
  }
};

export default detailVehicleReducer;
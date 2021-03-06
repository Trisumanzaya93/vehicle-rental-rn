import { ACTION_STRING } from "./actionString";
import { detailVehicle, getAllVehicle, getPopular, getVehicleType } from "../../utils/vehicle";

export const getPopularAction = (body) => {
    return {
      type: ACTION_STRING.getPopular,
      payload: getPopular(body),
    };
  };
  export const getDetailVehicleAction = (body) => {
    return {
      type: ACTION_STRING.detailVehicle,
      payload: detailVehicle(body),
    };
  };
  export const setReservation = (body) => {
    return {
      type: ACTION_STRING.setReservation,
      payload: body,
    };
  };
  export const getVehicleTypeAction = (body) => {
    return {
      type: ACTION_STRING.getVehicleType,
      payload: getVehicleType(body),
    };
  };
  export const getAllVehicleAction = (body) => {
    return {
      type: ACTION_STRING.getallvehicle,
      payload: getAllVehicle(body),
    };
  };
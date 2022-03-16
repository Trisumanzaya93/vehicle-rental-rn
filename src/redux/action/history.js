import { ACTION_STRING } from "./actionString";
import { createHistory,detailHistory  } from "../../utils/history";

export const createHistoryAction = (body,token) => {

//   console.log("dimana ini", createHistory(body,token));
  return {
    type: ACTION_STRING.createHistory,
    payload: createHistory(body,token),
  };
};


export const getDetailHistoryAction = (param,token) => {
  return {
    type: ACTION_STRING.detailHistory,
    payload: detailHistory(param,token),
  };
};
import { ACTION_STRING } from "./actionString";
import { createHistory,detailHistory  } from "../../utils/history";

export const createHistoryAction = (body,token) => {

//   console.log("dimana ini", createHistory(body,token));
    return {
      type: ACTION_STRING.createHistory,
      payload: createHistory(body,token),
    };
  };

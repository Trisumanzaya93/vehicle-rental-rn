import { ACTION_STRING } from "../action/actionString";
import { ActionType } from "redux-promise-middleware";

const initialState = {
  popular: [],
  filter: {},
  isPending: false,
  isFulfilled: false,
  isRejected: false,
  err: {},
};
const getPopularReducer = (prevState = initialState, action) => {
  const { getPopular } = ACTION_STRING;
  const { Pending, Fulfilled, Rejected } = ActionType;
  // membuat logic berdasarkan action
  switch (action.type) {
    // case authLogin + pending:
    case getPopular.concat("_", Pending):
      return {
        ...prevState,
        isPending: true,
        isFulfilled: false,
        isRejected: false,
      };

    // case authLogin + fulfilled:
    case getPopular.concat("_", Fulfilled):
      const data = action.payload.data.data;
    //   console.log("prevState", prevState);
      const popular = {
        ...prevState.popular,
        popular:data
      };
      return {
        ...prevState,
        isPending: false,
        isFulfilled: true,
        popular,
      };

    // case authLogin + rejected:
    case getPopular.concat("_", Rejected):
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

export default getPopularReducer;
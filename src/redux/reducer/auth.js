import { ACTION_STRING } from "../action/actionString";
import { ActionType } from "redux-promise-middleware";

const initialState = {
  userData: {
    token: "",
    user: {},
    photo: "",
    role: 0,
  },
  isPending: false,
  isFulfilled: false,
  isRejected: false,
  err: {},
};
const authReducer = (prevState = initialState, action) => {
  const { authLogin } = ACTION_STRING;
  const { Pending, Fulfilled, Rejected } = ActionType;
  // membuat logic berdasarkan action
  switch (action.type) {
    // case authLogin + pending:
    case authLogin.concat("_", Pending):
      return {
        ...prevState,
        isPending: true,
        isFulfilled: false,
        isRejected: false,
      };

    // case authLogin + fulfilled:
    case authLogin.concat("_", Fulfilled):
      const data = action.payload.data;
      console.log('full',data);
      const userData = {
        ...prevState.userData,
        token: data.data.token,
        user: data.data.user,
      };
      return {
        ...prevState,
        isPending: false,
        isFulfilled: true,
        userData,
      };

    // case authLogin + rejected:
    case authLogin.concat("_", Rejected):
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



export default authReducer;
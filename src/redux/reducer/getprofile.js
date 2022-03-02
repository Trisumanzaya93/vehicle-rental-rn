import { ACTION_STRING } from "../action/actionString";
import { ActionType } from "redux-promise-middleware";

const initialState = {
    
  userinfo: {
    id: 84,
    username: "",
    email: "",
    phone: "",
    address: null,
    birthday: null,
    displayname: "",
    image: "",
    created_at: null,
    role: "",
    updated_at: null,
  },
  isPending: false,
  isFulfilled: false,
  isRejected: false,
  err: {},
};
const getProfileReducer = (prevState = initialState, action) => {
  const { userProfile } = ACTION_STRING;
  const { Pending, Fulfilled, Rejected } = ActionType;
  // membuat logic berdasarkan action
  console.log('type',action.type);
  switch (action.type) {
    // case authLogin + pending:
    case userProfile.concat("_", Pending):
      return {
        ...prevState,
        isPending: true,
        isFulfilled: false,
        isRejected: false,
      };

    // case authLogin + fulfilled:
    case userProfile.concat("_", Fulfilled):
      const data = action.payload.data.data[0];
      console.log("full", data);
      const userinfo = {
        ...prevState.userinfo,
        id: data.id,
        username: data.username,
        email: data.email,
        phone: data.phone,
        address: data.address,
        birthday: data.birthday,
        displayname: data.displayname,
        image: data.image,
        created_at: data.created_at,
        role: data.role,
        updated_at: data.updated_at,
      };
      return {
        ...prevState,
        isPending: false,
        isFulfilled: true,
        userinfo,
      };

    // case authLogin + rejected:
    case userProfile.concat("_", Rejected):
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

export default getProfileReducer;
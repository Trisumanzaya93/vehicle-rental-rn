import { ACTION_STRING } from "./actionString";
import { login, logout, signUp } from "../../utils/auth";

export const loginAction = (body) => {
  return {
    type: ACTION_STRING.authLogin,
    payload: login(body),
  };
};
export const signUpAction = (body) => {
  return {
    type: ACTION_STRING.authSignUp,
    payload: signUp(body),
  };
};

export const LogoutAction = (token) => {
  return {
    type: ACTION_STRING.authLogout,
    payload: logout(token),
  };
};
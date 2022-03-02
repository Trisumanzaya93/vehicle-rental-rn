import axios from "axios";

export const login = (body) => {
  const URL = process.env.HEROKU + "/auth/login";
    console.log('hehe', URL);
  return axios.post(URL, body);
};
export const signUp = (body) => {
  const URL = process.env.HEROKU + "/auth/signup";
    console.log('hehe', body);
  return axios.post(URL, body);
};
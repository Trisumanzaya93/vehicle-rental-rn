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
export const logout = (token) => {
  const URL = process.env.HEROKU + "/auth/logout";
    console.log('hehe', URL);
  return axios.delete(URL , {headers: {
    "x-access-token": token,
  }});
};

import axios from "axios";

export const createHistory = (body,token) => {
    const URL = process.env.HEROKU + "/history/createhistory";
    return axios.post(URL, body , {headers: {
      "x-access-token": token,
    }});
  };
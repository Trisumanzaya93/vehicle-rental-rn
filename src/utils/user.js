import axios from "axios";


export const getProfile = (param) => {
    const URL = process.env.HEROKU + "/users/profile";
      console.log('hehe', param);
    return axios.get(URL, param);
  };

  export const updateProfile = (token, body) => {
    const URL = process.env.HEROKU + "/users/";
      console.log('utils', body);
    return axios.patch(URL,body, {
        headers: {
          "x-access-token": token,
          // 'Content-Type': 'multipart/form-data',
        }
      });
  };
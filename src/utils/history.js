import axios from "axios";

export const createHistory = (body,token) => {
    const URL = process.env.HEROKU + "/history/createhistory";
    return axios.post(URL, body , {headers: {
      "x-access-token": token,
    }});
  };

  export const detailHistory = (param,token) => {
    const paramString = {
      search: param.search ?? '',
      sortBy: param.sortBy ?? '',
      sort: param.sort ?? '',
    }
    const URL = process.env.HEROKU + `/history?search=${paramString.search}&sortBy=${paramString.sortBy}&sort=${paramString.sort}`;
    return axios.get(URL, {headers: {
      "x-access-token": token,
    }});
  };
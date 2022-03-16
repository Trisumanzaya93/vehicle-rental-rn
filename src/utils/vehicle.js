import axios from "axios";

export const getPopular = () => {
    const URL = process.env.HEROKU + `/history/vehiclelocation/lampung`;
      // console.log('heheaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
    return axios.get(URL);
  };

  export const detailVehicle = (id) => {
    const URL = process.env.HEROKU + `/vehicle/${id}`;
      console.log('hehe', id);
    return axios.get(URL);
  };

  export const getVehicleType = (type) => {
    const URL = process.env.HEROKU + `/vehicle/type/${type}`;
      // console.log('hehe', id);
    return axios.get(URL);
  };
  export const getAllVehicle = (param) => {
    console.log("param",param);
    const queryParam = {
      search: param.search ?? '',
      location: param.location ?? '',
      status: param.status ?? '',
      type: param.type ?? '',
      date: param.date ?? '',
      sortBy: '',
      sort: '',
      per_page: param.per_page ?? '5',
      page: param.page ?? '1',
    }
    const URL = process.env.HEROKU + 
    `/vehicle?search=${queryParam.search}` +
    `&location=${queryParam.location}&status=${queryParam.status}&type=${queryParam.type}&date=${queryParam.date}` +
    `&sortBy=${queryParam.sortBy}&sort=${queryParam.sort}&per_page=${queryParam.per_page}&page=${queryParam.page}`;
      console.log('getAllVehicleReducer', param);
    return axios.get(URL);
  };
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
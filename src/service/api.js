import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL_BACK;


export const fetchShops = () => {
    return axios.get(`/shops`).then(({ data }) => {
        console.log(data);
      return data;
    });
  };
import axios from 'axios';

import { BASE_URL } from 'utils/consts';


  export const fetchShops = async () => {
    try {
      const {data} = await axios.get(`${BASE_URL}/api/shops/`);
      return data.data.result;
    } catch (err) {
      console.log(err.message);
    }
  };

  export const fetchHistory = async () => {
    try {
      const {data} = await axios.get(`${BASE_URL}/api/history/`);
      console.log(data);
      return data.data.result;
    } catch (err) {
      console.log(err.message);
    }
  };

  export const updateHistory = async (order) => {
    try {
      const {data} = await axios.post(`${BASE_URL}/api/history/`, order);
      console.log(data);
      return data.data.result;
    } catch (err) {
      console.log(err.message);
    }
  };
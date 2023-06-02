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
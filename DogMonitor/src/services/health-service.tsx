import axios, {AxiosResponse} from 'axios';
import {BASE_URL} from '../constants';

export namespace HelathService {
  export const testHelath = async () => {
    try {
      console.log('Getting health...');
      const healthResponse: AxiosResponse = await axios.get(
        `${BASE_URL}/api/services/health`,
      );
      console.log(healthResponse.data);
      return true;
    } catch (_error) {
      console.log('Error getting Health');
      console.log(_error);
      console.log(_error.response);
      return false;
    }
  };
}

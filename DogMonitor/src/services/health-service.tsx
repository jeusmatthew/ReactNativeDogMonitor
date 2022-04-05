
import axios, { AxiosResponse } from 'axios';
import { BASE_URL } from '../constants';

export namespace HelathService
{
    export const testHelath = async ()=>
    {
        try{
            const healthResponse:AxiosResponse  =await axios.get(`${BASE_URL}/health`);
            return true;
        }catch(_error)
        {
            console.log(_error);
            return false;   
        }
    }

}
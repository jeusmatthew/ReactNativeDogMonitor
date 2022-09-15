
import axios, { AxiosError, AxiosResponse } from 'axios';
import { BASE_URL } from '../constants';
//import {ToastAndroid } from 'react-native';


export namespace HelathService
{
    export const testHelath = async ()=>
    {
        try{
            console.log("Getting health...");
            //ToastAndroid.show(`GET: ${BASE_URL}/api/services/health`, ToastAndroid.LONG);
            const healthResponse:AxiosResponse  =await axios.get(`${BASE_URL}/api/services/health`);
            console.log(healthResponse.data);
            return true;
        }catch(_error)
        {

            console.log("Error getting Health");
            //ToastAndroid.show(_error.message.toString(), ToastAndroid.LONG);
            console.log(_error);
            console.log(_error.response);
            return false;   
        }
    }

}
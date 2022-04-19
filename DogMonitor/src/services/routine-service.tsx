
import axios, { AxiosResponse } from 'axios';
import { BASE_URL } from '../constants';

export namespace RoutineService
{
    export const listRoutines = async ()=>
    {
        try{
            const routineResponse:AxiosResponse  =await axios.get(`${BASE_URL}/routine`);   
            return routineResponse.data; 
        }catch(_error)
        {
            console.log("Errro-----------",_error);
        }
    }

}
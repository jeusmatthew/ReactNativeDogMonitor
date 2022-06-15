
import axios, { AxiosResponse } from 'axios';
import { BASE_URL } from '../constants';
import { Routine } from '../models';

export namespace RoutineService
{
    export const listRoutines = async ()=>
    {
        try{
            const routineResponse:AxiosResponse  =await axios.get(`${BASE_URL}/routine`);   
            return routineResponse.data.data; 
        }catch(_error)
        {
            console.log("Errro-----------",_error);
        }
    }

    export const getRoutineById = async (routineId:string):Promise<Routine | undefined>=>
    {
        try{
            const routineResponse:AxiosResponse  =await axios.get(`${BASE_URL}/routine/${routineId}`);   
            const routine:Routine =routineResponse.data.data; 
            console.log("----------------------------");
            
            return routine
        }catch(_error)
        {
            return;
            console.log("Errro-----------",_error);
        }
    }

    export const deleteRoutineById = async (routineId:string):Promise<boolean>=>
    {
        try{
            const routineResponse:AxiosResponse  =await axios.delete(`${BASE_URL}/routine/${routineId}`);   
            const routine:Routine =routineResponse.data.data; 
            return true
        }catch(_error)
        {
            console.log("Errro-----------",_error);
            return false;
        }
    }

}
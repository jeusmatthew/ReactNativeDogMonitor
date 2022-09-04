
import axios, { AxiosResponse } from 'axios';
import { BASE_URL } from '../constants';
import { Routine } from '../models';

export namespace RoutineService
{
    export const listRoutines = async (search?:string)=>
    {
        try{
            let url = `${BASE_URL}/api/services/routine/list`
            if(search)
            {
                url = url+'?search='+search;
            }
            const routineResponse:AxiosResponse  =await axios.get(url);   
            return routineResponse.data; 
        }catch(_error)
        {
            console.log("Errro-----------",_error);
        }
    }

    export const getRoutineById = async (routineId:string):Promise<Routine | undefined>=>
    {
        try{
            const routineResponse:AxiosResponse  =await axios.get(`${BASE_URL}/api/services/routine/${routineId}`);   
            const routine:Routine =routineResponse.data; 
            console.log("----------------------------");
            
            return routine
        }catch(_error)
        {
            
            console.log("Errro-----------",_error);
            return;
        }
    }

    export const deleteRoutineById = async (routineId:string):Promise<boolean>=>
    {
        try{
            const routineResponse:AxiosResponse  =await axios.delete(`${BASE_URL}/api/services/routine/${routineId}/delete`);   
            const routine:Routine =routineResponse.data; 
            return true
        }catch(_error)
        {
            console.log("Errro-----------",_error);
            return false;
        }
    }

    export const createRoutine =async (input:Routine):Promise<Routine | undefined>=>
    {
        try{
            const routineResponse:AxiosResponse  =await axios.post(`${BASE_URL}/api/services/routine`,input);   
            const routine:Routine =routineResponse.data; 
            return routine
        }catch(_error)
        {
            console.log("Errro-----------",_error);
            return;
        }
    }

    
    export const stopRoutine =async ():Promise<Routine | undefined>=>
    {
        try{
            const routineResponse:AxiosResponse  =await axios.post(`${BASE_URL}/api/services/routine/stop`,{});   
            const routine:Routine =routineResponse.data; 
            return routine
        }catch(_error)
        {
            console.log("Errro-----------",_error);
            return;
        }
    }

}
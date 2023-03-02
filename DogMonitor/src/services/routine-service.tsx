
import axios, { AxiosResponse } from 'axios';
import { BASE_URL } from '../constants';
import { Routine } from '../models';
import { StopRoutineResponse } from '../models/Routine';

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

    export const getAudioFile = async (audioName:string):Promise<any>=>
    {
        try{
            const routineResponse  =await axios.get(`${BASE_URL}/dogMonitorFirmware/audio/${audioName}`,{ responseType: "text",responseEncoding: "base64"});  
            const audio =routineResponse.data; 
            console.log("reader------------------------>",audio)
            return audio;
            
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

    export const createRoutine =async (input:Routine):Promise<Routine | string>=>
    {
        try{
            const routineResponse:AxiosResponse  =await axios.post(`${BASE_URL}/api/services/routine`,input);   
            const routine:Routine =routineResponse.data; 
            return routine
        }catch(_error)
        {
            console.log("Errro-----------",_error);
            console.log(_error.response.data.message);
            
            return _error.response.data.message;
        }
    }

    
    export const stopRoutine =async ():Promise<StopRoutineResponse | undefined>=>
    {
        try{
            const routineResponse:AxiosResponse  =await axios.post(`${BASE_URL}/api/services/routine/stop`,{});   
            const routine:StopRoutineResponse =routineResponse.data; 
            return routine
        }catch(_error)
        {
            console.log("Errro-----------",_error);
            return;
        }
    }

}
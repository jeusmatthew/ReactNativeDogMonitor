
import axios, { AxiosResponse } from 'axios';
import { BASE_URL } from '../constants';
import { Device,DeviceSensors } from '../models';

export namespace DeviceService
{
    export const getDeviceInformation = async ():Promise<Device>=>
    {
            const deviceResponse:AxiosResponse  =await axios.get(`${BASE_URL}/api/services/device`);   
            const deviceData:Device = deviceResponse.data;
            return deviceData; 
    }
    export const getDeviceSensorsInformation = async ():Promise<DeviceSensors>=>
    {
            const deviceResponse:AxiosResponse  =await axios.get(`${BASE_URL}/api/services/health`);
            const deviceSensors:DeviceSensors = deviceResponse.data; 
            return deviceSensors; 
    }

    export const updateDeviceInformation = async (input:any):Promise<Device>=>
    {
        const deviceResponse:AxiosResponse  =await axios.put(`${BASE_URL}/api/services/device/1`,input);   
        const deviceData:Device = deviceResponse.data.data;   
        return deviceData; 
    }

}
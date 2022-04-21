
import axios, { AxiosResponse } from 'axios';
import { BASE_URL } from '../constants';
import { Device,DeviceSensors } from '../models';

export namespace DeviceService
{
    export const getDeviceInformation = async ():Promise<Device>=>
    {
            const deviceResponse:AxiosResponse  =await axios.get(`${BASE_URL}/device`);   
            const deviceData:Device = deviceResponse.data;
            return deviceData; 
    }
    export const getDeviceSensorsInformation = async ():Promise<DeviceSensors>=>
    {
            const deviceResponse:AxiosResponse  =await axios.get(`${BASE_URL}/device/sensors`);   
            const deviceSensors:DeviceSensors = deviceResponse.data;
            return deviceSensors; 
    }

    export const updateDeviceInformation = async (input:Device):Promise<Device>=>
    {
        const deviceResponse:AxiosResponse  =await axios.post(`${BASE_URL}/device`,input);   
        const deviceData:Device = deviceResponse.data;
        return deviceData; 
    }

}
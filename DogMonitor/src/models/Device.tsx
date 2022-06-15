export interface Device
{
    id:number;
    name:string;
}

export interface DeviceSensors 
{
    heart_rate:boolean;
    imu_tail:boolean;
    imu_head:boolean;
    microphone:boolean;
    temperature:boolean;
}
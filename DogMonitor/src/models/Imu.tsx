export interface Imu
{
    id:string;
    routine_id:string;
    sampled_at:number;
    accelerometer_x:number;
    accelerometer_y:number;
    accelerometer_z:number;
    gyroscope_x:number;
    gyroscope_y:number;
    gyroscope_z:number
    magnetometer_x:number
    magnetometer_y:number
    magnetometer_z:number
    created_at:Date
    updated_at:Date
    type:string;//varchar //head | tail
}
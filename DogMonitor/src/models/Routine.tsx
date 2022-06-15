import { HeartRate,Audio,Imu,Temperature } from "./index";

export interface Routine {
    id?:string;
    name:string;
    created_at?:Date;
    updated_at?:Date;
    dog_name:string;
    imu_tail?:Imu[];
    imu_head?:Imu[];
    temperature?:Temperature[];
    heart_rate?:HeartRate[];
    audio?:Audio[];

}
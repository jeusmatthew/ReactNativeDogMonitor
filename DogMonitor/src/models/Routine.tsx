import { Imu } from "./Imu";

export interface Routine {
    id:string;
    name:string;
    created_at:Date;
    updated_at:Date;
    start_date:Date;
    end_date:Date;
    dog_name:string;
    imu:Imu[];
}
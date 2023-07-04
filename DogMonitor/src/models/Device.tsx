export interface Device {
  id: number;
  name: string;
}

export interface DeviceRunningData {
  running: boolean;
  routine_id?: number;
  routine_name?: string;
}

export interface DeviceSensors {
  heart_rate: boolean;
  imu_tail: boolean;
  imu_head: boolean;
  microphone: boolean;
  temperature: boolean;
}

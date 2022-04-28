const express = require('express');
const RoutinesArray  = require('./objects/routines');
var bodyParser = require('body-parser');
const { response } = require('express');
const app = express()
const port = 3000
const NUMBER_OF_SAMPLES =100;
let deviceName='pechera1'
app.use(bodyParser.json())
app.get('/health', (req, res) => {
  res.status(200).send();
})
app.get('/routine', (req, res) => {
  console.log(RoutinesArray)
  res.status(200).send(RoutinesArray);
})

app.get('/routine/:routine_id', (req, res) => {
  const routineId=req.params.routine_id;
  console.log("generating routine....");
  const routine = RoutinesArray.find(routine => routine.id == routineId);
  let response = 
  {
    id:routineId,
    name:routine.name,
    created_at:routine.created_at,
    updated_at:routine.updated_at,
    start_date:routine.start_date,
    end_date:routine.end_date,
    dog_name:routine.dog_name,
    temperature:generateTemperature(routineId),
    heart_rate:generateHeartRate(routineId),
    imu_tail:generateTailImu(routineId),
    imu_head:generateHeadImu(routineId),
    audio:generateAudio(routineId)
  }
  console.log("ready to return...");
  res.status(200).send(response);
})

app.get('/device', (req, res) => {
  res.status(200).send({name:deviceName});
})

app.get('/device/sensors', (req, res) => {
  res.status(200).send({
    imu1:true,
    imu2:false,
    temperature:true,
    microphone:true,
    polar:false
  });
})

app.post('/device', (req, res) => {
  console.log(req.body);
  deviceName=req.body.name;
  res.status(200).send({name:deviceName});
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


const generateAudio = (routine_id) =>
{
  let audios = [];
  const audio = 
  {
      id:1,
      routine_id:routine_id,
      file_name:"aduio.mp3"
  }
  audios.push(audio);
  
  return audios;
}
const generateHeartRate = (routine_id) =>{
  let heartRate = [];
  for(let index =0;index<NUMBER_OF_SAMPLES;index++){
    const currentHeartRate = 
    {
      id:index.toString(),
      routine_id:routine_id,
      value:Math.round(Math.random()),
      sampled_at:Math.abs(Math.round(Math.random()))
    }
    heartRate.push(currentHeartRate);
  }
  return heartRate;
}

const generateTemperature = (routine_id) =>{
  let temperature = [];
  for(let index =0;index<NUMBER_OF_SAMPLES;index++){
    const currentTemperature = 
    {
      id:index.toString(),
      routine_id:routine_id,
      value:Math.round(Math.random()),
      sampled_at:Math.abs(Math.round(Math.random()))
    }
    temperature.push(currentTemperature);
  }
  return temperature;
}

const generateHeadImu = (routine_id) =>{
  let imu = [];
  for(let index =0;index<NUMBER_OF_SAMPLES;index++){
    const currentImu = 
    {
      id:index.toString(),
      routine_id:routine_id,
      sampled_at:Math.abs(Math.round(Math.random())),
      accelerometer_x:Math.abs(Math.round(Math.random())),
      accelerometer_y:Math.abs(Math.round(Math.random())),
      accelerometer_z:Math.abs(Math.round(Math.random())),
      gyroscope_x:Math.abs(Math.round(Math.random())),
      gyroscope_y:Math.abs(Math.round(Math.random())),
      gyroscope_z:Math.abs(Math.round(Math.random())),
      magnetometer_x:Math.abs(Math.round(Math.random())),
      magnetometer_y:Math.abs(Math.round(Math.random())),
      magnetometer_z:Math.abs(Math.round(Math.random())),
      created_at:new Date(),
      updated_at:new Date(),
      type:"head"
    }
    imu.push(currentImu);
  }
  return imu;
}

const generateTailImu = (routine_id) =>{
  let imu = [];
  for(let index =0;index<NUMBER_OF_SAMPLES;index++){
    const currentImu = 
    {
      id:index.toString(),
      routine_id:routine_id,
      sampled_at:Math.abs(Math.round(Math.random())),
      accelerometer_x:Math.abs(Math.round(Math.random())),
      accelerometer_y:Math.abs(Math.round(Math.random())),
      accelerometer_z:Math.abs(Math.round(Math.random())),
      gyroscope_x:Math.abs(Math.round(Math.random())),
      gyroscope_y:Math.abs(Math.round(Math.random())),
      gyroscope_z:Math.abs(Math.round(Math.random())),
      magnetometer_x:Math.abs(Math.round(Math.random())),
      magnetometer_y:Math.abs(Math.round(Math.random())),
      magnetometer_z:Math.abs(Math.round(Math.random())),
      created_at:new Date(),
      updated_at:new Date(),
      type:"tail"
    }
    imu.push(currentImu);
  }
  return imu;
}
const express = require('express');
const RoutinesArray  = require('./objects/routines');
var bodyParser = require('body-parser')
const app = express()
const port = 3000
let deviceName='pechera1'
app.use(bodyParser.json())
app.get('/health', (req, res) => {
  res.status(200).send();
})
app.get('/routine', (req, res) => {
  console.log(RoutinesArray)
  res.status(200).send(RoutinesArray);
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

const express = require('express');
const RoutinesArray  = require('./objects/routines');
const app = express()
const port = 3000

app.get('/health', (req, res) => {
  res.status(200).send();
})
app.get('/routine', (req, res) => {
  console.log(RoutinesArray)
  res.status(200).send(RoutinesArray);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
'use strict';

const serverless = require('serverless-http')
const express = require('express')
const app = express();

//====================================
// hello world
//====================================
app.get('/hello', async function (req, res) {
  console.log(req)
  res.status(200).json({message: "hello world",});
});

//====================================
// pokemon(dynamo)
//====================================
const pokemon  = require('./pokemon/controllers/pokemon')
app.get('/pokemon/:id', async function (req, res) {
  console.log(req)
  const result = await pokemon.entity.get(req.params.id)
  res.status(200).json(result)
})

app.post('/pokemon', async function (req, res) {
  console.log(req)
  const result = await pokemon.entity.regist(req)
  res.status(200).json(result)
})

app.put('/pokemon/:id', async function (req, res) {
  console.log(req)
  const result = await pokemon.entity.update(req)
  res.status(200).json(result)
})

//====================================
// S3
//====================================
const file  = require('./file/controllers/file')
app.get('/file/list/:bucket', async function (req, res) {
  console.log(req)
  const result = await file.entity.getList(req.params.bucket)
  res.status(200).json(result)
})

module.exports.main = serverless(app)

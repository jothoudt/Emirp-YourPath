const { default: axios } = require('axios');
const express = require('express');
const apiRouter = express.Router();
// const pool = require('../modules/pool');
var jf = require("jotForm");

require('dotenv').config();

apiRouter.get('/', (req, res)=>{
  console.log('in apiRouter')

  const options={url: 'https://hipaa-api.jotform.com/form/211299151988063/submissions?apiKey=API_KEY'}
  axios.request(options).then(function (response) {
    console.log(response.data);
    res.send(response.data.content);
  }).catch((err)=>{
    res.sendStatus(500)
  })

})

//get route

module.exports= apiRouter;

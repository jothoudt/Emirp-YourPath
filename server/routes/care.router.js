const { default: axios } = require('axios');
const express = require('express');
const careRouter = express.Router();
// const pool = require('../modules/pool');
var jf = require("jotForm");

require('dotenv').config();

careRouter.get('/', (req, res)=>{
  console.log('in apiRouter')

  const options={url: 'https://hipaa-api.jotform.com/form/211299102090144/submissions?apiKey=API_KEY'
}
  axios.request(options).then(function (response) {
    console.log(response.data);
    res.send(response.data.content);
  }).catch((err)=>{
    res.sendStatus(500)
  })

})

//get route

module.exports= careRouter;
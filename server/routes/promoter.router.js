const { default: axios } = require('axios');
const express = require('express');
const promoterRouter = express.Router();
// const pool = require('../modules/pool');
var jf = require("jotForm");
const pool = require('../modules/pool');

require('dotenv').config();
//gets network promoter scores from jotform api
promoterRouter.get('/', (req, res)=>{
    console.log('in apiRouter')

    console.log(process.env.API_KEY);
  
    const options={url: `https://hipaa-api.jotform.com/form/211324333888154/submissions?apiKey=${process.env.API_KEY}&limit=100&orderby=id`}
    console.log(options)
    axios.request(options).then(function (response) {
      console.log(response.data);
      res.send(response.data.content);
    }).catch((err)=>{
      console.log(err)
      res.sendStatus(500)
    })
  
});//end GET

module.exports= promoterRouter;
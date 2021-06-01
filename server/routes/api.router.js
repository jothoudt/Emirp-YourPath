const { default: axios } = require('axios');
const express = require('express');
const apiRouter = express.Router();
// const pool = require('../modules/pool');
var jf = require("jotForm");

require('dotenv').config();
//gets the results of the rule 25 forms submitted by the user
apiRouter.get('/', (req, res)=>{
  console.log('in apiRouter')

  console.log(process.env.API_KEY);

  const options={url: `https://hipaa-api.jotform.com/form/211299151988063/submissions?apiKey=${process.env.API_KEY}&limit=100&orderby=id`}
  console.log(options)
  axios.request(options).then(function (response) {
    console.log(response.data);
    res.send(response.data.content);
  }).catch((err)=>{
    console.log(err)
    res.sendStatus(500)
  })

});// end GET

//get route

module.exports= apiRouter;

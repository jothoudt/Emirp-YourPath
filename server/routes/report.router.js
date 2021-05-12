const { default: axios } = require('axios');
const express = require('express');
const reportRouter = express.Router();
// const pool = require('../modules/pool');
var jf = require("jotForm");
const pool = require('../modules/pool');

require('dotenv').config();

reportRouter.get('/', (req, res)=>{
//   console.log('in apiRouter')

//   const options={url: 'https://hipaa.jotform.com/reports/21130065818805011?apiKey=API_KEY'
// }
//   axios.request(options).then(function (response) {
//     console.log(response.data);
//     res.send(response.data);
//   }).catch((err)=>{
//     res.sendStatus(500)
//   })
const getQuery=`SELECT * FROM favorite WHERE "user_id"=1;`
pool.query(getQuery).then(result=>{res.send(result.rows)}).catch((err)=>{res.sendStatus(500)})

})

//get route

module.exports= reportRouter;
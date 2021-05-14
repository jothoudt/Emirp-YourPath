const { default: axios } = require('axios');
const express = require('express');
const preferencesRouter = express.Router();
// const pool = require('../modules/pool');
var jf = require("jotForm");
const pool = require('../modules/pool');

require('dotenv').config();

preferencesRouter.get('/', (req, res)=>{
  console.log('in apiRouter')
  const preferencesQuery=`SELECT component_name From favorite WHERE user_id=1;`
  pool.query(preferencesQuery)
  .then(result=>{
      console.log(result.rows)
      res.send(result.rows)
  })
  .catch(err =>{
      console.log('ERROR get Preferences', err)
      res.sendStatus(500)
  })

})

//get route

module.exports= preferencesRouter;
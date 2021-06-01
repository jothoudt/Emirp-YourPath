const { default: axios } = require('axios');
const express = require('express');
const preferencesRouter = express.Router();
// const pool = require('../modules/pool');
var jf = require("jotForm");
const pool = require('../modules/pool');

require('dotenv').config();
//gets the users favorite charts from the database
preferencesRouter.get('/:id', (req, res)=>{
  console.log('in apiRouter')
  const preferencesQuery=`SELECT component_name, id From favorite WHERE user_id=$1;`
  pool.query(preferencesQuery,[req.params.id])
  .then(result=>{
      console.log(result.rows)
      res.send(result.rows)
  })
  .catch(err =>{
      console.log('ERROR get Preferences', err)
      res.sendStatus(500)
  })

});//end get
//adds a chart to the users favorites in the database
preferencesRouter.post('/', (req, res)=>{
  const addQuery=`INSERT INTO favorite (component_name, user_id) VALUES ($1, $2);`;
  pool.query(addQuery, [req.body.component_name, req.body.id]).then(()=>res.sendStatus(200))
    .catch((err)=>{
      res.sendStatus(500);
    })
});//end POST
//deletes a users favorite chart from the database
preferencesRouter.delete('/', (req, res)=>{
  console.log(req.body)
  const deleteQuery=`DELETE FROM favorite WHERE id= $1`
  pool.query(deleteQuery, [req.body.id]).then(()=>res.sendStatus(200)).catch((err)=>{
    res.sendStatus(500)
  })
});//end DELETE


module.exports= preferencesRouter;
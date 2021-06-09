import React from 'react';
import {useSelector} from 'react-redux';
//styling for card
import { 
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Typography
} from '@material-ui/core';
import OpiodsPieChartDetails from '../OpiodsPieChartDetails/OpiodsPieChartDetails';
import Box from '@material-ui/core/Box';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';

//function returns the results of all time opioid use
function OpiodsAllTime(){
  //used to style the table
  const useStyles = makeStyles({
    table: {
      width: "50%",
      margin: 'auto',
      marginBottom: '50px',
    },
  });
  //define classes to style the table
  const classes=useStyles();
  //get data from the storre
    const form = useSelector((store)=>store.form);
    //define necessary variables
    let opiodsYes=0;
    let opiodsNo=0;
//conditionally render card to the DOM
     const answer1 =()=>{
       let display=''
       console.log('in answer')
       //if form data doesn't exist display loading
       if(!form){
         display=<p>loading</p>
       }//end if 
       //if form data does exist map through the data
       if(form.length){
       form.map((item)=>{
         //if api number exists proceed through conditionals
         if(item.answers[123]){
         //target specific question number to get results from the api
          let answer=item.answers[123]
          //if answer.answer is yes add one to opiodsYes
          if(answer.answer==='Yes'){
            opiodsYes++
          }//end if
          // if answer.answer is no or no answer add one to opiodsNo
          else{
            opiodsNo++
          }//end else
         }//end if
         else{
           opiodsNo++
         }
       console.log(opiodsYes, opiodsNo)
       //display returns a card with a pie chart and a table with details about opioids use all time
       display= 
       <Box mx='auto' width="75%" >
        <Card>
            <CardContent> 
              <OpiodsPieChartDetails /> 
              <Table className={classes.table}>
                  <TableHead>
                    <TableRow>
                      <TableCell><h3>This pie chart shows the percentage of people taking YourPath’s assessment who indicated that they had used other opioids, including painkillers, fentanyl patches and opium, at some point in their life.</h3></TableCell><TableCell></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><p>The number of users that anwered YES to using Opioids in their lifetime.</p></TableCell><TableCell align="right">{opiodsYes}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><p>The number of users that anwered NO to using Opioidsin their lifetime.</p></TableCell><TableCell align="right">{opiodsNo}</TableCell>
                    </TableRow>
                  </TableHead>
                </Table>  
            </CardContent>
        </Card>
       </Box>
       })
     }
     return display;
   }
   //conditionally render card to the DOM
    return(
        <>
        {answer1()}
        </>

    )
}

export default OpiodsAllTime;
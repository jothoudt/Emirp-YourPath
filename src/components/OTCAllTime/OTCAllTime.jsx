import React from 'react';
import {useSelector} from 'react-redux'
import OTCPieChartDetails from '../OTCPieChartDetails/OTCPieChartDetails'
import { 
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Typography
} from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';

//returns results for over the counter substances use all time
function OTCAllTime(){
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
  //get data from the store
    const form = useSelector((store)=>store.form);
    //define the variables
    let OTCYes=0;
    let OTCNo=0;
    //conditionally render card to the DOM
     const answer1 =()=>{
       let display=''
       console.log('in answer')
       //if form data doesn't exist, display loading
       if(!form){
         display=<p>loading</p>
       }//end if
       //if form data does exist map through the data
       if(form.length){
       form.map((item)=>{
         //if api number exists proceed through conditionals
         if(item.answers[127]){
           //target specific question number to return results from the api
           let answer=item.answers[127]
           //if answer.answer is yes add one to OTCYes
           if(answer.answer==='Yes'){
             OTCYes++
           }//end if
           //if answer.answer is no or no answer add one to OTCNo
           else{
             OTCNo++
           }//end else
         }//end if
         //if api number doesn't exist add one to OTCNo
         else{
           OTCNo++
         }//end else
       console.log(OTCYes, OTCNo)
       //display returns a card with a pie chart and a table of details of over the counter substance use all time
       display= 
      <Box mx='auto' width="75%" >
        <Card>
          <CardContent>
            <OTCPieChartDetails />
            <Table className={classes.table}>
                  <TableHead>
                    <TableRow>
                      <TableCell><h3>This pie chart shows the percentage of people taking YourPath’s assessment who indicated that they had used over-the-counter drugs such as Robitussin or Imodium at some point in their life.</h3></TableCell><TableCell></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><p>The number of users that anwered YES to using Over-the-Counter substances in their lifetime.</p></TableCell><TableCell align="right">{OTCYes}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><p>The number of users that anwered NO to using Over-the-Counter substances in their lifetime.</p></TableCell><TableCell align="right">{OTCNo}</TableCell>
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
   //conditionally renders card to the DOM
    return(
        <>
        {answer1()}
        </>

    )
}

export default OTCAllTime;
import React from 'react';
import {useSelector} from 'react-redux';
import { 
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Typography
} from '@material-ui/core';
import Box from '@material-ui/core/Box';
import HeroinPieChartDetails from '../HeroinPieChartDetails/HeroinPieChartDetails';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';

//function that returns the results of Heroin all time use
function HeroinAllTime(){
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
//conditionally renders card to DOM
    const answerHeroin=()=>{
      //define variables
        let heroinYes=0;
        let heroinNo=0;
        let heroinDisplay=''
        console.log('in answer')
        //if form data doesn't exist display loading
        if(!form){
          heroinDisplay=<p>loading</p>
        }//end if
        //if form data does exist map through data from the store
        if(form.length){
        form.map((item)=>{
          //if api number exists proceed through conditionals
          if(item.answers[122]){
          //targets specific question number to return results from the api
            let answer=item.answers[122]
            //if answer.answer is yes add one to heroinYes
            if(answer.answer==='Yes'){
              heroinYes++
            }//end if
            //if answer.answer is no or no answer add one to heroinNo
            else{
              heroinNo++
            }//end else
          }
          //if api number doesn't exist add one to heroinNo
          else{
            heroinNo++
          }
        console.log(heroinYes, heroinNo)
        //display returns a card with a pie char of heroin all time use. It also returns a table with a description as the header and two rows. One row for users that selected yes and one for users that selected no.
        heroinDisplay= 
        <Box mx='auto' width="75%" >
          <Card>
            <CardContent>
              <Divider />   
              <HeroinPieChartDetails />    
              <Table className={classes.table}>
                  <TableHead>
                    <TableRow>
                      <TableCell><h3>This pie chart shows the percentage of people taking YourPath’s assessment who indicated that they had used heroin or fentanyl powder at some point in their life.</h3></TableCell><TableCell></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><p>The number of users that anwered YES to using Heroin in their lifetime.</p></TableCell><TableCell align="right">{heroinYes}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><p>The number of users that anwered NO to using Heroin in their lifetime.</p></TableCell><TableCell align="right">{heroinNo}</TableCell>
                    </TableRow>
                  </TableHead>
                </Table>
            </CardContent>
          </Card>
        </Box>
        })
      }
      //return display
      return heroinDisplay;
    }
//conditionally render card to the DOM
    return(
        <>
        {answerHeroin()}
        </>
    )
}

export default HeroinAllTime;
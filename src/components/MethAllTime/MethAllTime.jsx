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
import MethAllTimePie from '../MethAllTimePie/MethAllTimePie';
import Box from '@material-ui/core/Box';
import MethPieChartDetails from '../MethPieChartDetails/MethPieChartDetails';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';
//returns results of meth use all time
function MethAllTime(){
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
    
    //get information from the store
    const form = useSelector((store)=>store.form);

    //variables to count
    let methYes=0;
    let methNo=0;

    //display the results of counting
    const answerMeth =()=>{
       //variable to display
        let methDisplay=''
        console.log('in answer')
        //if data doesn't exist display loading
        if(!form){
          methDisplay=<p>loading</p>
        }//end if
        //if data exists map through and count answers
        if(form.length){
        form.map((item)=>{
          //target specific question number to return the results from the api
          let answer=item.answers[121]
          //if answer.answer is yes add one to methYes
         if(answer.answer==='Yes'){
             methYes++
         }//end if
         //if answer.answer is no or no answer add one to methNo
         else{
             methNo++
         }//end else
        console.log(methYes, methNo)
        //display returns a card with a pie chart and a table of all the information in text form
        methDisplay= 
        <Box mx="auto" width="75%">
          <Card>
            <CardContent>
              <MethPieChartDetails />
              <Table className={classes.table}>
                  <TableHead>
                    <TableRow>
                      <TableCell><h3>This pie chart shows the percentage of people taking YourPath’s assessment who indicated that they had used meth or other amphetamines at some point in their life.</h3></TableCell><TableCell></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><p>The number of users that anwered YES to using Meth in their lifetime.</p></TableCell><TableCell align="right">{methYes}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><p>The number of users that anwered NO to using Meth in their lifetime.</p></TableCell><TableCell align="right">{methNo}</TableCell>
                    </TableRow>
                  </TableHead>
                </Table>
            </CardContent>
          </Card>
        </Box>
        })
      }
      return methDisplay;
    }
    //conditionally render the card to dom
    return(
        <>
        {answerMeth()}
        </>
    )
}
export default MethAllTime;
import React from 'react';
import {useSelector} from 'react-redux';
//pass thru pie chart
import InhalantsPieChartDetails from '../InhalantsPieChartDetails/InhalantsPieChartDetails';
//for styling
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

//function that returns the results of Inhalants used all time
function InhalantsAllTime(){
  //used to style the table
  const useStyles = makeStyles({
    table: {
      width: "50%",
      margin: 'auto',
      marginBottom: '50px',
    },
  });
  //define classes to style table
  const classes=useStyles();
//get data from the store
    const form = useSelector((store)=>store.form);
    //define variables to count
    let inhalantYes=0;
    let inhalantNo=0;
    
     //conditionally render card to the DOM
    const answer1 =()=>{
      let display=''
      console.log('in answer')
      //if form data doesn't exist display loading
      if(!form){
        display=<p>loading</p>
      }//end if
      //if form data does exist map through data from the store
      if(form.length){
        form.map((item)=>{
          //if api number exists proceed through conditionals
          if(item.answers[126]){
          //target specific question number to return results from the api
            let answer=item.answers[126]
            //if answer.answer is yes add one to inhalantYes
            if(answer.answer === 'Yes'){
            inhalantYes++
            }//end if
            //if answer.answer is No or no answer add one to inhalantNo
            else {
              inhalantNo++
            }//end else
          }
          else{
            inhalantNo++
          }
      console.log(inhalantYes, inhalantNo)
      //display returns a card with a pie chart of all time inhalants used. It also returns a table with the data description as the header and two rows. One row is for users that selected yes and the other is for users that selected no.
      display= 
      <Box mx='auto' width="75%" >
        <Card>
          <CardContent>
            <Divider />
            <InhalantsPieChartDetails />
            <Table className={classes.table}>
                  <TableHead>
                    <TableRow>
                      <TableCell><h3>This pie chart shows the percentage of people taking YourPath’s assessment who indicated that they had used inhalants, including dust-off, glue, paint or whippets at some point in their life.</h3></TableCell><TableCell></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><p>The number of users that anwered YES to using Inhalants in their lifetime.</p></TableCell><TableCell align="right">{inhalantYes}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><p>The number of users that anwered NO to using Inhalants in their lifetime.</p></TableCell><TableCell align="right">{inhalantNo}</TableCell>
                    </TableRow>
                  </TableHead>
                </Table>
          </CardContent>
        </Card>
      </Box>
      })
    }
    //return display
    return display;
  }
  //conditionally render card to the DOM
    return(
        <>
        {answer1()}
        </>

    )
}

export default InhalantsAllTime;
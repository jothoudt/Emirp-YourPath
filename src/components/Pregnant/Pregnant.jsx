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
import HealthStatistics from '../HealthStatistics/HealthStatistics';
import Box from '@material-ui/core/Box';
import PregnantPieChartDetails from '../PregnantPieChartDetails/PregnantPieChartDetails';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';
//returns the results of the form for pregnancy
function Pregnant(){
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
    //define variables to count
    let pregnant=0;
    let notPregnant=0;
    let notSure=0;
    //function to conditionally render card
    const answer1 =()=>{
      let display=''
      console.log('in answer')
      //if form data doesn't exist, display loading
      if(!form){
        display=<p>loading</p>
      }//end if
      //if form data does exist, map through the data
      if(form.length){
        form.map((item)=>{
          //target specific question number to return results from the data
          let answer=item.answers[103]
          //if answer.answer is yes add one to pregnant
        if(answer.answer === 'Yes'){
          pregnant++
        }//end if
        //if answer.answer is no add one to notPregnant
        else if (answer.answer === 'No') {
          notPregnant++
        }//end else if
        //if answer.answer is notSure add one to notSure
        else if (answer.answer === 'Not sure') {
          notSure++
        }//end else if
      console.log('in pregnant:', pregnant, notPregnant, notSure)
      //display returns a card with a pie chart and a table that shows the details of user pregnancy in text form
      display=
      <Box mx='auto' width="75%" >
        <Card>
          <CardContent>    
            <PregnantPieChartDetails /> 
            <Table className={classes.table}>
                  <TableHead>
                    <TableRow>
                      <TableCell><h3>The YourPath assessment gives takers the option of marking whether they are pregnant, plus a third option for anyone unsure. This pie chart shows the overall percentages for the total number of people who marked pregnant, not pregnant or not sure.</h3></TableCell><TableCell></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><p>The number of users that anwered YES to being pregnant.</p></TableCell><TableCell align="right">{pregnant}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><p>The number of users that anwered NO to being pregnant.</p></TableCell><TableCell align="right">{notPregnant}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><p>The number of users that anwered NOT SURE to being pregnant.</p></TableCell><TableCell align="right">{notSure}</TableCell>
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
  //render health statistics dropdown menu and conditionally render card to DOM
    return(
        <>
        <HealthStatistics />
        {answer1()}
        </>

    )
}

export default Pregnant;
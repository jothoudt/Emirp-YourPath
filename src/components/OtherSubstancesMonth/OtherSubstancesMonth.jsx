import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { 
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Divider,
    Typography
  } from '@material-ui/core';
import OtherSubstancesMonthPie from '../OtherSubstancesMonthPie/OtherSubstancesMonthPie';
import Box from '@material-ui/core/Box';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';
//this function returns the results of other substances used in the last month
function OtherSubstancesMonth(){
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

    //select info from store
    const form = useSelector((store)=>store.form);

    //define variables for counting
    let otherSubstancesMonthlyYes=0;
    let otherSubstancesMonthlyNo=0;

    //function to display count of Other Substances users in the last month
    const answerOtherSubstances=()=>{
        let otherSubstancesDisplay=''
        console.log('in answer')
        //if no data exists
        if(!form){
            otherSubstancesDisplay=<p>loading</p>
        }//end if
        //if data exists map through for counts of yes and no
        if(form.length){
        form.map((item)=>{
          //target specific question number to return the results from the api
          let answer=item.answers[144]
          //if answer.answer exists add one to otherSubstancesMonthlyYes
         if(answer.answer){
            otherSubstancesMonthlyYes++
         }//end if
         //if answer.answer doesn't exist, add one to otherSubstancesMonthlyNo
         else{
            otherSubstancesMonthlyNo++
        }//end else
        console.log(otherSubstancesMonthlyYes, otherSubstancesMonthlyNo)
        //display returns a card with a pie chart and table with details of other substances use in the last month
        otherSubstancesDisplay= 
        <Box mx='auto' width="75%" >
          <Card>
          <CardContent>
            <OtherSubstancesMonthPie />
            <Table className={classes.table}>
                  <TableHead>
                    <TableRow>
                      <TableCell><h3>YourPath assessment takers were given the choice of entering how many days in the previous month they used other substances such as bath salts, GHB, ketamine or khat. This pie graph shows the percentage of people who had used at least one day in the previous month.</h3></TableCell><TableCell></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><p>The number of users that anwered YES to using Other Substances in their last month.</p></TableCell><TableCell align="right">{otherSubstancesMonthlyYes}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><p>The number of users that anwered NO to using Other Substances in their last month.</p></TableCell><TableCell align="right">{otherSubstancesMonthlyNo}</TableCell>
                    </TableRow>
                  </TableHead>
                </Table>
          </CardContent>
          </Card>
        </Box>
        })
      }//end if
      return otherSubstancesDisplay;
    }

    //conditionally render card to dom
    return(
        <>
        {answerOtherSubstances()}
        </>
    )
}

export default OtherSubstancesMonth;
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
import OpiodsMonthPie from '../OpiodsMonthPie/OpiodsMonthPie';
import Box from '@material-ui/core/Box';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';


function OpiodsMonth(){
  //use to style the table
  const useStyles = makeStyles({
    table: {
      width: "50%",
      margin: 'auto',
      marginBottom: '50px',
    },
  });
  //define classes to style table
  const classes=useStyles();

    //select info from store
    const form = useSelector((store)=>store.form);

    //define variables for counting
    let opiodsMonthlyYes=0;
    let opiodsMonthlyNo=0;

    //function to display count of Opiod users in the last month
    const answerOpiods=()=>{
        let opiodsDisplay=''
        console.log('in answer')
        //if no data exists display loading
        if(!form){
            opiodsDisplay=<p>loading</p>
        }//end if
        //if data exists map through for counts of yes and no
        if(form.length){
        form.map((item)=>{
          //target specific question to return results from the api
          let answer=item.answers[139]
          //if answer.answer exists add one to opiodsMonthlyYes
         if(answer.answer){
            opiodsMonthlyYes++
         }//end if
         //if answer.answer doesn't exist add one to opiodsMonthlyNo
         else{
            opiodsMonthlyNo++
        }//end else
        console.log(opiodsMonthlyYes, opiodsMonthlyNo)
        //display returns a card with pie chart and table of details about Opioid use in the last month
        opiodsDisplay= 
        <Box mx='auto' width="75%" >
          <Card>
            <CardContent>
              <OpiodsMonthPie />
              <Table className={classes.table}>
                  <TableHead>
                    <TableRow>
                      <TableCell><h3>YourPath assessment takers were given the choice of entering how many days in the previous month they used other opioids, including painkillers, fentanyl patches and opium. This pie graph shows the percentage of people who had used at least one day in the previous month.</h3></TableCell><TableCell></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><p>The number of users that anwered YES to using Opioids in their last month.</p></TableCell><TableCell align="right">{opiodsMonthlyYes}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><p>The number of users that anwered NO to using Opioids in their last month</p></TableCell><TableCell align="right">{opiodsMonthlyNo}</TableCell>
                    </TableRow>
                  </TableHead>
                </Table> 
            </CardContent>
          </Card>
        </Box>
        })
      }//end if
      return opiodsDisplay;
    }

    //conditionally render card to the DOM
    return(
        <>
        {answerOpiods()}
        </>
    )
}

export default OpiodsMonth;
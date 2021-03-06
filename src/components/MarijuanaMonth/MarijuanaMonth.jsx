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
import Box from '@material-ui/core/Box';
import MarijuanaMonthPieChart from '../MarijuanaMonthPieChart/MarijuanaMonthPieChart';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';
//function returns the results of marijuana use in the last month
function MarijuanaMonth(){
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
    let marijuanaMonthlyYes=0;
    let marijuanaMonthlyNo=0;

    //function to display count of Marijuana users in the last month
    const answerMarijuana=()=>{
        let marijuanaDisplay=''
        console.log('in answer')
        //if no data exists display loading
        if(!form){
            marijuanaDisplay=<p>loading</p>
        }//end if
        //if data exists map through for counts of yes and no
        if(form.length){
        form.map((item)=>{
          //target specific question number to return results from the api
          let answer=item.answers[135]
          //if answer.answer exists add one to marijuanaMonthlyYes
         if(answer.answer){
            marijuanaMonthlyYes++
         }//end if
         //if answer.answer doesn't exist add one to marijuanaMonthlyNo
         else{
            marijuanaMonthlyNo++
        }//end else
        console.log(marijuanaMonthlyYes, marijuanaMonthlyNo)
        //display renders a card with a pie chart and a table with data pertaining to Marijuana use in the last month
        marijuanaDisplay= 
        <Box mx='auto' width="75%" >
        <Card >
        <CardContent>
          <Divider />
          <MarijuanaMonthPieChart />
          <Table className={classes.table}>
                  <TableHead>
                    <TableRow>
                      <TableCell><h3>YourPath assessment takers were given the choice of entering how many days in the previous month they ingested marijuana, including K2, wax and spice. This pie graph shows the percentage of people who had used at least one day in the previous month.</h3></TableCell><TableCell></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><p>The number of users that anwered YES to using Marijuana in their last month</p></TableCell><TableCell align="right">{marijuanaMonthlyYes}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><p>The number of users that anwered NO to using Marijuana in their last month</p></TableCell><TableCell align="right">{marijuanaMonthlyNo}</TableCell>
                    </TableRow>
                  </TableHead>
                </Table>
        </CardContent>
        </Card>
        </Box>
        })
      }//end if
      return marijuanaDisplay;
    }

    //conditionally render card to the DOM
    return(
        <>
        {answerMarijuana()}
        </>
    )
}

export default MarijuanaMonth;

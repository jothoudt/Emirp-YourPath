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

  const useStyles = makeStyles({
    table: {
      width: "50%",
      margin: 'auto',
      marginBottom: '50px',
    },
  });
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
        //if no data exists
        if(!form){
            opiodsDisplay=<p>loading</p>
        }//end if
        //if data exists map through for counts of yes and no
        if(form.length){
        form.map((item)=>{
          let answer=item.answers[139]
         if(answer.answer){
            opiodsMonthlyYes++
         }//end if
         else{
            opiodsMonthlyNo++
        }//end else
        console.log(opiodsMonthlyYes, opiodsMonthlyNo)
        //display for counts
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

    //render to dom
    return(
        <>
        {answerOpiods()}
        </>
    )
}

export default OpiodsMonth;
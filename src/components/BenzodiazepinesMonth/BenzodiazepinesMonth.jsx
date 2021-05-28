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
import BenzodiazepinesMonthPie from '../BenzodiazepinesMonthPie/BenzodiazepinesMonthPie';
import Box from '@material-ui/core/Box';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';

function BenzodiazepinesMonth(){

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
    let benzodiazepinesMonthlyYes=0;
    let benzodiazepinesMonthlyNo=0;

    //function to display count of benzodiazepines users in the last month
    const answerBenzodiazepines=()=>{
        let benzodiazepinesDisplay=''
        console.log('in answer')
        //if no data exists
        if(!form){
            benzodiazepinesDisplay=<p>loading</p>
        }//end if
        //if data exists map through for counts of yes and no
        if(form.length){
        form.map((item)=>{
          let answer=item.answers[140]
         if(answer.answer){
            benzodiazepinesMonthlyYes++
         }//end if
         else{
            benzodiazepinesMonthlyNo++
        }//end else
        console.log(benzodiazepinesMonthlyYes, benzodiazepinesMonthlyNo)
        //display for counts
        benzodiazepinesDisplay= 
        <Box mx='auto' width="75%" >
          <Card>
          <CardContent>
            <Divider />
            <BenzodiazepinesMonthPie />
            <Table className={classes.table}>
                  <TableHead>
                    <TableRow>
                      <TableCell><h3>YourPath assessment takers were given the choice of entering how many days in the previous month they used benzodiazepines such as Xanax, Klonopin or Valium. This pie graph shows the percentage of people who had used at least one day in the previous month.   </h3></TableCell><TableCell></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><p>The number of users that anwered YES to using Benzodiazepines in their last month.</p></TableCell><TableCell align="right">{benzodiazepinesMonthlyYes}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><p>The number of users that anwered NO to using Benzodiazepines in their last month.</p></TableCell><TableCell align="right">{benzodiazepinesMonthlyNo}</TableCell>
                    </TableRow>
                  </TableHead>
                </Table>
            <Divider />
          </CardContent>
          </Card>
        </Box>
        })
      }//end if
      return benzodiazepinesDisplay;
    }

    //render to dom
    return(
        <>
        {answerBenzodiazepines()}
        </>
    )
}

export default BenzodiazepinesMonth;
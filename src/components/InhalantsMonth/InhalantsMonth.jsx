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
import InhalantsMonthPie from '../InhalantsMonthPie/InhalantsMonthPie';
import Box from '@material-ui/core/Box';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';


function InhalantsMonth(){
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
    let inhalantsMonthlyYes=0;
    let inhalantsMonthlyNo=0;

    //function to display count of Inhalants users in the last month
    const answerInhalants=()=>{
        let inhalantsDisplay=''
        console.log('in answer')
        //if no data exists
        if(!form){
            inhalantsDisplay=<p>loading</p>
        }//end if
        //if data exists map through for counts of yes and no
        if(form.length){
        form.map((item)=>{
          let answer=item.answers[142]
         if(answer.answer){
            inhalantsMonthlyYes++
         }//end if
         else{
            inhalantsMonthlyNo++
        }//end else
        console.log(inhalantsMonthlyYes, inhalantsMonthlyNo)
        //display for counts
        inhalantsDisplay= 
        <Box mx='auto' width="75%" >
          <Card>
          <CardContent>
            <Divider />
            <InhalantsMonthPie />
            <Table className={classes.table}>
                  <TableHead>
                    <TableRow>
                      <TableCell><h3>YourPath assessment takers were given the choice of entering how many days in the previous month they used inhalants, including dust-off, glue, paint or whippets. This pie graph shows the percentage of people who had used at least one day in the previous month.</h3></TableCell><TableCell></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><p>The number of users that anwered YES to using Inhalants in their last month.</p></TableCell><TableCell align="right">{inhalantsMonthlyYes}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><p>The number of users that anwered NO to using Inhalants in their last month</p></TableCell><TableCell align="right">{inhalantsMonthlyNo}</TableCell>
                    </TableRow>
                  </TableHead>
                </Table>
          </CardContent>
          </Card>
        </Box>
        })
      }//end if
      return inhalantsDisplay;
    }

    //render to dom
    return(
        <>
        {answerInhalants()}
        </>
    )
}

export default InhalantsMonth;
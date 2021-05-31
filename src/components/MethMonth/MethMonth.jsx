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
import MethMonthPie from '../MethMonthPie/MethMonthPie'
import Box from '@material-ui/core/Box';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';


function MethMonth(){

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
    let methMonthlyYes=0;
    let methMonthlyNo=0;

    //function to display count of Marijuana users in the last month
    const answerMeth=()=>{
        let methDisplay=''
        console.log('in answer')
        //if no data exists
        if(!form){
            methDisplay=<p>loading</p>
        }//end if
        //if data exists map through for counts of yes and no
        if(form.length){
        form.map((item)=>{
          let answer=item.answers[137]
         if(answer.answer){
            methMonthlyYes++
         }//end if
         else{
            methMonthlyNo++
        }//end else
        console.log(methMonthlyYes, methMonthlyNo)
        //display for counts
        methDisplay= 
        <Box mx='auto' width="75%" >
        <Card>
         <MethMonthPie />
         <CardContent>
         <Table className={classes.table}>
                  <TableHead>
                    <TableRow>
                      <TableCell><h3>YourPath assessment takers were given the choice of entering how many days in the previous month they used meth or other amphetamines. This pie graph shows the percentage of people who had used at least one day in the previous month.</h3></TableCell><TableCell></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><p>The number of users that anwered YES to using Meth in their last month.</p></TableCell><TableCell align="right">{methMonthlyYes}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><p>The number of users that anwered NO to using Meth in their last month.</p></TableCell><TableCell align="right">{methMonthlyNo}</TableCell>
                    </TableRow>
                  </TableHead>
                </Table>
         </CardContent>
        </Card>
        </Box>
        })
      }//end if
      return methDisplay;
    }

    //render to dom
    return(
        <>
        {answerMeth()}
        </>
    )
}

export default MethMonth;
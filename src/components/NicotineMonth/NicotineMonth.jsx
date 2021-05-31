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
import NicotineMonthPie from '../NicotineMonthPieChart/NicotineMonthPieChart';
import Box from '@material-ui/core/Box';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';


function NicotineMonth(){

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
    let nicotineMonthlyYes=0;
    let nicotineMonthlyNo=0;

    //function to display count of Nicotine users in the last month
    const answerNicotine=()=>{
        let nicotineDisplay=''
        console.log('in answer')
        //if no data exists
        if(!form){
          nicotineDisplay=<p>loading</p>
        }//end if
        //if data exists map through for counts of yes and no
        if(form.length){
        form.map((item)=>{
          let answer=item.answers[133]
         if(answer.answer){
            nicotineMonthlyYes++
         }//end if
         else{
            nicotineMonthlyNo++
        }//end else
        console.log(nicotineMonthlyYes, nicotineMonthlyNo)
        //display for counts
        nicotineDisplay= 
        <Box mx='auto' width="75%" >
        <Card>
         <CardContent>
           <NicotineMonthPie />
           <Table className={classes.table}>
                  <TableHead>
                    <TableRow>
                      <TableCell><h3>YourPath assessment takers were given the choice of entering how many days in the previous month they used nicotine products (cigarettes, vaping, chew, cigars, etc.). This pie graph shows the percentage of people who had used at least one day in the previous month.</h3></TableCell><TableCell></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><p>The number of users that anwered YES to using Nicotine in their last month.</p></TableCell><TableCell align="right">{nicotineMonthlyYes}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><p>The number of users that anwered NO to using Nicotine in their last month</p></TableCell><TableCell align="right">{nicotineMonthlyNo}</TableCell>
                    </TableRow>
                  </TableHead>
                </Table> 
         </CardContent>
        </Card>
        </Box>
        })
      }//end if
      return nicotineDisplay;
    }

    //render to dom
    return(
        <>
        {answerNicotine()}
        </>
    )
}

export default NicotineMonth;
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
import HeroinMonthPie from '../HeroinMonthPie/HeroinMonthPie';
import Box from '@material-ui/core/Box';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';


function HeroinMonth(){
  //used to style table
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
    let heroinMonthlyYes=0;
    let heroinMonthlyNo=0;

    //function to display count of Heroin users in the last month
    const answerHeroin=()=>{
        let heroinDisplay=''
        console.log('in answer')
        //if no data exists display loading
        if(!form){
            heroinDisplay=<p>loading</p>
        }//end if
        //if data exists map through for counts of yes and no
        if(form.length){
        form.map((item)=>{
          //target specific question number to return results from api
          let answer=item.answers[138]
          //if answer.answer is yes add one to heroinMonthlyYes
         if(answer.answer){
            heroinMonthlyYes++
         }//end if
         //if answer.answer is no or no answer add one to heroinMonthllyNo
         else{
            heroinMonthlyNo++
        }//end else
        console.log(heroinMonthlyYes, heroinMonthlyNo)
        //display returns card with heroin use last month pie chart. it also returns a table with a description as the header an two rows. One row for users that selected yes and on for users that selected no
        heroinDisplay= 
        <Box mx='auto' width="75%" >
          <Card>
          <CardContent>
            <Divider />
            <HeroinMonthPie />  
            <Table className={classes.table}>
                  <TableHead>
                    <TableRow>
                      <TableCell><h3>YourPath assessment takers were given the choice of entering how many days in the previous month they used heroin or fentanyl powder. This pie graph shows the percentage of people who had used at least one day in the previous month.</h3></TableCell><TableCell></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><p>The number of users that indicated using heroin in the last month.</p></TableCell><TableCell align="right">{heroinMonthlyYes}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><p>The number of users that indicated they haven't used heroin in the last month.</p></TableCell><TableCell align="right">{heroinMonthlyNo}</TableCell>
                    </TableRow>
                  </TableHead>
                </Table>
          </CardContent>
          </Card>
        </Box>
        })
      }//end if
      //renturn heroinDisplay
      return heroinDisplay;
    }

    //conditionally render card to dom
    return(
        <>
        {answerHeroin()}
        </>
    )
}

export default HeroinMonth;
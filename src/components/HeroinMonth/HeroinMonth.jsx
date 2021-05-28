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
    let heroinMonthlyYes=0;
    let heroinMonthlyNo=0;

    //function to display count of Marijuana users in the last month
    const answerHeroin=()=>{
        let heroinDisplay=''
        console.log('in answer')
        //if no data exists
        if(!form){
            heroinDisplay=<p>loading</p>
        }//end if
        //if data exists map through for counts of yes and no
        if(form.length){
        form.map((item)=>{
          let answer=item.answers[138]
         if(answer.answer){
            heroinMonthlyYes++
         }//end if
         else{
            heroinMonthlyNo++
        }//end else
        console.log(heroinMonthlyYes, heroinMonthlyNo)
        //display for counts
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
                      <TableCell><p>The number of users that anwered YES to using Heroin in their lifetime.</p></TableCell><TableCell align="right">{heroinMonthlyYes}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><p>The number of users that anwered NO to using Heroin in their lifetime.</p></TableCell><TableCell align="right">{heroinMonthlyNo}</TableCell>
                    </TableRow>
                  </TableHead>
                </Table>
          </CardContent>
          </Card>
        </Box>
        })
      }//end if
      return heroinDisplay;
    }

    //render to dom
    return(
        <>
        {answerHeroin()}
        </>
    )
}

export default HeroinMonth;
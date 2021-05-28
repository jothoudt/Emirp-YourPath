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
import HallucinogenMonthPie from '../HallucinogenMonthPie/HallucinogenMonthPie';
import Box from '@material-ui/core/Box';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';


function HallucinogenMonth(){

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
    let hallucinogenMonthlyYes=0;
    let hallucinogenMonthlyNo=0;

    //function to display count of Hallucinogen users in the last month
    const answerHallucinogen=()=>{
        let hallucinogenDisplay=''
        console.log('in answer')
        //if no data exists
        if(!form){
            hallucinogenDisplay=<p>loading</p>
        }//end if
        //if data exists map through for counts of yes and no
        if(form.length){
        form.map((item)=>{
          let answer=item.answers[141]
         if(answer.answer){
            hallucinogenMonthlyYes++
         }//end if
         else{
            hallucinogenMonthlyNo++
        }//end else
        console.log(hallucinogenMonthlyYes, hallucinogenMonthlyNo)
        //display for counts
        hallucinogenDisplay= 
        <Box mx='auto' width="75%" >
          <Card>
            <CardContent>
              <HallucinogenMonthPie />
              <Table className={classes.table}>
                  <TableHead>
                    <TableRow>
                      <TableCell><h3>YourPath assessment takers were given the choice of entering how many days in the previous month they used hallucinogens, including LSD, mushrooms or DMT. This pie graph shows the percentage of people who had used at least one day in the previous month.</h3></TableCell><TableCell></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><p>The number of users that anwered YES to using Hallucinogen in their last month.</p></TableCell><TableCell align="right">{hallucinogenMonthlyYes}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><p>The number of users that anwered NO to using Hallucinogen in their last month.</p></TableCell><TableCell align="right">{hallucinogenMonthlyNo}</TableCell>
                    </TableRow>
                  </TableHead>
                </Table>
            </CardContent>
          </Card>
        </Box>
        })
      }//end if
      return hallucinogenDisplay;
    }

    //render to dom
    return(
        <>
        {answerHallucinogen()}
        </>
    )
}

export default HallucinogenMonth;
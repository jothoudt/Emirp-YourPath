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

//returns the results of Hallucinogen use in the last month
function HallucinogenMonth(){
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
    let hallucinogenMonthlyYes=0;
    let hallucinogenMonthlyNo=0;

    //function to display count of Hallucinogen users in the last month
    const answerHallucinogen=()=>{
        let hallucinogenDisplay=''
        console.log('in answer')
        //if no data exists display loading
        if(!form){
            hallucinogenDisplay=<p>loading</p>
        }//end if
        //if data exists map through for counts of yes and no
        if(form.length){
        form.map((item)=>{
          //targets specific question number to return results from the api
          let answer=item.answers[141]
          //if answer.answer exists add one to hallucinogenMonthlyYes
         if(answer.answer){
            hallucinogenMonthlyYes++
         }//end if
         //if answer.answer doesn't exist add one to hallucinogenMonthlyNo
         else{
            hallucinogenMonthlyNo++
        }//end else
        console.log(hallucinogenMonthlyYes, hallucinogenMonthlyNo)
        //display returns pie chart of Hallucinogen use in the last month. It also returns a small table with a description as the header and two rows. One for users that selected yes and one for users that selected no.
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
      //return display
      return hallucinogenDisplay;
    }

    //conditionally render Hallucinogen use in the last month card to dom
    return(
        <>
        {answerHallucinogen()}
        </>
    )
}

export default HallucinogenMonth;
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
import OTCMonthPie from '../OTCMonthPie/OTCMonthPie';
import Box from '@material-ui/core/Box';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';


function OTCMonth(){
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
    let OTCMonthlyYes=0;
    let OTCMonthlyNo=0;

    //function to display count of OTC users in the last month
    const answerOTC=()=>{
        let OTCDisplay=''
        console.log('in answer')
        //if no data exists
        if(!form){
          OTCDisplay=<p>loading</p>
        }//end if
        //if data exists map through for counts of yes and no
        if(form.length){
        form.map((item)=>{
          let answer=item.answers[143]
         if(answer.answer){
          OTCMonthlyYes++
         }//end if
         else{
          OTCMonthlyNo++
        }//end else
        console.log(OTCMonthlyYes, OTCMonthlyNo)
        //display for counts
        OTCDisplay= 
        <Box mx='auto' width="75%" >
          <Card>
          <CardContent>
            <OTCMonthPie />
            <Table className={classes.table}>
                  <TableHead>
                    <TableRow>
                      <TableCell><h3>This pie chart shows the percentage of people taking YourPath’s assessment who indicated that they had used over-the-counter drugs such as Robitussin or Imodium at some point in the last month.</h3></TableCell><TableCell></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><p>The number of users that anwered YES to using Over-the-Counter substances in their last month.</p></TableCell><TableCell align="right">{OTCMonthlyYes}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><p>The number of users that anwered NO to using Over-the-Counter substances in their last month.</p></TableCell><TableCell align="right">{OTCMonthlyNo}</TableCell>
                    </TableRow>
                  </TableHead>
                </Table> 
          </CardContent>
          </Card>
        </Box>
        })
      }//end if
      return OTCDisplay;
    }

    //render to dom
    return(
        <>
        {answerOTC()}
        </>
    )
}

export default OTCMonth;
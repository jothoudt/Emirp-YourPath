import React from 'react';
import {useSelector} from 'react-redux';
import { 
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Typography
} from '@material-ui/core';
import Box from '@material-ui/core/Box';
import HeroinPieChartDetails from '../HeroinPieChartDetails/HeroinPieChartDetails';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';


function HeroinAllTime(){

  const useStyles = makeStyles({
    table: {
      width: "50%",
      margin: 'auto',
      marginBottom: '50px',
    },
  });
  const classes=useStyles();

    const form = useSelector((store)=>store.form);

    const answerHeroin=()=>{

        let heroinYes=0;
        let heroinNo=0;
        let heroinDisplay=''
        console.log('in answer')
        if(!form){
          heroinDisplay=<p>loading</p>
        }
        if(form.length){
        form.map((item)=>{
          let answer=item.answers[122]
         if(answer.answer==='Yes'){
             heroinYes++
         }
         else{
             heroinNo++
         }
        //  if(!answer.answer){
        //      methNo++
        // }
        console.log(heroinYes, heroinNo)
        heroinDisplay= 
        <Box mx='auto' width="75%" >
          <Card>
            <CardContent>
              <Divider />   
              <HeroinPieChartDetails />    
              <Table className={classes.table}>
                  <TableHead>
                    <TableRow>
                      <TableCell><h3>This pie chart shows the percentage of people taking YourPath’s assessment who indicated that they had used heroin or fentanyl powder at some point in their life.</h3></TableCell><TableCell></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><p>The number of users that anwered YES to using Heroin in their lifetime.</p></TableCell><TableCell align="right">{heroinYes}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><p>The number of users that anwered NO to using Heroin in their lifetime.</p></TableCell><TableCell align="right">{heroinNo}</TableCell>
                    </TableRow>
                  </TableHead>
                </Table>
            </CardContent>
          </Card>
        </Box>
        })
      }
      return heroinDisplay;
    }

    return(
        <>
        {answerHeroin()}
        </>
    )
}

export default HeroinAllTime;
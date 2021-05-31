import React from 'react';
import {useSelector} from 'react-redux'
import OTCPieChartDetails from '../OTCPieChartDetails/OTCPieChartDetails'
import { 
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Typography
} from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';


function OTCAllTime(){

  const useStyles = makeStyles({
    table: {
      width: "50%",
      margin: 'auto',
      marginBottom: '50px',
    },
  });
  const classes=useStyles();

    const form = useSelector((store)=>store.form);

    let OTCYes=0;
    let OTCNo=0;
    
     // const mjMap=form[119].answer
   
     const answer1 =()=>{
       let display=''
       console.log('in answer')
       if(!form){
         display=<p>loading</p>
       }
       if(form.length){
       form.map((item)=>{
         let answer=item.answers[127]
        if(answer.answer==='Yes'){
            OTCYes++
        }
        else{
            OTCNo++
       }
       console.log(OTCYes, OTCNo)
       display= 
      <Box mx='auto' width="75%" >
        <Card>
          <CardContent>
            <OTCPieChartDetails />
            <Table className={classes.table}>
                  <TableHead>
                    <TableRow>
                      <TableCell><h3>This pie chart shows the percentage of people taking YourPath’s assessment who indicated that they had used over-the-counter drugs such as Robitussin or Imodium at some point in their life.</h3></TableCell><TableCell></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><p>The number of users that anwered YES to using Over-the-Counter substances in their lifetime.</p></TableCell><TableCell align="right">{OTCYes}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><p>The number of users that anwered NO to using Over-the-Counter substances in their lifetime.</p></TableCell><TableCell align="right">{OTCNo}</TableCell>
                    </TableRow>
                  </TableHead>
                </Table> 
          </CardContent>
        </Card>
      </Box>
       })
     }
     return display;
   }
    return(
        <>
        {answer1()}
        </>

    )
}

export default OTCAllTime;
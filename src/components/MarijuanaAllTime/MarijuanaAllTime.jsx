import React from 'react';
import {useSelector} from 'react-redux'
import { 
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Typography
} from '@material-ui/core';
import MarijuanaPieChart from '../MarijuanaPieChart/MarijuanaPieChart';
import Box from '@material-ui/core/Box';
import MarijuanaPieChartDetails from '../MarijuanaPieChartDetails/MarijuanaPieChartDetails';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';

function MarijuanaAllTime(){

  const useStyles = makeStyles({
    table: {
      width: "50%",
      margin: 'auto',
      marginBottom: '50px',
    },
  });
  const classes=useStyles();
    const form = useSelector((store)=>store.form);

    let marijuanaYes=0;
    let marijuanaNo=0;
    
     // const mjMap=form[119].answer
   
     const answer1 =()=>{
       let display=''
       console.log('in answer')
       if(!form){
         display=<p>loading</p>
       }
       if(form.length){
       form.map((item)=>{
         let answer=item.answers[119]
        if(answer.answer==='Yes'){
            marijuanaYes++
        }
        else{
            marijuanaNo++
       }
       console.log(marijuanaYes, marijuanaNo)
       display= 
       <Box mx='auto' width="75%" >
       <Card>
        <CardContent>
          <Divider />
          <MarijuanaPieChartDetails />
          <Table className={classes.table}>
                  <TableHead>
                    <TableRow>
                      <TableCell><h3>This pie chart shows the percentage of people completing their assessment through YourPath who marked that they had used marijuana, including wax, K2 and spice, at some point in their life.</h3></TableCell><TableCell></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><p>The number of users that anwered YES to using Marijuana in their lifetime.</p></TableCell><TableCell align="right">{marijuanaYes}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><p>The number of users that anwered NO to using Marijuana in their lifetime.</p></TableCell><TableCell align="right">{marijuanaNo}</TableCell>
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

export default MarijuanaAllTime;
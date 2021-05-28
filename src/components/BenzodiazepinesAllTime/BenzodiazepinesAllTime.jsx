import React from 'react';
import {useSelector} from 'react-redux';
//pass thru pie chart
import BenzodiazepinesPieChart from '../BenzodiazepinesPieChart/BenzodiazepinesPieChart';
import BenzodiazepinesPieChartDetails from '../BenzoDiazepinesPieChartDetails/BenzoDiazepinesPieChartDetails';
//styling for card
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


function BenzodiazepinesAllTime(){

  const useStyles = makeStyles({
    table: {
      width: "50%",
      margin: 'auto',
      marginBottom: '50px',
    },
  });
  const classes=useStyles();

    const form = useSelector((store)=>store.form);

    let benzYes=0;
    let benzNo=0;
    
     // const mjMap=form[119].answer
    const answer1 =()=>{
      let display=''
      console.log('in answer')
      if(!form){
        display=<p>loading</p>
      }
      if(form.length){
        form.map((item)=>{
          let answer=item.answers[124]
        if(answer.answer === 'Yes'){
            benzYes++
        }
        else {
            benzNo++
      }
      console.log(benzYes, benzNo)
      display= 
      <Box mx='auto' width="75%" >
        <Card>
          <CardContent>
            <Divider />
            <BenzodiazepinesPieChartDetails />
            <Table className={classes.table}>
                  <TableHead>
                    <TableRow>
                      <TableCell><h3>This pie chart shows the percentage of people taking YourPath’s assessment who indicated that they had used benzodiazepines such as Xanax, Klonopin or Valium, at some point in their life.   </h3></TableCell><TableCell></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><p>The number of users that anwered YES to using Benzodiazepines in their lifetime.</p></TableCell><TableCell align="right">{benzYes}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><p>The number of users that anwered NO to using Benzodiazepines in their lifetime.</p></TableCell><TableCell align="right">{benzNo}</TableCell>
                    </TableRow>
                  </TableHead>
                </Table>
            <Divider />
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

export default BenzodiazepinesAllTime;
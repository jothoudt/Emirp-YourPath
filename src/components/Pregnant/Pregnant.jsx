import React from 'react';
import {useSelector} from 'react-redux';
//styling for card
import { 
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Typography
} from '@material-ui/core';
import HealthStatistics from '../HealthStatistics/HealthStatistics';
import Box from '@material-ui/core/Box';
import PregnantPieChartDetails from '../PregnantPieChartDetails/PregnantPieChartDetails';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';

function Pregnant(){

  const useStyles = makeStyles({
    table: {
      width: "50%",
      margin: 'auto',
      marginBottom: '50px',
    },
  });
  const classes=useStyles();

    const form = useSelector((store)=>store.form);

    let pregnant=0;
    let notPregnant=0;
    let notSure=0;

    
     // const mjMap=form[119].answer
    const answer1 =()=>{
      let display=''
      console.log('in answer')
      if(!form){
        display=<p>loading</p>
      }
      if(form.length){
        form.map((item)=>{
          let answer=item.answers[103]
        if(answer.answer === 'Yes'){
          pregnant++
        }
        else if (answer.answer === 'No') {
          notPregnant++
        }
        else if (answer.answer === 'Not Sure') {
          notSure++
        }
      console.log('in pregnant:', pregnant, notPregnant, notSure)
      display=
      <Box mx='auto' width="75%" >
        <Card>
          <CardContent>    
            <PregnantPieChartDetails /> 
            <Table className={classes.table}>
                  <TableHead>
                    <TableRow>
                      <TableCell><h3>The YourPath assessment gives takers the option of marking whether they are pregnant, plus a third option for anyone unsure. This pie chart shows the overall percentages for the total number of people who marked pregnant, not pregnant or not sure.</h3></TableCell><TableCell></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><p>The number of users that anwered YES to being pregnant.</p></TableCell><TableCell align="right">{pregnant}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><p>The number of users that anwered NO to being pregnant.</p></TableCell><TableCell align="right">{notPregnant}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><p>The number of users that anwered NOT SURE to being pregnant.</p></TableCell><TableCell align="right">{notSure}</TableCell>
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
        <HealthStatistics />
        {answer1()}
        </>

    )
}

export default Pregnant;
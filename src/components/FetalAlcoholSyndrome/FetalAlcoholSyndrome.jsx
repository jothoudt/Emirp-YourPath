import React from 'react';
import {useSelector} from 'react-redux'
//pass thru pie chart
import FetalAlcoholSyndromePieChartDetails from '../FetalAlcoholSyndromePieChartDetails/FetalAlcoholSyndromePieChartDetails';
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
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';



function FetalAlcoholSyndrome(){

  const useStyles = makeStyles({
    table: {
      width: "50%",
      margin: 'auto',
      marginBottom: '50px',
    },
  });
  const classes=useStyles();

    const form = useSelector((store)=>store.form);

    let fasYes=0;
    let fasNo=0;
    
     // const mjMap=form[119].answer

    const answer1 =()=>{
       let display=''
       console.log('in answer')
       if(!form){
         display=<p>loading</p>
       }
       if(form.length){
       form.map((item)=>{
         let answer=item.answers[108]
        if(answer.answer==='Yes'){
            fasYes++
        }
        else{
            fasNo++
       }
       console.log(fasYes, fasNo)
      display= 
      <Box mx='auto' width="75%" >
          <Card>
            <CardContent>
              <FetalAlcoholSyndromePieChartDetails />
              <Table className={classes.table}>
                  <TableHead>
                    <TableRow>
                      <TableCell><h3>People taking the YourPath assessment are given the option of indicating whether they have been diagnosed with fetal alcohol syndrome. This pie chart shows the percentage of people who marked “Yes.” </h3></TableCell><TableCell></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><p>The number of users that anwered YES to being diagnosed with Fetal Alcohol Syndrome</p></TableCell><TableCell align="right">{fasYes}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><p>The number of users that anwered NO to being diagnosed with Fetal Alcohol Syndrome</p></TableCell><TableCell align="right">{fasNo}</TableCell>
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

export default FetalAlcoholSyndrome;
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


//function that returns the results of users with Fetal Alcohol Syndrome
function FetalAlcoholSyndrome(){
//used to style the table
  const useStyles = makeStyles({
    table: {
      width: "50%",
      margin: 'auto',
      marginBottom: '50px',
    },
  });
  //define classes to style table
  const classes=useStyles();
  //get info from the store
    const form = useSelector((store)=>store.form);
    //define variables to count
    let fasYes=0;
    let fasNo=0;
//conditionally renders results
    const answer1 =()=>{
       let display=''
       console.log('in answer')
       //if form data doesn't exist display loading
       if(!form){
         display=<p>loading</p>
       }//end if
       //if form information does exist map through the results
       if(form.length){
       form.map((item)=>{
         //target a specific question to return results from the api
         let answer=item.answers[108]
         //if answer.answer is yes add one to fasYes
        if(answer.answer==='Yes'){
            fasYes++
        }//end if
        //if answer.answer is no or no answer add one to fasNo
        else{
            fasNo++
       }//end else
       console.log(fasYes, fasNo)
       //display that returns a card with a pie chart and a small table that has a description as the header and display the results in two rows. One for users that selected yes and one for users that selected no
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
     //return display
     return display;
   }
   //renders health statistics dropdown and conditionally renders the Fetal Alcohol Syndrome Card.
    return(
        <>
        <HealthStatistics />
        {answer1()}
        </>

    )
}

export default FetalAlcoholSyndrome;
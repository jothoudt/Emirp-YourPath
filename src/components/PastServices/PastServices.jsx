import React from 'react';
import {useSelector} from 'react-redux';
//pass thru chart
import PastServicesBar from '../PastServicesBar/PastServicesBar';
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
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';
//function returns results of past services used
function PastServices(){
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
  //get data from the store
    const form = useSelector((store)=>store.form);
    //define necessary variables
    let psychWard=0;
    let detox=0;
    let residential=0;
    let outpatient=0;
    let mutualSupport=0;
    let therapy=0;
    let medicationAssisted=0;
    let prescribed=0;
    let soberHousing=0;
    let declined=0;
    //function conditionally renders a bar chart to the dom
    const answer1 =()=>{
      let display=''
      console.log('in answer')
      //if form data doesn't exist, display loading
      if(!form){
        display=<p>loading</p>
      }//end if
      //if form data does exist, map through data
      if(form.length){
        form.map((item)=>{
          console.log( 'item', item );
          //target specific question number to return results from the api
          let answer=item.answers[113]
          console.log( 'past services:', answer.answer );
          //if answer.answer exists proceed through next set of conditionals, adding one to the variable in the matching conditional
        if ( answer.answer ) {
          let answerArray = answer.answer
          console.log( 'answer length:', answerArray.length );
          answerArray.map( ( itemAnswer )=>{  
            if(itemAnswer === 'A psych ward or a psychiatric hold'){
              psychWard++
            }//end if
            else if (itemAnswer === 'Detox') {
              detox++
            }//end else if
            else if (itemAnswer === 'Residential Treatment') {
              residential++
            }//end else if
            else if (itemAnswer === 'Outpatient treatment') {
              outpatient++
            }//end else if
            else if (itemAnswer === 'Attended mutual support meetings (AA, NA, SMART recovery, etc...)') {
              mutualSupport++
            }//end else if
            else if (itemAnswer === 'Attended individual mental health therapy') {
              therapy++
            }//end else if
            else if (itemAnswer === 'Medication-assisted treatment (i.e. methadone, Vivitrol/Naltrexone or Suboxone/buprenorphine)') {
              medicationAssisted++
            }//end else if
            else if (itemAnswer === 'Been prescribed medication for mental health issues (depression, anxiety, sleep, etc...)') {
              prescribed++
            }//end else if
            else if (itemAnswer === 'Sober Housing') {
              soberHousing++
            }//end else if
        })  
      }
      //if answer.answer doesn't exist or declined add one to decline
        else{
          declined++
        }//end else
      //display returns a card with a bar chart and a table of detailed information of past services used
      display=
      <Box mx='auto' width="75%" >
        <Card>
          <CardContent>
            <PastServicesBar />  
            <Table className={classes.table}>
                  <TableHead>
                    <TableRow>
                      <TableCell><h3>Assessment takers have the option to indicate the types of support services they’ve used in the past. Because the form allows users to choose more than one, we used a bar chart to show the total count of services used, by category.</h3></TableCell><TableCell></TableCell>
                    </TableRow>
                    </TableHead>
                    <TableRow>
                      <TableCell><p>The number of users that have used a psych ward or a psychiatric hold</p></TableCell><TableCell align="right">{psychWard}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><p>The number of users that have used Detox</p></TableCell><TableCell align="right">{detox}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><p>The number of users that have used Residential Treatment.</p></TableCell><TableCell align="right">{residential}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><p>The number of users that have used Outpatient Treatment</p></TableCell><TableCell align="right">{outpatient}</TableCell> 
                    </TableRow>
                    <TableRow>
                      <TableCell><p>The number of users that have attended mutual support meetings (AA, NA, SMART recovery, etc...).</p></TableCell><TableCell align="right">{mutualSupport}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><p>The number of users that have attended individual mental health therapy.</p></TableCell><TableCell align="right">{therapy}</TableCell> 
                    </TableRow>
                    <TableRow>
                      <TableCell><p>The number of users that have used Medication-assisted treatment, i.e. methadone, Vivitrol/Naltrexone or Suboxone/buprenorphine.</p></TableCell><TableCell align="right">{medicationAssisted}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><p>The number of users that have Been prescribed medication for mental health issues, i.e. depression, anxiety, sleep, etc....</p></TableCell><TableCell align="right">{prescribed}</TableCell> 
                    </TableRow>
                    <TableRow>
                      <TableCell><p>The number of users that have used Sober Housing.</p></TableCell><TableCell align="right">{soberHousing}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><p>The number of users that declined to answer.</p></TableCell><TableCell align="right">{declined}</TableCell> 
                    </TableRow>
                </Table>
          </CardContent>
        </Card>
      </Box>

      })
    }
    return display;
  }
  //render the health statistics dropdown menu and conditionally render card to the DOM
    return(
        <>
        <HealthStatistics />
        {answer1()}
        </>

    )
}

export default PastServices;
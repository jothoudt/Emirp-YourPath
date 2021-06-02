import React from 'react';
import {useSelector} from 'react-redux';
//pass thru pie chart
import SexualOrientationPieChart from '../SexualOrientationPieChart/SexualOrientationPieChart';
//styling for card
import { 
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Typography
} from '@material-ui/core';
import Demographics from '../Demographics/Demographics';
import Box from '@material-ui/core/Box';
import SexualOrientationPieChartDetails from '../SexualOrientationPieChartDetails/SexualOrientationPieChartDetails';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';
//returns all the results of sexual orientation
function SexualOrientation(){
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
  //get info from the store
    const form = useSelector((store)=>store.form);
    //variables to target
    let heterosexual=0;
    let homosexual=0;
    let bisexual=0;
    let asexual=0;
    let noDisclosure=0;
    //conditional rendering of the chart
    const answer1 =()=>{
      let display=''
      console.log('in answer')
      ///if no form information display loading
      if(!form){
        display=<p>loading</p>
      }
      //if form information map 
      if(form.length){
        form.map((item)=>{
          //target specific question number to return results from the api
          let answer=item.answers[97]
          //if answer.answer matches the string add one to the variable in the matching conditional
        if(answer.answer === 'Heterosexual (straight)'){
          heterosexual++
        }//end if
        else if (answer.answer === 'Homosexual') {
          homosexual++
        }//end else if
        else if (answer.answer === 'Bisexual') {
          bisexual++
        }//end else if
        else if (answer.answer === 'Asexual') {
          asexual++
        }//end else if
        //if answer.answer doesn't exist, add one to noDisclosure
        else {
          noDisclosure++
      }
      console.log('in orientation:', heterosexual, homosexual, bisexual, asexual)
      //display returns a card with a pie chart and a table that displays all of the sexual orientation info in text form
      display= 
      <Box mx='auto' width="75%" >
        <Card>
          <CardContent>
            <SexualOrientationPieChartDetails />  
            <Table className={classes.table}>
                  <TableHead>
                    <TableRow>
                      <TableCell><h3>Assessment takers through YourPath’s web portal have the option of indicating their sexual orientation across four options: heterosexual, homosexual, bisexual or asexual. This pie chart shows a percentage breakdown of each, plus how many declined to answer.</h3></TableCell><TableCell></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><p>The number of users that identified as heterosexual.</p></TableCell><TableCell align="right">{heterosexual}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><p>The number of users that identified as homosexual.</p></TableCell><TableCell align="right">{homosexual}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><p>The number of users that identified as bisexual.</p></TableCell><TableCell align="right">{bisexual}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><p>The number of users that identified as asexual.</p></TableCell><TableCell align="right">{asexual}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><p>The number of users that did not disclose their sexual orientation.</p></TableCell><TableCell align="right">{noDisclosure}</TableCell>
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
  //renders demographic dropdown menu and conditionally render card
    return(
        <>
        <Demographics />
        {answer1()}
        </>

    )
}

export default SexualOrientation;
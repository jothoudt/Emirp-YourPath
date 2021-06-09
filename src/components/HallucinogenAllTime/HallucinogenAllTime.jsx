import React from 'react';
import {useSelector} from 'react-redux';
//for card styling
import { 
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Typography
} from '@material-ui/core';
import HallucinogenPieChartDetails from '../HallucinogenPieChartDetails/HallucinogenPieChartDetails';
import Box from '@material-ui/core/Box';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';

//function to return results of Hallucinogen use during the users lifetime
function HallucinogenAllTime(){
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
  //get data from the store
    const form = useSelector((store)=>store.form);
    //define variables to count
    let hallucinogenYes=0;
    let hallucinogenNo=0;
    
     // const mjMap=form[119].answer
    const answer1 =()=>{
      let display=''
      console.log('in answer')
      //if form data doesn't exist display loading
      if(!form){
        display=<p>loading</p>
      }//end if 
      //if form data does exist map through the results
      if(form.length){
      form.map((item)=>{
        //if api number exists proceed through conditionals
        if(item.answers[125]){
        //target a specific question number to get results from the api
        let answer=item.answers[125]
        ///if answer.answer is yes add one to hallucinogenYes
        if(answer.answer==='Yes'){
            hallucinogenYes++
        }//end if
        //if the answer is no or unanswered add one to hallucinogenNo
        else{
            hallucinogenNo++
       }//end else
    }
    //if api number doesn't exist add one to hallucinogenNo
    else{
      hallucinogenNo++
    }
      console.log(hallucinogenYes, hallucinogenNo)
      //display returns a card with a pie chart, a table with the description as the header and two table rows. One row is for users that answered yes. The other is for users that answered no.
      display= 
      <Box mx='auto' width="75%" >
        <Card>
          <CardContent>
            <HallucinogenPieChartDetails />
            <Table className={classes.table}>
                  <TableHead>
                    <TableRow>
                      <TableCell><h3>This pie chart shows the percentage of people taking YourPath’s assessment who indicated that they had used hallucinogens, including LSD, mushrooms or DMT, at some point in their life. </h3></TableCell><TableCell></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><p>The number of users that anwered YES to using Hallucinogen in their lifetime.</p></TableCell><TableCell align="right">{hallucinogenYes}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><p>The number of users that anwered NO to using Hallucinogen in their lifetime.</p></TableCell><TableCell align="right">{hallucinogenNo}</TableCell>
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
  //conditionally render card to the DOM
    return(
        <>
        {answer1()}
        </>

    )
}

export default HallucinogenAllTime;
import React from 'react';
import {useSelector} from 'react-redux';
//pass thru bar chart
import JusticeInvolvedBar from '../JusticeInvolvedBar/JusticeInvolvedBar';
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
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';

//this function returns the results of JusticeInvolved
function JusticeInvolved(){
  //used to the style the table
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
    //define necessary variables
    let none=0;
    let past=0;
    let awaitingSentencing=0;
    let drugCourt=0;
    let outOnBail=0;
    let probation=0;
    let parole=0;
    let workhouse=0;
    let declined=0;
    
   //conditionakly render card
    const answer1 =()=>{
      let display=''
      console.log('in answer')
      //if form data doesn't exist display loading
      if(!form){
        display=<p>loading</p>
      }//end if
      //if form data does exist map through the data
      if(form.length){
        form.map((item)=>{
          console.log( 'item', item );
          //target specific question number to return the results from the api
          let answer=item.answers[106]
          console.log( 'justice involved:', answer.answer );
          //if answer.answer exists proceed through the next set of conditionals and add one to the matching itemAnswer
        if ( answer.answer ) {
          let answerArray = answer.answer
          console.log( 'answer length:', answerArray.length );
          answerArray.map( ( itemAnswer )=>{  
            if(itemAnswer === 'No current or past legal issues'){
              none++
            }//end if
            else if (itemAnswer === 'Past issues, no current') {
              past++
            }//end else if
            else if (itemAnswer === 'Awaiting sentencing') {
              awaitingSentencing++
            }//end else if
            else if (itemAnswer === 'Part of drug court or other treatment court') {
              drugCourt++
            }//end else if
            else if (itemAnswer === 'Out on bail') {
              outOnBail++
            }//end else if
            else if (itemAnswer === 'On probation') {
              probation++
            }//end else if
            else if (itemAnswer === 'On parole') {
              parole++
            }//end else if
            else if (itemAnswer === 'In the workhouse') {
              workhouse++
            }//end else if
        })
      }
      //if no answer or declined add one to declined
        else{
          declined++
        }
      //console.log('in gender:', male, female, transgender, nonBinary, declined )
      //display returns a card with a bar chart and a table that displays all of the data in text form
      display= 
      <Box mx='auto' width="75%" >
        <Card>
          <CardContent>
            <JusticeInvolvedBar />  
            <Table className={classes.table}>
                  <TableHead>
                    <TableRow>
                      <TableCell><h3>This bar chart shows the various responses to a question in YourPath’s assessment that asks the taker to describe their legal issues. Because the person can mark multiple options, we used a bar chart instead of a pie graph to give count totals for each answer category.</h3></TableCell><TableCell></TableCell>
                    </TableRow>
                    </TableHead>
                    <TableRow>
                      <TableCell><p>The number of users that selected no current or past legal issues.</p></TableCell><TableCell align="right">{none}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><p>The number of users that selected Past issues, no current.</p></TableCell><TableCell align="right">{past}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><p>The number of users that selected Awaiting sentencing.</p></TableCell><TableCell align="right">{awaitingSentencing}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><p>The number of users that selected Part of drug court or other treatment court .</p></TableCell><TableCell align="right">{drugCourt}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><p>The number of users that selected Out on bail.</p></TableCell><TableCell align="right">{outOnBail}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><p>The number of users that selected On probation.</p></TableCell><TableCell align="right">{probation}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><p>The number of users that selected On parole.</p></TableCell><TableCell align="right">{parole}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><p>The number of users that selected In the workhouse.</p></TableCell><TableCell align="right">{workhouse}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><p>The number of users that Declined to answer.</p></TableCell><TableCell align="right">{declined}</TableCell>
                    </TableRow>
                </Table>
          </CardContent>
        </Card>
      </Box>
      })
    }
    return display;
  }
  //render Demographics dropdown menu and conditionally renders the card with a chart and table
    return(
        <>
        <Demographics />
        {answer1()}
        </>

    )
}

export default JusticeInvolved;
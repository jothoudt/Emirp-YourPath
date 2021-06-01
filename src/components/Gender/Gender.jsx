import React from 'react';
import {useSelector} from 'react-redux'
//pass thru bar chart
import GenderBarChart from '../GenderBarChart/GenderBarChart';
//styling
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

function Gender(){
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
    //define variables to count
    let male=0;
    let female=0;
    let transgender=0;
    let nonBinary=0;
    let declined = 0
    
    //function to conditionally render results from Gender question
    const answer1 =()=>{
      let display=''
      console.log('in answer')
      //if form data doesn't exist display loading
      if(!form){
        display=<p>loading</p>
      }
      //if form data does exist map through the form
      if(form.length){
        form.map((item)=>{
          console.log( 'item', item );
          //target a specific question number to get results from the api
          let answer=item.answers[83]
          console.log( 'gender answer:', answer.answer );
          //if answer.anser exists go through the next set of coniditionals
        if ( answer.answer ) {
          let answerArray = answer.answer
          console.log( 'answer length:', answerArray.length );
          answerArray.map( ( itemAnswer )=>{
            //if answer is male add one to male
            if(itemAnswer === 'Male'){
              male++
            }//end if
            //if answer is female add one to female
            else if (itemAnswer === 'Female') {
              female++
            }//end else if 
            //if answer is transgender add one to transgender
            else if (itemAnswer === 'Transgender') {
              transgender++
            }//end else if
            //if answer is non-binary add one to nonBinary
            else if (itemAnswer === 'Non-binary') {
              nonBinary++
            }//end else if
        })
      }
      //if no answer add one to declined
        else{
          declined++
        }//end else
      console.log('in gender:', male, female, transgender, nonBinary, declined )
      //display that returns a bar char along with table. The description of the numbers will be the table header and return 5 table rows. One for each possible answer
      display= 
      <Box mx='auto' width="75%" >
          <Card> 
            <CardContent>
              <GenderBarChart />
              <Table className={classes.table}>
                  <TableHead>
                    <TableRow>
                      <TableCell><h3>People taking the YourPath assessment are given the option of indicating their gender. Because the form allows more than one response, we used a bar chart to visualize the count totals of each category.</h3></TableCell><TableCell></TableCell>
                    </TableRow>
                    </TableHead>
                    <TableRow>
                      <TableCell><p>The number of users that identified as Male.</p></TableCell><TableCell align="right">{male}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><p>The number of users that identified as Female.</p></TableCell><TableCell align="right">{female}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><p>The number of users that identified as Transgender.</p></TableCell><TableCell align="right">{transgender}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><p>The number of users that identified as Non-binary</p></TableCell><TableCell align="right">{nonBinary}</TableCell>
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
    //return display
    return display;
  }
  //return demographics dropdown menu and conditionally render Gender card to the DOM
    return(
        <>
        <Demographics />
        {answer1()}
        </>

    )
}

export default Gender;
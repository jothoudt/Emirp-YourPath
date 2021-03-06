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
import OtherSubstanceAllTimePieDetails from '../OtherSubstancesAllTimePieDetails/OtherSubstancesAllTimePieDetails';
import Box from '@material-ui/core/Box';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';
//function returns results of Other substances use all time
function OtherSubstancesAllTime(){
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
  //get information from the store
    const form = useSelector((store)=>store.form);

    //variables for counting
    let otherYes=0;
    let otherNo=0;

    //function to display results
    const answerMeth =()=>{
       //variable to be returned
        let otherDisplay=''
        console.log('in answer')
        //if the form data doesn't exist, display loading
        if(!form){
          otherDisplay=<p>loading</p>
        }
        //map through form data and count yes/no answers
        if(form.length){
        form.map((item)=>{
          //if api number exists proceed through conditionals
          if(item.answers[128]){
            //target a specific question number to return the results from the api
            let answer=item.answers[128]
            //if answer.anser is yes add one to otherYes
          if(answer.answer==='Yes'){
             otherYes++
          }//end if
          //if answer.answer is no or no answer add one to otherNo
          else{
             otherNo++
          }//end else
        }//end if
        //if api number does not exist add one to otherNo
        else{
          otherNo++
        }//end else
        //console log results
        console.log(otherYes, otherNo)

        //display returns a card with a pie chart and a table with the details of other substances use all time
        otherDisplay= 
        <Box mx='auto' width="75%" >
          <Card>
            <CardContent>
              <OtherSubstanceAllTimePieDetails /> 
              <Table className={classes.table}>
                  <TableHead>
                    <TableRow>
                      <TableCell><h3>This pie chart shows the percentage of people taking YourPath???s assessment who indicated that they had used other substances such as bath salts, GHB, ketamine or khat at some point in their life.</h3></TableCell><TableCell></TableCell>
                    </TableRow>
                    </TableHead>
                    <TableRow>
                      <TableCell><p>The number of users that anwered YES to using Other Substances in their lifetime.</p></TableCell><TableCell align="right">{ otherYes}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><p>The number of users that anwered NO to using Other Substances in their lifetime.</p></TableCell><TableCell align="right">{otherNo}</TableCell>
                    </TableRow>
                </Table>
          </CardContent>
          </Card>
        </Box>
        })
      }
      //return display
      return otherDisplay;
    }

    //conditionally renders a card to the DOM
    return(
        <>
        {answerMeth()}
        </>
    )
}
export default OtherSubstancesAllTime;
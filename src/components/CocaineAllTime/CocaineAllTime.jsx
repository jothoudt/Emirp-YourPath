import React from 'react';
import {useSelector} from 'react-redux';
import { 
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Typography
} from '@material-ui/core';
import CocainePieChartDetails from '../CocainePieChartDetails/CocainePieChartDetails';
import Box from '@material-ui/core/Box';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';

//returns information of Cocaine usage among users in their lifetime
function CocaineAllTime(){
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
  //get information from the store
    const form = useSelector((store)=>store.form);
    //define variables to count
    let cocaineYes=0;
    let cocaineNo=0;
  
    //function that conditionally renders results to the dom
     const answer1 =()=>{
       let display=''
       console.log('in answer')
       //if form data doesn't exist display loading
       if(!form){
         display=<p>loading</p>
       }//end if 
       //if form data does exist, map through the information from the store
       if(form.length){
       form.map((item)=>{
         //if api number exists proceed through conditionals
         if(item.answers[120]){
           //target a specific question in the form to return answers from api
           let answer=item.answers[120]
           //if answer is Yes add one to cocaineYes
           if(answer.answer==='Yes'){
             cocaineYes++
           }//end if
            //if answer is no or no answer add one to cocaineNo
           else{
            cocaineNo++
           }//end else
          }
          //if api number doesn't exist add one to no
          else{
            cocaineNo++
          }
       console.log(cocaineYes, cocaineNo)
       //display returns a pie chart of cocaine use all time as well as a table to display a description and details in text form.
       display= 
       <Box mx='auto' width="75%" >
        <Card>
            <CardContent>
              <Divider />
              <CocainePieChartDetails />
              <Table className={classes.table}>
                  <TableHead>
                    <TableRow>
                      <TableCell><h3>This pie chart shows the percentage of people taking YourPath’s assessment who indicated that they had used cocaine, including powder or crack, at some point in their life.   </h3></TableCell><TableCell></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><p>The number of users that anwered YES to using Cocaine in their lifetime.</p></TableCell><TableCell align="right">{cocaineYes}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><p>The number of users that anwered NO to using Cocaine in their lifetime.</p></TableCell><TableCell align="right">{cocaineNo}</TableCell>
                    </TableRow>
                  </TableHead>
                </Table>

              <Divider />
            </CardContent>
        </Card>
       </Box>
       })
     }
     //return display
     return display;
   }
   //conditionally render results to the dom
    return(
        <>
        {answer1()}
        </>

    )
}

export default CocaineAllTime;
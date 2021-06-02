import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import RacePieChartDetails from '../RacePieChartDetails/RacePieChartDetails';
import { 
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Typography
} from '@material-ui/core';
import UserPage from '../UserPage/UserPage';
import { PlaylistAddOutlined } from '@material-ui/icons';
import Button from '@material-ui/core/Button';
import Demographics from '../Demographics/Demographics';
import Box from '@material-ui/core/Box';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';
//returns the results of race question
function Race(){
//use to style the able
  const useStyles = makeStyles({
    table: {
      width: "50%",
      margin: 'auto',
      marginBottom: '50px',
    },
  });
  //define classes to style table
  const classes=useStyles();
  // pulls down assessment results from the store
    const form = useSelector((store)=>store.form);
    const user = useSelector((store)=>store.user);

    const dispatch=useDispatch();

    // naming variables to track totals for each response category
    let blackOrAfricanAmerican=0;
    let eastAfricanSomaliAfricanBorn=0;
    let asian=0;
    let nativeHawaiinOrPacificIslander=0;
    let alaskaNative=0;
    let white=0;
    let nativeAmerican=0;
    let noDisclosure=0;
    
    //List of conditionals to sum totals for each category
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
         //target specific question number to return results from the api
         let answer=item.answers[95] 
         //if answer.answer matches the string add on to the variable in that conditional
        if(answer.answer==='Native American'){
          nativeAmerican++
        }//end if
        else if(answer.answer==='Black or African American'){
          blackOrAfricanAmerican++
        }//end else if
        else if(answer.answer==='East African/Somali/African-born'){
          eastAfricanSomaliAfricanBorn++
        }//end else if
        else if(answer.answer==='East African/Somali/African-born'){
          eastAfricanSomaliAfricanBorn++
        }//end else if
        else if(answer.answer==='Asian'){
          asian++
        }//end else if
        else if(answer.answer==='Native Hawaiian or Pacific Islander'){
          nativeHawaiinOrPacificIslander++
        }//end else if
        else if(answer.answer==='Alaska Native'){
          alaskaNative++
        }//end else if
        else if(answer.answer==='White'){
          white++
        }//end else if
        //if answer.answer doesn't exist, add one to noDisclosure
        else {
          noDisclosure++
        }//end else
        //display returns card with pie chart and table with the details of race
      display= 
      <Box mx='auto' width="75%" >
          <Card>
            <CardContent>
              <RacePieChartDetails />
              <Table className={classes.table}>
                  <TableHead>
                    <TableRow>
                      <TableCell><h3>YourPath’s assessment asks takers to describe their cultural background, including options for Black, East African/Somali/African Born, Asian, Native Hawaiin/Pacific Islander, Alaska native, white or Native American. This pie chart shows a breakdown of how people responded.</h3></TableCell><TableCell></TableCell>
                    </TableRow>
                    </TableHead>
                    <TableRow>
                      <TableCell><p>The number of users that identified as Black or African American.</p></TableCell><TableCell align="right">{blackOrAfricanAmerican}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><p>The number of users that identified as East African/Somali/African Born.</p></TableCell><TableCell align="right">{eastAfricanSomaliAfricanBorn}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><p>The number of users that identified as Asian.</p></TableCell><TableCell align="right">{asian}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><p>The number of users that identified as Native Hawaiin/Pacific Islander</p></TableCell><TableCell align="right">{nativeHawaiinOrPacificIslander}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><p>The number of users that identified as Alaska Native.</p></TableCell><TableCell align="right">{alaskaNative}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><p>The number of users that identified as White.</p></TableCell><TableCell align="right">{white}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><p>The number of users that identified as Native American.</p></TableCell><TableCell align="right">{nativeAmerican}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><p>The number of users that did not disclose.</p></TableCell><TableCell align="right">{noDisclosure}</TableCell>
                    </TableRow>
                </Table>
            </CardContent>
          </Card>
        </Box>
       })
     }
     return display;
   }
   //renders the demographic dropdown, and conditionally renders card
    return(
        <>
        <Demographics />
        {answer1()}
        </>

    )
}

export default Race;
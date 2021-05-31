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


function OtherSubstancesAllTime(){

  const useStyles = makeStyles({
    table: {
      width: "50%",
      margin: 'auto',
      marginBottom: '50px',
    },
  });
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
        //if the form data doesn't exist
        if(!form){
          otherDisplay=<p>loading</p>
        }
        //map through form data and count yes/no answers
        if(form.length){
        form.map((item)=>{
          let answer=item.answers[128]
         if(answer.answer==='Yes'){
             otherYes++
         }
         else{
             otherNo++
         }
        //console log results
        console.log(otherYes, otherNo)

        //define display
        otherDisplay= 
        <Box mx='auto' width="75%" >
          <Card>
            <CardContent>
              <OtherSubstanceAllTimePieDetails /> 
              <Table className={classes.table}>
                  <TableHead>
                    <TableRow>
                      <TableCell><h3>This pie chart shows the percentage of people taking YourPath’s assessment who indicated that they had used other substances such as bath salts, GHB, ketamine or khat at some point in their life.</h3></TableCell><TableCell></TableCell>
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

    //to display on the dom
    return(
        <>
        {answerMeth()}
        </>
    )
}
export default OtherSubstancesAllTime;
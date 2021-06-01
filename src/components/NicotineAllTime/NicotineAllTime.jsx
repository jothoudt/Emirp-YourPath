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
import NicotinePieChartDetails from '../NicotinePieChartDetails/NicotinePieChartDetails';
import Box from '@material-ui/core/Box';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';


function NicotineAllTime(){
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

    //select information from the store
    const form = useSelector((store)=>store.form);
    //variables to count
    let nicotineYes=0;
    let nicotineNo=0;
    //function to display
    const answerNicotine =()=>{
       
        let nicotineDisplay=''
        console.log('in answer')
        //if data doesn't exist display loading
        if(!form){
          nicotineDisplay=<p>loading</p>
        }
        //map through and count yes/no answers
        if(form.length){
        form.map((item)=>{
          //target specific question number to return results from the api
          let answer=item.answers[117]
          //if answer.answer is yes add one to nicotineYes
         if(answer.answer==='Yes'){
             nicotineYes++
         }//end if 
         //if answer.answer is no or no answer add one to nicotineNo
         else{
             nicotineNo++
         }
        console.log(nicotineYes, nicotineNo)

        //display returns a card with a pie chart and a table with all the details of nicotine use all time
        nicotineDisplay= 
        <Box mx='auto' width="75%" >
          <Card>
            <CardContent>
              <NicotinePieChartDetails />  
              <Table className={classes.table}>
                  <TableHead>
                    <TableRow>
                      <TableCell><h3>This pie chart shows the percentage of people taking YourPath’s assessment who indicated that they had used nicotine products (cigarettes, vaping, chew, cigars, etc.), at some point in their life.</h3></TableCell><TableCell></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><p>The number of users that anwered YES to using Nicotine in their lifetime.</p></TableCell><TableCell align="right">{nicotineYes}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><p>The number of users that anwered NO to using Nicotine in their lifetime.</p></TableCell><TableCell align="right">{nicotineNo}</TableCell>
                    </TableRow>
                  </TableHead>
                </Table> 
            </CardContent>
          </Card>
        </Box>
        })
      }
      return nicotineDisplay;
    }
    //conditionally renders Nicotine all time card to the DOM
    return(
        <>
        {answerNicotine()}
        </>
    )
}
export default NicotineAllTime;
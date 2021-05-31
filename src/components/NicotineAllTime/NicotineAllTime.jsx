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

  const useStyles = makeStyles({
    table: {
      width: "50%",
      margin: 'auto',
      marginBottom: '50px',
    },
  });
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
        //if data doesn't exist
        if(!form){
          nicotineDisplay=<p>loading</p>
        }
        //map through and count yes/no answers
        if(form.length){
        form.map((item)=>{
          let answer=item.answers[117]
         if(answer.answer==='Yes'){
             nicotineYes++
         }
         else{
             nicotineNo++
         }
        //  if(!answer.answer){
        //      methNo++
        // }
        console.log(nicotineYes, nicotineNo)

        //define display
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

    return(
        <>
        {answerNicotine()}
        </>
    )
}
export default NicotineAllTime;
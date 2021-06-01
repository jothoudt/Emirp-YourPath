import React from 'react';
import {useSelector} from 'react-redux'
import { 
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Typography
} from '@material-ui/core';
import MarijuanaPieChart from '../MarijuanaPieChart/MarijuanaPieChart';
import Box from '@material-ui/core/Box';
import MarijuanaPieChartDetails from '../MarijuanaPieChartDetails/MarijuanaPieChartDetails';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';
//function that returns the results of Marijuana use all time
function MarijuanaAllTime(){
//used to style table
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
    //define variables for count
    let marijuanaYes=0;
    let marijuanaNo=0;
    //function that conditionally renders card for marijuana use all time
     const answer1 =()=>{
       let display=''
       console.log('in answer')
       //if form data doesnt exist display loading
       if(!form){
         display=<p>loading</p>
       }//end if 
       //if form data does exist map through the data
       if(form.length){
       form.map((item)=>{
         //target specific question number to return results from the api
         let answer=item.answers[119]
         //if answer.answer is yes add one to marijuanaYes
        if(answer.answer==='Yes'){
            marijuanaYes++
        }//end if
        //if answer.answer is no or unanswered add one to marijuana no
        else{
            marijuanaNo++
       }//end else
       console.log(marijuanaYes, marijuanaNo)
       //display returns a card with Marijuana All time use pie chart. It also returns a table with a description as the header and two rows. One row is for users that selected yes and the other is for users that selected no
       display= 
       <Box mx='auto' width="75%" >
       <Card>
        <CardContent>
          <Divider />
          <MarijuanaPieChartDetails />
          <Table className={classes.table}>
                  <TableHead>
                    <TableRow>
                      <TableCell><h3>This pie chart shows the percentage of people completing their assessment through YourPath who marked that they had used marijuana, including wax, K2 and spice, at some point in their life.</h3></TableCell><TableCell></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><p>The number of users that anwered YES to using Marijuana in their lifetime.</p></TableCell><TableCell align="right">{marijuanaYes}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><p>The number of users that anwered NO to using Marijuana in their lifetime.</p></TableCell><TableCell align="right">{marijuanaNo}</TableCell>
                    </TableRow>
                  </TableHead>
                </Table>
        </CardContent>
       </Card>
       </Box>
       })
     }
     return display;
   }
   //conditionally renders marijuana all time use card to DOM
    return(
        <>
        {answer1()}
        </>

    )
}

export default MarijuanaAllTime;
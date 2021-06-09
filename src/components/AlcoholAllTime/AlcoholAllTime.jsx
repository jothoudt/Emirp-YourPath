import React from 'react';
import {useSelector} from 'react-redux';
//styling for card
import { 
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  TableHead,
  Typography
} from '@material-ui/core';
import Box from '@material-ui/core/Box';
import AlcoholPieChartDetails from '../AlcoholPieChartDetails/AlcoholPieChartDetails';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';


function AlcoholAllTime(){
  //get information from the store
    const form = useSelector((store)=>store.form);

    //variables for counting
    let alcoholYes=0;
    let alcoholNo=0;
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


    //function to display results
    const answerAlcohol =()=>{
       //variable to be returned
        let alcoholDisplay=''
        console.log('in answer')
        //if the form data doesn't exist
        if(!form){
          alcoholDisplay=<p>loading</p>
        }
        //map through form data and count yes/no answers for alcohol
        if(form.length){
        form.map((item)=>{
         if(item.answers[118]){
          let answer=item.answers[118]
         if(answer.answer==='Yes'){
             alcoholYes++
         }
         else{
             alcoholNo++
         }
        }
        else{
          alcoholNo++
        }
        //console log results
        console.log(alcoholYes, alcoholNo)

        //alcoholDisplay returns a card with a Pie Chart for all time alcohol use. It also returns a small table of the information in text form with the description as the header.
        alcoholDisplay= 
          <Box mx="auto" width="75%">
            <Card>
              <CardContent>
                <Divider />
                <AlcoholPieChartDetails />
                <Table className={classes.table}>
                  <TableHead>
                    <TableRow>
                      <TableCell><h3>This pie chart shows the percentage of people taking YourPath’s assessment who indicated that they had used alcohol, including beer, wine or liquor, at some point in their life.  </h3></TableCell><TableCell></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><p>The number of users that anwered YES to using Alcohol in their lifetime.</p></TableCell><TableCell align="right">{ alcoholYes}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><p>The number of users that anwered NO to using Alcohol in their lifetime.</p></TableCell><TableCell align="right">{alcoholNo}</TableCell>
                    </TableRow>
                  </TableHead>
                </Table>
                <Divider />
              </CardContent>
            </Card>
        </Box>
        })
      }
      //return alcoholDisplay
      return alcoholDisplay;
    }

    //to display on the dom
    return(
        <>
        {answerAlcohol()}
        </>
    )
}
export default AlcoholAllTime;
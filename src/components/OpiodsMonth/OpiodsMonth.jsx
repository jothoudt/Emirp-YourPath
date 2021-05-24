import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { 
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Divider,
    Typography
  } from '@material-ui/core';
import OpiodsMonthPie from '../OpiodsMonthPie/OpiodsMonthPie';
import Box from '@material-ui/core/Box';


function OpiodsMonth(){

    //select info from store
    const form = useSelector((store)=>store.form);

    //define variables for counting
    let opiodsMonthlyYes=0;
    let opiodsMonthlyNo=0;

    //function to display count of Opiod users in the last month
    const answerOpiods=()=>{
        let opiodsDisplay=''
        console.log('in answer')
        //if no data exists
        if(!form){
            opiodsDisplay=<p>loading</p>
        }//end if
        //if data exists map through for counts of yes and no
        if(form.length){
        form.map((item)=>{
          let answer=item.answers[139]
         if(answer.answer){
            opiodsMonthlyYes++
         }//end if
         else{
            opiodsMonthlyNo++
        }//end else
        console.log(opiodsMonthlyYes, opiodsMonthlyNo)
        //display for counts
        opiodsDisplay= 
        <Box mx='auto' width="75%" >
          <Card>
            <CardContent>
              <OpiodsMonthPie />
              <p>Opioids in the last month Yes:{opiodsMonthlyYes}</p>
              <p>Opioids in the last month No: {opiodsMonthlyNo}</p>
              <Divider />
              <p>YourPath assessment takers were given the choice of entering how many days in the previous month they used other opioids, including painkillers, fentanyl patches and opium. This pie graph shows the percentage of people who had used at least one day in the previous month.</p>
            </CardContent>
          </Card>
        </Box>
        })
      }//end if
      return opiodsDisplay;
    }

    //render to dom
    return(
        <>
        {answerOpiods()}
        </>
    )
}

export default OpiodsMonth;
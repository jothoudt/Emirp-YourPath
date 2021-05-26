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
import Box from '@material-ui/core/Box';
import MarijuanaMonthPieChart from '../MarijuanaMonthPieChart/MarijuanaMonthPieChart';

function MarijuanaMonth(){

    //select info from store
    const form = useSelector((store)=>store.form);

    //define variables for counting
    let marijuanaMonthlyYes=0;
    let marijuanaMonthlyNo=0;

    //function to display count of Marijuana users in the last month
    const answerMarijuana=()=>{
        let marijuanaDisplay=''
        console.log('in answer')
        //if no data exists
        if(!form){
            marijuanaDisplay=<p>loading</p>
        }//end if
        //if data exists map through for counts of yes and no
        if(form.length){
        form.map((item)=>{
          let answer=item.answers[135]
         if(answer.answer){
            marijuanaMonthlyYes++
         }//end if
         else{
            marijuanaMonthlyNo++
        }//end else
        console.log(marijuanaMonthlyYes, marijuanaMonthlyNo)
        //display for counts
        marijuanaDisplay= 
        <Box mx='auto' width="75%" >
        <Card >
        <CardContent>
          <Divider />
          {/* <Box mx="auto" width="40%"> */}
          <MarijuanaMonthPieChart />
          {/* </Box> */}
            <p>Marijuana in the last month Yes:{marijuanaMonthlyYes}</p>
            <p>Marijuana in the last month No: {marijuanaMonthlyNo}</p>
          <Divider />
            <p>YourPath assessment takers were given the choice of entering how many days in the previous month they ingested marijuana, including K2, wax and spice. This pie graph shows the percentage of people who had used at least one day in the previous month.</p>
        </CardContent>
        </Card>
        </Box>
        })
      }//end if
      return marijuanaDisplay;
    }

    //render to dom
    return(
        <>
        {answerMarijuana()}
        </>
    )
}

export default MarijuanaMonth;

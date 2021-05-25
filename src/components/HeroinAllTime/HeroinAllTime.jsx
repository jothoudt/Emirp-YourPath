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
import Box from '@material-ui/core/Box';
import HeroinPieChartDetails from '../HeroinPieChartDetails/HeroinPieChartDetails';


function HeroinAllTime(){

    const form = useSelector((store)=>store.form);

    const answerHeroin=()=>{

        let heroinYes=0;
        let heroinNo=0;
        let heroinDisplay=''
        console.log('in answer')
        if(!form){
          heroinDisplay=<p>loading</p>
        }
        if(form.length){
        form.map((item)=>{
          let answer=item.answers[122]
         if(answer.answer==='Yes'){
             heroinYes++
         }
         else{
             heroinNo++
         }
        //  if(!answer.answer){
        //      methNo++
        // }
        console.log(heroinYes, heroinNo)
        heroinDisplay= 
        <Box mx='auto' width="75%" >
          <Card>
            <CardContent>
              <Divider />   
              <HeroinPieChartDetails />         
              <p>Heroin Yes:{heroinYes}</p>
              <p>Heroin No: {heroinNo}</p>
              <Divider />
              <p>This pie chart shows the percentage of people taking YourPath’s assessment who indicated that they had used heroin or fentanyl powder at some point in their life. </p>
            </CardContent>
          </Card>
        </Box>
        })
      }
      return heroinDisplay;
    }

    return(
        <>
        {answerHeroin()}
        </>
    )
}

export default HeroinAllTime;
import React from 'react';
import {useSelector} from 'react-redux'
import OTCPieChartDetails from '../OTCPieChartDetails/OTCPieChartDetails'
import { 
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Typography
} from '@material-ui/core';
import Box from '@material-ui/core/Box';


function OTCAllTime(){

    const form = useSelector((store)=>store.form);

    let OTCYes=0;
    let OTCNo=0;
    
     // const mjMap=form[119].answer
   
     const answer1 =()=>{
       let display=''
       console.log('in answer')
       if(!form){
         display=<p>loading</p>
       }
       if(form.length){
       form.map((item)=>{
         let answer=item.answers[127]
        if(answer.answer==='Yes'){
            OTCYes++
        }
        else{
            OTCNo++
       }
       console.log(OTCYes, OTCNo)
       display= 
      <Box mx='auto' width="75%" >
        <Card>
          <CardHeader 
            title={answer.text}
          />
          <CardContent>
            <Divider />
            <OTCPieChartDetails />
            <p>Over-the-Counter Yes:{OTCYes}</p>
            <p>Over-the-Counter No: {OTCNo}</p>
            <Divider />
            <p>This pie chart shows the percentage of people taking YourPath’s assessment who indicated that they had used over-the-counter drugs such as Robitussin or Imodium at some point in their life. </p>
          </CardContent>
        </Card>
      </Box>
       })
     }
     return display;
   }
    return(
        <>
        {answer1()}
        </>

    )
}

export default OTCAllTime;
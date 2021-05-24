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
import OpiodsPieChartDetails from '../OpiodsPieChartDetails/OpiodsPieChartDetails';
import Box from '@material-ui/core/Box';


function OpiodsAllTime(){

    const form = useSelector((store)=>store.form);

    let opiodsYes=0;
    let opiodsNo=0;
    
     // const mjMap=form[119].answer
   
     const answer1 =()=>{
       let display=''
       console.log('in answer')
       if(!form){
         display=<p>loading</p>
       }
       if(form.length){
       form.map((item)=>{
         let answer=item.answers[123]
        if(answer.answer==='Yes'){
            opiodsYes++
        }
        else{
            opiodsNo++
       }
       console.log(opiodsYes, opiodsNo)
       display= 
       <Box mx='auto' width="75%" >
        <Card>
            <CardContent> 
              <OpiodsPieChartDetails />        
              <p>Opioids Yes:{opiodsYes}</p>
              <p>Opioids No: {opiodsNo}</p>
              <Divider />
              <p>This pie chart shows the percentage of people taking YourPath’s assessment who indicated that they had used other opioids, including painkillers, fentanyl patches and opium, at some point in their life. </p>
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

export default OpiodsAllTime;
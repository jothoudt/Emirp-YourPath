import React from 'react';
import {useSelector} from 'react-redux'
import OTCPieChart from '../OTCPieChart/OTCPieChart';
import { 
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Typography
} from '@material-ui/core';


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
      <Card>
        <CardHeader 
          title={answer.text}
        />
        <CardContent>
          <Divider />
          <OTCPieChart />
          <p>Over-the-Counter Yes:{OTCYes}</p>
          <p>Over-the-Counter No: {OTCNo}</p>
        </CardContent>
      </Card>
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
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
import OpiodsPieChart from '../OpiodsPieChart/OpiodsPieChart';

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
       <Card>
          <CardHeader 
            title={answer.text}
          />
          <CardContent>
            <Divider />   
            <OpiodsPieChart />        
            <p>Opioids Yes:{opiodsYes}</p>
            <p>Opioids No: {opiodsNo}</p>
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

export default OpiodsAllTime;
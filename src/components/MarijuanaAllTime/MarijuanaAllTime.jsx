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

function MarijuanaAllTime(){

    const form = useSelector((store)=>store.form);

    let marijuanaYes=0;
    let marijuanaNo=0;
    
     // const mjMap=form[119].answer
   
     const answer1 =()=>{
       let display=''
       console.log('in answer')
       if(!form){
         display=<p>loading</p>
       }
       if(form.length){
       form.map((item)=>{
         let answer=item.answers[119]
        if(answer.answer==='Yes'){
            marijuanaYes++
        }
        else{
            marijuanaNo++
       }
       console.log(marijuanaYes, marijuanaNo)
       display= 
       <Card>
        <CardContent>
          <MarijuanaPieChart />
          <p>Marijuana Yes:{marijuanaYes}</p>
          <p>Marijuana No: {marijuanaNo}</p>
          <Divider />
          <p>This pie chart shows the percentage of people completing their assessment through YourPath who marked that they had used marijuana, including wax, K2 and spice, at some point in their life.</p>
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

export default MarijuanaAllTime;
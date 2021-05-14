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
          <CardHeader 
          title={answer.text}
          />
        <CardContent>
          <Divider />
          <MarijuanaPieChart />
          <p>Marijuana Yes:{marijuanaYes}</p>
          <p>Marijuana No: {marijuanaNo}</p>
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
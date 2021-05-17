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
        <Card>
          <CardHeader 
            title={answer.text}
          />
          <CardContent>
            <Divider />            
            <p>Heroin Yes:{heroinYes}</p>
            <p>Heroin No: {heroinNo}</p>
          </CardContent>
        </Card>
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
import React from 'react';
import {useSelector} from 'react-redux';
//for styling
import { 
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Typography
} from '@material-ui/core';

function InhalantsAllTime(){

    const form = useSelector((store)=>store.form);

    let inhalantYes=0;
    let inhalantNo=0;
    
     // const mjMap=form[119].answer
    const answer1 =()=>{
      let display=''
      console.log('in answer')
      if(!form){
        display=<p>loading</p>
      }
      if(form.length){
        form.map((item)=>{
          let answer=item.answers[126]
        if(answer.answer === 'Yes'){
            inhalantYes++
        }
        else {
            inhalantNo++
      }
      console.log(inhalantYes, inhalantNo)
      display= 
      <Card>
        <CardHeader 
          title={answer.text}
        />
        <CardContent>
          <Divider />
          <p>Inhalant Yes:{inhalantYes}</p>
          <p>Inhalant No: {inhalantNo}</p>
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

export default InhalantsAllTime;
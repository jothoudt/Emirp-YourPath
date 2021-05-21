import React from 'react';
import {useSelector} from 'react-redux';
//pass thru pie chart
import InhalantsPieChart from '../InhalantsPieChart/InhalantsPieChart';
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
        <InhalantsPieChart />
        <CardHeader 
          title={answer.text}
        />
        <CardContent>
          <Divider />
          <p>Inhalant Yes:{inhalantYes}</p>
          <p>Inhalant No: {inhalantNo}</p>
          <Divider />
          <p>This pie chart shows the percentage of people taking YourPath’s assessment who indicated that they had used inhalants, including dust-off, glue, paint or whippets at some point in their life.</p>
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
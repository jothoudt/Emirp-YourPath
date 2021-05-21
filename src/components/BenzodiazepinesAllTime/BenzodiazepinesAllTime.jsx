import React from 'react';
import {useSelector} from 'react-redux';
//pass thru pie chart
import BenzodiazepinesPieChart from '../BenzodiazepinesPieChart/BenzodiazepinesPieChart';
//styling for card
import { 
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Typography
} from '@material-ui/core';

function BenzodiazepinesAllTime(){

    const form = useSelector((store)=>store.form);

    let benzYes=0;
    let benzNo=0;
    
     // const mjMap=form[119].answer
    const answer1 =()=>{
      let display=''
      console.log('in answer')
      if(!form){
        display=<p>loading</p>
      }
      if(form.length){
        form.map((item)=>{
          let answer=item.answers[124]
        if(answer.answer === 'Yes'){
            benzYes++
        }
        else {
            benzNo++
      }
      console.log(benzYes, benzNo)
      display= 
      <Card>
        <CardContent>
          <BenzodiazepinesPieChart />
          <p>Benzodiazepines Yes:{benzYes}</p>
          <p>Benzodiazepines No: {benzNo}</p>
          <Divider />
          <p>This pie chart shows the percentage of people taking YourPath’s assessment who indicated that they had used benzodiazepines such as Xanax, Klonopin or Valium, at some point in their life. </p>
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

export default BenzodiazepinesAllTime;
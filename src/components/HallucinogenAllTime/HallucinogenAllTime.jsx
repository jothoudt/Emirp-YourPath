import React from 'react';
import {useSelector} from 'react-redux';
//for card styling
import { 
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Typography
} from '@material-ui/core';
//pass thru pie chart
import HallucinogenPieChart from '../HallucinogenPieChart/HallucinogenPieChart';

function HallucinogenAllTime(){

    const form = useSelector((store)=>store.form);

    let hallucinogenYes=0;
    let hallucinogenNo=0;
    
     // const mjMap=form[119].answer
    const answer1 =()=>{
      let display=''
      console.log('in answer')
      if(!form){
        display=<p>loading</p>
      }
      if(form.length){
      form.map((item)=>{
        let answer=item.answers[125]
        if(answer.answer==='Yes'){
            hallucinogenYes++
        }
        else{
            hallucinogenNo++
      }
      console.log(hallucinogenYes, hallucinogenNo)
      display= 
      <Card>
        <HallucinogenPieChart />
        <CardContent>
          <p>Hallucinogen Yes:{hallucinogenYes}</p>
          <p>Hallucinogen No: {hallucinogenNo}</p>
          <Divider />
          <p>This pie chart shows the percentage of people taking YourPath’s assessment who indicated that they had used hallucinogens, including LSD, mushrooms or DMT, at some point in their life. </p>
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

export default HallucinogenAllTime;
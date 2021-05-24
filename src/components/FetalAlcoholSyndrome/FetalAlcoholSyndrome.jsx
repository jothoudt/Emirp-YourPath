import React from 'react';
import {useSelector} from 'react-redux'
//pass thru pie chart
import FetalAlcoholSyndromePieChart from '../FetalAlcoholSyndromePieChart/FetalAlcoholSyndromePieChart';
import { 
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Typography
} from '@material-ui/core';
import HealthStatistics from '../HealthStatistics/HealthStatistics';


function FetalAlcoholSyndrome(){

    const form = useSelector((store)=>store.form);

    let fasYes=0;
    let fasNo=0;
    
     // const mjMap=form[119].answer

    const answer1 =()=>{
       let display=''
       console.log('in answer')
       if(!form){
         display=<p>loading</p>
       }
       if(form.length){
       form.map((item)=>{
         let answer=item.answers[108]
        if(answer.answer==='Yes'){
            fasYes++
        }
        else{
            fasNo++
       }
       console.log(fasYes, fasNo)
      display= 
        <Card>
          <CardContent>
            <FetalAlcoholSyndromePieChart />
              <p>Fetal Alcohol Syndrome Yes: {fasYes}</p>
              <p>Fetal Alcohol Syndrome No: {fasNo}</p>
              <Divider />
              <p>People taking the YourPath assessment are given the option of indicating whether they have been diagnosed with fetal alcohol syndrome. This pie chart shows the percentage of people who marked “Yes.”</p>
          </CardContent>
        </Card>
       })
     }
     return display;
   }
    return(
        <>
        <HealthStatistics />
        {answer1()}
        </>

    )
}

export default FetalAlcoholSyndrome;
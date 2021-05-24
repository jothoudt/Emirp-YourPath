import React from 'react';
import {useSelector} from 'react-redux'
//pass thru pie chart
import FetalAlcoholSyndromePieChartDetails from '../FetalAlcoholSyndromePieChartDetails/FetalAlcoholSyndromePieChart';
import { 
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Typography
} from '@material-ui/core';
import HealthStatistics from '../HealthStatistics/HealthStatistics';
import Box from '@material-ui/core/Box';



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
      <Box mx='auto' width="75%" >
        <Card>
          <CardHeader 
          title={answer.text}
          />
          <CardContent>
            <Divider />
            <FetalAlcoholSyndromePieChartDetails />
              <p>Fetal Alcohol Syndrome Yes: {fasYes}</p>
              <p>Fetal Alcohol Syndrome No: {fasNo}</p>
          </CardContent>
        </Card>
        </Box>
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
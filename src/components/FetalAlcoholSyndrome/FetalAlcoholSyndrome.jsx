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
          <CardHeader 
          title={answer.text}
          />
          <CardContent>
            <Divider />
            <FetalAlcoholSyndromePieChart />
              <p>Fetal Alcohol Syndrome Yes: {fasYes}</p>
              <p>Fetal Alcohol Syndrome No: {fasNo}</p>
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

export default FetalAlcoholSyndrome;
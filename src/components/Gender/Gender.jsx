import React from 'react';
import {useSelector} from 'react-redux'
//pass thru bar chart
import GenderBarChart from '../GenderBarChart/GenderBarChart';
//styling
import { 
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Typography
} from '@material-ui/core';

function Gender(){

    const form = useSelector((store)=>store.form);

    let male=0;
    let female=0;
    let transgender=0;
    let nonBinary=0;
    let declined = 0
    
     // const mjMap=form[119].answer
    const answer1 =()=>{
      let display=''
      console.log('in answer')
      if(!form){
        display=<p>loading</p>
      }
      if(form.length){
        form.map((item)=>{
          console.log( 'item', item );
          let answer=item.answers[83]
          console.log( 'gender answer:', answer.answer );
        if ( answer.answer ) {
          let answerArray = answer.answer
          console.log( 'answer length:', answerArray.length );
          answerArray.map( ( itemAnswer )=>{
            if(itemAnswer === 'Male'){
              male++
            }
            else if (itemAnswer === 'Female') {
              female++
            }
            else if (itemAnswer === 'Transgender') {
              transgender++
            }
            else if (itemAnswer === 'Non-binary') {
              nonBinary++
            }
        })
      }
        else{
          declined++
        }
      console.log('in gender:', male, female, transgender, nonBinary, declined )
      display= 
        <Card>
          <GenderBarChart />
          <CardHeader 
          title={answer.text}
          />
          <CardContent>
            <Divider />
            <p>Male: {male}</p>
            <p>Female: {female}</p>
            <p>Transgender: {transgender}</p>
            <p>Non-binary: {nonBinary}</p>
            <p>Declined: {declined}</p>
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

export default Gender;
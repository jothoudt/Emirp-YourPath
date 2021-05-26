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
import Demographics from '../Demographics/Demographics';
import Box from '@material-ui/core/Box';

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
      <Box mx='auto' width="75%" >
          <Card> 
            <CardContent>
              <GenderBarChart />
              <p>Male: {male}</p>
              <p>Female: {female}</p>
              <p>Transgender: {transgender}</p>
              <p>Non-binary: {nonBinary}</p>
              <p>Declined: {declined}</p>
              <Divider />
              <p>People taking the YourPath assessment are given the option of indicating their gender. Because the form allows more than one response, we used a bar chart to visualize the count totals of each category.</p>
            </CardContent>
          </Card>
        </Box>
      
      })
    }
    return display;
  }
    return(
        <>
        <Demographics />
        {answer1()}
        </>

    )
}

export default Gender;
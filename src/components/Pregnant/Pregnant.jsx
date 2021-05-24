import React from 'react';
import {useSelector} from 'react-redux';
//styling for card
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
import PregnantPieChartDetails from '../PregnantPieChartDetails/PregnantPieChartDetails';


function Pregnant(){

    const form = useSelector((store)=>store.form);

    let pregnant=0;
    let notPregnant=0;
    let notSure=0;

    
     // const mjMap=form[119].answer
    const answer1 =()=>{
      let display=''
      console.log('in answer')
      if(!form){
        display=<p>loading</p>
      }
      if(form.length){
        form.map((item)=>{
          let answer=item.answers[103]
        if(answer.answer === 'Yes'){
          pregnant++
        }
        else if (answer.answer === 'No') {
          notPregnant++
        }
        else if (answer.answer === 'Not Sure') {
          notSure++
        }
      console.log('in pregnant:', pregnant, notPregnant, notSure)
      display= 
      <Card>
        <CardContent>    
          <PregnantPieChart />        
          <p>Pregnant: {pregnant}</p>
          <p>Not Pregnant: {notPregnant}</p>
          <p>Not Sure: {notSure}</p>
          <Divider />
          <p>The YourPath assessment gives takers the option of marking whether they are pregnant, plus a third option for anyone unsure. This pie chart shows the overall percentages for the total number of people who marked pregnant, not pregnant or not sure.</p>
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

export default Pregnant;
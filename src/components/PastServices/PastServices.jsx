import React from 'react';
import {useSelector} from 'react-redux';
//pass thru chart
import PastServicesBar from '../PastServicesBar/PastServicesBar';
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


function PastServices(){

    const form = useSelector((store)=>store.form);

    let psychWard=0;
    let detox=0;
    let residential=0;
    let outpatient=0;
    let mutualSupport=0;
    let therapy=0;
    let medicationAssisted=0;
    let prescribed=0;
    let soberHousing=0;
    let declined=0;
    
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
          let answer=item.answers[113]
          console.log( 'past services:', answer.answer );
        if ( answer.answer ) {
          let answerArray = answer.answer
          console.log( 'answer length:', answerArray.length );
          answerArray.map( ( itemAnswer )=>{  
            if(itemAnswer === 'A psych ward or a psychiatric hold'){
              psychWard++
            }
            else if (itemAnswer === 'Detox') {
              detox++
            }
            else if (itemAnswer === 'Residential Treatment') {
              residential++
            }
            else if (itemAnswer === 'Outpatient treatment') {
              outpatient++
            }
            else if (itemAnswer === 'Attended mutual support meetings (AA, NA, SMART recovery, etc...)') {
              mutualSupport++
            }
            else if (itemAnswer === 'Attended individual mental health therapy') {
              therapy++
            }
            else if (itemAnswer === 'Medication-assisted treatment (i.e. methadone, Vivitrol/Naltrexone or Suboxone/buprenorphine)') {
              medicationAssisted++
            }
            else if (itemAnswer === 'Been prescribed medication for mental health issues (depression, anxiety, sleep, etc...)') {
              prescribed++
            }
            else if (itemAnswer === 'Sober Housing') {
              soberHousing++
            }
        })  
      }
        else{
          declined++
        }
      //console.log('in gender:', male, female, transgender, nonBinary, declined )
      <Box mx='auto' width="75%" >
        <Card>
          <CardContent>
            <PastServicesBar />         
            <p>A psych ward or a psychiatric hold: {psychWard}</p>
            <p>Detox: {detox}</p>
            <p>Residential Treatment: {residential}</p>
            <p>Outpatient Treatment: {outpatient}</p>
            <p>Attended mutual support meetings (AA, NA, SMART recovery, etc...): {mutualSupport}</p>
            <p>Attended individual mental health therapy: {therapy}</p>
            <p>Medication-assisted treatment, i.e. methadone, Vivitrol/Naltrexone or Suboxone/buprenorphine: {medicationAssisted}</p>
            <p>Been prescribed medication for mental health issues, i.e. depression, anxiety, sleep, etc... {prescribed}</p>   
            <p>Sober Housing: {soberHousing}</p>     
            <p>Declined: {declined}</p>
            <Divider />
            <p>Assessment takers have the option to indicate the types of support services they’ve used in the past. Because the form allows users to choose more than one, we used a bar chart to show the total count of services used, by category.</p>
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

export default PastServices;
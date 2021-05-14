import React from 'react';
import {useSelector} from 'react-redux';
import RacePieChart from '../RacePieChart/RacePieChart';
import { 
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Typography
} from '@material-ui/core';

function Race(){
  // pulls down assessment results from the store
    const form = useSelector((store)=>store.form);

    // naming variables to track totals for each response category
    let blackOrAfricanAmerican=0;
    let eastAfricanSomaliAfricanBorn=0;
    let asian=0;
    let nativeHawaiinOrPacificIslander=0;
    let alaskaNative=0;
    let white=0;
    let nativeAmerican=0;
    let noDisclosure=0;
    
    //List of conditionals to sum totals for each category
     const answer1 =()=>{
       let display=''
       console.log('in answer')
       if(!form){
         display=<p>loading</p>
       }
       if(form.length){
       form.map((item)=>{
         let answer=item.answers[95] 
        if(answer.answer==='Native American'){
          nativeAmerican++
        }
        else if(answer.answer==='Black or African American'){
          blackOrAfricanAmerican++
        }
        else if(answer.answer==='East African/Somali/African-born'){
          eastAfricanSomaliAfricanBorn++
        }
        else if(answer.answer==='East African/Somali/African-born'){
          eastAfricanSomaliAfricanBorn++
        }
        else if(answer.answer==='Asian'){
          asian++
        }
        else if(answer.answer==='Native Hawaiian or Pacific Islander'){
          nativeHawaiinOrPacificIslander++
        }
        else if(answer.answer==='Alaska Native'){
          alaskaNative++
        }
        else if(answer.answer==='White'){
          white++
        }
        else {
          noDisclosure++
        }

      display= 
        <Card>
          <CardHeader 
          title={answer.text}
          />
          <CardContent>
            <Divider />
            <RacePieChart />
            <p>Black or African American: {blackOrAfricanAmerican}</p>
            <p>East African/Somali/AfricanBorn: {eastAfricanSomaliAfricanBorn}</p>
            <p>Asian: {asian}</p>
            <p>Native Hawaiin/Pacific Islander: {nativeHawaiinOrPacificIslander}</p>
            <p>Alaska Native: {alaskaNative}</p>
            <p>White: {white}</p>
            <p>Native American: {nativeAmerican}</p>
            <p>Did not disclose: {noDisclosure}</p>
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

export default Race;
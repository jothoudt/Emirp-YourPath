import React from 'react';
import {useSelector} from 'react-redux';
import { 
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Typography
} from '@material-ui/core';
import MethAllTimePie from '../MethAllTimePie/MethAllTimePie';


function MethAllTime(){
    
    //get information from the store
    const form = useSelector((store)=>store.form);

    //variables to count
    let methYes=0;
    let methNo=0;

    //display the results of counting
    const answerMeth =()=>{
       //variable to display
        let methDisplay=''
        console.log('in answer')
        //if data doesn't exist display loading
        if(!form){
          methDisplay=<p>loading</p>
        }
        //if data exists map through and count answers
        if(form.length){
        form.map((item)=>{
          let answer=item.answers[121]
         if(answer.answer==='Yes'){
             methYes++
         }
         else{
             methNo++
         }
        //  if(!answer.answer){
        //      methNo++
        // }
        console.log(methYes, methNo)
        //define display
        methDisplay= 
        <Card>
          <CardContent>
            <MethAllTimePie />
            <p>Meth Yes:{methYes}</p>
            <p>Meth No: {methNo}</p>
            <Divider />
            <p>This pie chart shows the percentage of people taking YourPath’s assessment who indicated that they had used meth or other amphetamines at some point in their life. </p>
          </CardContent>
        </Card>
        })
      }
      return methDisplay;
    }
    //return to dom
    return(
        <>
        {answerMeth()}
        </>
    )
}
export default MethAllTime;
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

function OtherSubstancesAllTime(){
  //get information from the store
    const form = useSelector((store)=>store.form);

    //variables for counting
    let otherYes=0;
    let otherNo=0;

    //function to display results
    const answerMeth =()=>{
       //variable to be returned
        let otherDisplay=''
        console.log('in answer')
        //if the form data doesn't exist
        if(!form){
          otherDisplay=<p>loading</p>
        }
        //map through form data and count yes/no answers
        if(form.length){
        form.map((item)=>{
          let answer=item.answers[128]
         if(answer.answer==='Yes'){
             otherYes++
         }
         else{
             otherNo++
         }
        //console log results
        console.log(otherYes, otherNo)

        //define display
        otherDisplay= 
        <Card>
          <CardHeader 
            title={answer.text}
          />
          <CardContent>
            <Divider />             
            <p>Other Substances Used Yes:{ otherYes}</p>
            <p>Other Substances Used No: {otherNo}</p>
         </CardContent>
        </Card>
        })
      }
      //return display
      return otherDisplay;
    }

    //to display on the dom
    return(
        <>
        {answerMeth()}
        </>
    )
}
export default OtherSubstancesAllTime;
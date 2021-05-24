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
import OtherSubstanceAllTimePieDetails from '../OtherSubstancesAllTimePieDetails/OtherSubstancesAllTimePieDetails';
import Box from '@material-ui/core/Box';


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
        <Box mx='auto' width="75%" >
          <Card>
            <CardHeader 
              title={answer.text}
            />
            <CardContent>
              <Divider />
              <OtherSubstanceAllTimePieDetails />             
              <p>Other Substances Used Yes:{ otherYes}</p>
              <p>Other Substances Used No: {otherNo}</p>
              <Divider />
              <p>This pie chart shows the percentage of people taking YourPath’s assessment who indicated that they had used other substances such as bath salts, GHB, ketamine or khat at some point in their life. </p>
          </CardContent>
          </Card>
        </Box>
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
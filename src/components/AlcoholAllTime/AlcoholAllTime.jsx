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
import AlcoholPieChart from '../AlcoholPieChart/AlcoholPieChart';

function AlcoholAllTime(){
  //get information from the store
    const form = useSelector((store)=>store.form);

    //variables for counting
    let alcoholYes=0;
    let alcoholNo=0;

    //function to display results
    const answerAlcohol =()=>{
       //variable to be returned
        let alcoholDisplay=''
        console.log('in answer')
        //if the form data doesn't exist
        if(!form){
          alcoholDisplay=<p>loading</p>
        }
        //map through form data and count yes/no answers
        if(form.length){
        form.map((item)=>{
          let answer=item.answers[118]
         if(answer.answer==='Yes'){
             alcoholYes++
         }
         else{
             alcoholNo++
         }
        //console log results
        console.log(alcoholYes, alcoholNo)

        //define display
        alcoholDisplay= 
        <Card>
          <CardHeader 
            title={answer.text}
          />
          <CardContent>
            <Divider />
            <AlcoholPieChart />
            <p>Alcohol Used Yes:{ alcoholYes}</p>
            <p>Alcohol Used No: {alcoholNo}</p>
          </CardContent>
        </Card>
        })
      }
      //return display
      return alcoholDisplay;
    }

    //to display on the dom
    return(
        <>
        {answerAlcohol()}
        </>
    )
}
export default AlcoholAllTime;
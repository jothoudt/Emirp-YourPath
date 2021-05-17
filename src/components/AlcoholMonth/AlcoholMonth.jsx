import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { 
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Divider,
    Typography
  } from '@material-ui/core';

function AlcoholMonth(){

    //select info from store
    const form = useSelector((store)=>store.form);

    //define variables for counting
    let alcoholMonthlyYes=0;
    let alcoholMonthlyNo=0;

    //function to display count of Alcohol users in the last month
    const answerAlcohol=()=>{
        let alcoholDisplay=''
        console.log('in answer')
        //if no data exists
        if(!form){
          alcoholDisplay=<p>loading</p>
        }//end if
        //if data exists map through for counts of yes and no
        if(form.length){
        form.map((item)=>{
          let answer=item.answers[134]
         if(answer.answer){
            alcoholMonthlyYes++
         }//end if
         else{
            alcoholMonthlyNo++
        }//end else
        console.log(alcoholMonthlyYes, alcoholMonthlyNo)
        //display for counts
        alcoholDisplay= 
        <Card>
           <CardHeader 
           title={answer.text}
           />
         <CardContent>
           <Divider />
           <p>Alcohol in the last month Yes:{alcoholMonthlyYes}</p>
           <p>Alcohol in the last month No: {alcoholMonthlyNo}</p>
         </CardContent>
        </Card>
        })
      }//end if
      return alcoholDisplay;
    }

    //render to dom
    return(
        <>
        {answerAlcohol()}
        </>
    )
}

export default AlcoholMonth;
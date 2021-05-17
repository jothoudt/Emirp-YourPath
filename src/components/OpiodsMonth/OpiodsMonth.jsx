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

function OpiodsMonth(){

    //select info from store
    const form = useSelector((store)=>store.form);

    //define variables for counting
    let opiodsMonthlyYes=0;
    let opiodsMonthlyNo=0;

    //function to display count of Opiod users in the last month
    const answerOpiods=()=>{
        let opiodsDisplay=''
        console.log('in answer')
        //if no data exists
        if(!form){
            opiodsDisplay=<p>loading</p>
        }//end if
        //if data exists map through for counts of yes and no
        if(form.length){
        form.map((item)=>{
          let answer=item.answers[139]
         if(answer.answer){
            opiodsMonthlyYes++
         }//end if
         else{
            opiodsMonthlyNo++
        }//end else
        console.log(opiodsMonthlyYes, opiodsMonthlyNo)
        //display for counts
        opiodsDisplay= 
        <Card>
           <CardHeader 
           title={answer.text}
           />
         <CardContent>
           <Divider />
           <p>Opiods in the last month Yes:{opiodsMonthlyYes}</p>
           <p>Opiods in the last month No: {opiodsMonthlyNo}</p>
         </CardContent>
        </Card>
        })
      }//end if
      return opiodsDisplay;
    }

    //render to dom
    return(
        <>
        {answerOpiods()}
        </>
    )
}

export default OpiodsMonth;
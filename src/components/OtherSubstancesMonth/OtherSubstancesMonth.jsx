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

function OtherSubstancesMonth(){

    //select info from store
    const form = useSelector((store)=>store.form);

    //define variables for counting
    let otherSubstancesMonthlyYes=0;
    let otherSubstancesMonthlyNo=0;

    //function to display count of Other Substances users in the last month
    const answerOtherSubstances=()=>{
        let otherSubstancesDisplay=''
        console.log('in answer')
        //if no data exists
        if(!form){
            otherSubstancesDisplay=<p>loading</p>
        }//end if
        //if data exists map through for counts of yes and no
        if(form.length){
        form.map((item)=>{
          let answer=item.answers[144]
         if(answer.answer){
            otherSubstancesMonthlyYes++
         }//end if
         else{
            otherSubstancesMonthlyNo++
        }//end else
        console.log(otherSubstancesMonthlyYes, otherSubstancesMonthlyNo)
        //display for counts
        otherSubstancesDisplay= 
        <Card>
           <CardHeader 
           title={answer.text}
           />
         <CardContent>
           <Divider />
           <p>Other Substances in the last month Yes:{otherSubstancesMonthlyYes}</p>
           <p>Other Substances in the last month No: {otherSubstancesMonthlyNo}</p>
         </CardContent>
        </Card>
        })
      }//end if
      return otherSubstancesDisplay;
    }

    //render to dom
    return(
        <>
        {answerOtherSubstances()}
        </>
    )
}

export default OtherSubstancesMonth;
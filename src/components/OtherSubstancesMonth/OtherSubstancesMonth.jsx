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
import OtherSubstancesMonthPie from '../OtherSubstancesMonthPie/OtherSubstancesMonthPie';

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
         <CardContent>
           <OtherSubstancesMonthPie />
           <p>Other Substances in the last month Yes:{otherSubstancesMonthlyYes}</p>
           <p>Other Substances in the last month No: {otherSubstancesMonthlyNo}</p>
           <Divider />
           <p>YourPath assessment takers were given the choice of entering how many days in the previous month they used other substances such as bath salts, GHB, ketamine or khat. This pie graph shows the percentage of people who had used at least one day in the previous month.</p>
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
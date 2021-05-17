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

function BenzodiazepinesMonth(){

    //select info from store
    const form = useSelector((store)=>store.form);

    //define variables for counting
    let benzodiazepinesMonthlyYes=0;
    let benzodiazepinesMonthlyNo=0;

    //function to display count of Nicotine users in the last month
    const answerBenzodiazepines=()=>{
        let benzodiazepinesDisplay=''
        console.log('in answer')
        //if no data exists
        if(!form){
            benzodiazepinesDisplay=<p>loading</p>
        }//end if
        //if data exists map through for counts of yes and no
        if(form.length){
        form.map((item)=>{
          let answer=item.answers[140]
         if(answer.answer){
            benzodiazepinesMonthlyYes++
         }//end if
         else{
            benzodiazepinesMonthlyNo++
        }//end else
        console.log(benzodiazepinesMonthlyYes, benzodiazepinesMonthlyNo)
        //display for counts
        benzodiazepinesDisplay= 
        <Card>
           <CardHeader 
           title={answer.text}
           />
         <CardContent>
           <Divider />
           <p>Benzodiazepines in the last month Yes:{benzodiazepinesMonthlyYes}</p>
           <p>Benzodiazepines in the last month No: {benzodiazepinesMonthlyNo}</p>
         </CardContent>
        </Card>
        })
      }//end if
      return benzodiazepinesDisplay;
    }

    //render to dom
    return(
        <>
        {answerBenzodiazepines()}
        </>
    )
}

export default BenzodiazepinesMonth;
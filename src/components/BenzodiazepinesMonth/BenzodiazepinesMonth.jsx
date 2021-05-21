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
import BenzodiazepinesMonthPie from '../BenzodiazepinesMonthPie/BenzodiazepinesMonthPie';

function BenzodiazepinesMonth(){

    //select info from store
    const form = useSelector((store)=>store.form);

    //define variables for counting
    let benzodiazepinesMonthlyYes=0;
    let benzodiazepinesMonthlyNo=0;

    //function to display count of benzodiazepines users in the last month
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
           <BenzodiazepinesMonthPie />
           <p>Benzodiazepines in the last month Yes:{benzodiazepinesMonthlyYes}</p>
           <p>Benzodiazepines in the last month No: {benzodiazepinesMonthlyNo}</p>
           <Divider />
           <p>YourPath assessment takers were given the choice of entering how many days in the previous month they used benzodiazepines such as Xanax, Klonopin or Valium. This pie graph shows the percentage of people who had used at least one day in the previous month.</p>
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
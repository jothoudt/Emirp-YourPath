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
import InhalantsMonthPie from '../InhalantsMonthPie/InhalantsMonthPie';

function InhalantsMonth(){

    //select info from store
    const form = useSelector((store)=>store.form);

    //define variables for counting
    let inhalantsMonthlyYes=0;
    let inhalantsMonthlyNo=0;

    //function to display count of Inhalants users in the last month
    const answerInhalants=()=>{
        let inhalantsDisplay=''
        console.log('in answer')
        //if no data exists
        if(!form){
            inhalantsDisplay=<p>loading</p>
        }//end if
        //if data exists map through for counts of yes and no
        if(form.length){
        form.map((item)=>{
          let answer=item.answers[142]
         if(answer.answer){
            inhalantsMonthlyYes++
         }//end if
         else{
            inhalantsMonthlyNo++
        }//end else
        console.log(inhalantsMonthlyYes, inhalantsMonthlyNo)
        //display for counts
        inhalantsDisplay= 
        <Card>
         <CardContent>
           <InhalantsMonthPie />
           <p>Inhalants in the last month Yes:{inhalantsMonthlyYes}</p>
           <p>Inhalants in the last month No: {inhalantsMonthlyNo}</p>
           <Divider />
           <p>YourPath assessment takers were given the choice of entering how many days in the previous month they used inhalants, including dust-off, glue, paint or whippets. This pie graph shows the percentage of people who had used at least one day in the previous month.</p>
         </CardContent>
        </Card>
        })
      }//end if
      return inhalantsDisplay;
    }

    //render to dom
    return(
        <>
        {answerInhalants()}
        </>
    )
}

export default InhalantsMonth;
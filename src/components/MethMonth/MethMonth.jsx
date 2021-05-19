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
import MethMonthPie from '../MethMonthPie/MethMonthPie'

function MethMonth(){

    //select info from store
    const form = useSelector((store)=>store.form);

    //define variables for counting
    let methMonthlyYes=0;
    let methMonthlyNo=0;

    //function to display count of Marijuana users in the last month
    const answerMeth=()=>{
        let methDisplay=''
        console.log('in answer')
        //if no data exists
        if(!form){
            methDisplay=<p>loading</p>
        }//end if
        //if data exists map through for counts of yes and no
        if(form.length){
        form.map((item)=>{
          let answer=item.answers[137]
         if(answer.answer){
            methMonthlyYes++
         }//end if
         else{
            methMonthlyNo++
        }//end else
        console.log(methMonthlyYes, methMonthlyNo)
        //display for counts
        methDisplay= 
        <Card>
           <CardHeader 
           title={answer.text}
           />
         <MethMonthPie />
         <CardContent>
           <Divider />
           <p>Meth in the last month Yes:{methMonthlyYes}</p>
           <p>Meth in the last month No: {methMonthlyNo}</p>
         </CardContent>
        </Card>
        })
      }//end if
      return methDisplay;
    }

    //render to dom
    return(
        <>
        {answerMeth()}
        </>
    )
}

export default MethMonth;
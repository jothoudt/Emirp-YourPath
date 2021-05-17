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

function NicotineMonth(){

    //select info from store
    const form = useSelector((store)=>store.form);

    //define variables for counting
    let nicotineMonthlyYes=0;
    let nicotineMonthlyNo=0;

    //function to display count of Nicotine users in the last month
    const answerNicotine=()=>{
        let nicotineDisplay=''
        console.log('in answer')
        //if no data exists
        if(!form){
          nicotineDisplay=<p>loading</p>
        }//end if
        //if data exists map through for counts of yes and no
        if(form.length){
        form.map((item)=>{
          let answer=item.answers[133]
         if(answer.answer){
            nicotineMonthlyYes++
         }//end if
         else{
            nicotineMonthlyNo++
        }//end else
        console.log(nicotineMonthlyYes, nicotineMonthlyNo)
        //display for counts
        nicotineDisplay= 
        <Card>
           <CardHeader 
           title={answer.text}
           />
         <CardContent>
           <Divider />
           <p>Nicotine in the last month Yes:{nicotineMonthlyYes}</p>
           <p>Nicotine in the last month No: {nicotineMonthlyNo}</p>
         </CardContent>
        </Card>
        })
      }//end if
      return nicotineDisplay;
    }

    //render to dom
    return(
        <>
        {answerNicotine()}
        </>
    )
}

export default NicotineMonth;
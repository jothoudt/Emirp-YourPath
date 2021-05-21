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
import OTCMonthPie from '../OTCMonthPie/OTCMonthPie';

function OTCMonth(){

    //select info from store
    const form = useSelector((store)=>store.form);

    //define variables for counting
    let OTCMonthlyYes=0;
    let OTCMonthlyNo=0;

    //function to display count of OTC users in the last month
    const answerOTC=()=>{
        let OTCDisplay=''
        console.log('in answer')
        //if no data exists
        if(!form){
          OTCDisplay=<p>loading</p>
        }//end if
        //if data exists map through for counts of yes and no
        if(form.length){
        form.map((item)=>{
          let answer=item.answers[143]
         if(answer.answer){
          OTCMonthlyYes++
         }//end if
         else{
          OTCMonthlyNo++
        }//end else
        console.log(OTCMonthlyYes, OTCMonthlyNo)
        //display for counts
        OTCDisplay= 
        <Card>
         <CardContent>
           <OTCMonthPie />
           <p>Over the counter used in the last month Yes:{OTCMonthlyYes}</p>
           <p>Over the Counter used in the last month No: {OTCMonthlyNo}</p>
           <Divider />
           <p>YourPath assessment takers were given the choice of entering how many days in the previous month they used over-the-counter drugs such as Robitussin or Imodium. This pie graph shows the percentage of people who had used at least one day in the previous month.</p>
         </CardContent>
        </Card>
        })
      }//end if
      return OTCDisplay;
    }

    //render to dom
    return(
        <>
        {answerOTC()}
        </>
    )
}

export default OTCMonth;
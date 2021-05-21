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
import HeroinMonthPie from '../HeroinMonthPie/HeroinMonthPie';

function HeroinMonth(){

    //select info from store
    const form = useSelector((store)=>store.form);

    //define variables for counting
    let heroinMonthlyYes=0;
    let heroinMonthlyNo=0;

    //function to display count of Marijuana users in the last month
    const answerHeroin=()=>{
        let heroinDisplay=''
        console.log('in answer')
        //if no data exists
        if(!form){
            heroinDisplay=<p>loading</p>
        }//end if
        //if data exists map through for counts of yes and no
        if(form.length){
        form.map((item)=>{
          let answer=item.answers[138]
         if(answer.answer){
            heroinMonthlyYes++
         }//end if
         else{
            heroinMonthlyNo++
        }//end else
        console.log(heroinMonthlyYes, heroinMonthlyNo)
        //display for counts
        heroinDisplay= 
        <Card>
         <CardContent>
          <HeroinMonthPie />  
          <p>Heroin in the last month Yes:{heroinMonthlyYes}</p>
          <p>Heroin in the last month No: {heroinMonthlyNo}</p>
          <Divider />
          <p>YourPath assessment takers were given the choice of entering how many days in the previous month they used heroin or fentanyl powder. This pie graph shows the percentage of people who had used at least one day in the previous month.</p>
         </CardContent>
        </Card>
        })
      }//end if
      return heroinDisplay;
    }

    //render to dom
    return(
        <>
        {answerHeroin()}
        </>
    )
}

export default HeroinMonth;
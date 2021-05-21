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
import AlcoholMonthPie from '../AlcoholMonthPie/AlcoholMonthPie';

function AlcoholMonth(){

    //select info from store
    const form = useSelector((store)=>store.form);

    //define variables for counting
    let alcoholMonthlyYes=0;
    let alcoholMonthlyNo=0;

    //function to display count of Alcohol users in the last month
    const answerAlcohol=()=>{
        let alcoholDisplay=''
        console.log('in answer')
        //if no data exists
        if(!form){
          alcoholDisplay=<p>loading</p>
        }//end if
        //if data exists map through for counts of yes and no
        if(form.length){
        form.map((item)=>{
          let answer=item.answers[134]
         if(answer.answer){
            alcoholMonthlyYes++
         }//end if
         else{
            alcoholMonthlyNo++
        }//end else
        console.log(alcoholMonthlyYes, alcoholMonthlyNo)
        //display for counts
        alcoholDisplay= 
        <Card>
           <CardHeader 
           title={answer.text}
           />
         <CardContent>
           <Divider />
           <AlcoholMonthPie />
           <p>Alcohol in the last month Yes:{alcoholMonthlyYes}</p>
           <p>Alcohol in the last month No: {alcoholMonthlyNo}</p>
           <Divider />
           <p>YourPath assessment takers were given the choice of entering how many days in the previous month they used alcohol, including beer, wine or liquor. This pie graph shows the percentage of people who had used at least one day in the previous month.</p>
         </CardContent>
        </Card>
        })
      }//end if
      return alcoholDisplay;
    }

    //render to dom
    return(
        <>
        {answerAlcohol()}
        </>
    )
}

export default AlcoholMonth;
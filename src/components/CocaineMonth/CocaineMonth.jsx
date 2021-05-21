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
import CocaineMonthPie from '../CocaineMonthPie/CocaineMonthPie';

function CocaineMonth(){

    //select info from store
    const form = useSelector((store)=>store.form);

    //define variables for counting
    let cocaineMonthlyYes=0;
    let cocaineMonthlyNo=0;

    //function to display count of Nicotine users in the last month
    const answerCocaine=()=>{
        let cocaineDisplay=''
        console.log('in answer')
        //if no data exists
        if(!form){
          cocaineDisplay=<p>loading</p>
        }//end if
        //if data exists map through for counts of yes and no
        if(form.length){
        form.map((item)=>{
          let answer=item.answers[136]
         if(answer.answer){
          cocaineMonthlyYes++
         }//end if
         else{
          cocaineMonthlyNo++
        }//end else
        console.log(cocaineMonthlyYes, cocaineMonthlyNo)
        //display for counts
        cocaineDisplay= 
        <Card>
           
         <CardContent>
          <CocaineMonthPie />
           <p>Cocaine in the last month Yes:{cocaineMonthlyYes}</p>
           <p>Cocaine in the last month No: {cocaineMonthlyNo}</p>
           <Divider />
           <p>YourPath assessment takers were given the choice of entering how many days in the previous month they used cocaine, including powder or crack. This pie graph shows the percentage of people who had used at least one day in the previous month.</p>
         </CardContent>
        </Card>
        })
      }//end if
      return cocaineDisplay;
    }

    //render to dom
    return(
        <>
        {answerCocaine()}
        </>
    )
}

export default CocaineMonth;
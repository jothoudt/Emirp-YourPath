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
import HallucinogenMonthPie from '../HallucinogenMonthPie/HallucinogenMonthPie';
import Box from '@material-ui/core/Box';


function HallucinogenMonth(){

    //select info from store
    const form = useSelector((store)=>store.form);

    //define variables for counting
    let hallucinogenMonthlyYes=0;
    let hallucinogenMonthlyNo=0;

    //function to display count of Hallucinogen users in the last month
    const answerHallucinogen=()=>{
        let hallucinogenDisplay=''
        console.log('in answer')
        //if no data exists
        if(!form){
            hallucinogenDisplay=<p>loading</p>
        }//end if
        //if data exists map through for counts of yes and no
        if(form.length){
        form.map((item)=>{
          let answer=item.answers[141]
         if(answer.answer){
            hallucinogenMonthlyYes++
         }//end if
         else{
            hallucinogenMonthlyNo++
        }//end else
        console.log(hallucinogenMonthlyYes, hallucinogenMonthlyNo)
        //display for counts
        hallucinogenDisplay= 
        <Box mx='auto' width="75%" >
          <Card>
            <CardHeader 
            title={answer.text}
            />
          <CardContent>
            <Divider />
            <HallucinogenMonthPie />
            <p>Hallucinogen in the last month Yes:{hallucinogenMonthlyYes}</p>
            <p>Hallucinogen in the last month No: {hallucinogenMonthlyNo}</p>
            <Divider />
            <p>YourPath assessment takers were given the choice of entering how many days in the previous month they used hallucinogens, including LSD, mushrooms or DMT. This pie graph shows the percentage of people who had used at least one day in the previous month.</p>
          </CardContent>
          </Card>
        </Box>
        })
      }//end if
      return hallucinogenDisplay;
    }

    //render to dom
    return(
        <>
        {answerHallucinogen()}
        </>
    )
}

export default HallucinogenMonth;
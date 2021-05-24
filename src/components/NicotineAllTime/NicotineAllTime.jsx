import React from 'react';
import {useSelector} from 'react-redux';
//styling for card
import { 
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Typography
} from '@material-ui/core';
import NicotinePieChartDetails from '../NicotinePieChartDetails/NicotinePieChartDetails';
import Box from '@material-ui/core/Box';


function NicotineAllTime(){

    //select information from the store
    const form = useSelector((store)=>store.form);
    //variables to count
    let nicotineYes=0;
    let nicotineNo=0;
    //function to display
    const answerNicotine =()=>{
       
        let nicotineDisplay=''
        console.log('in answer')
        //if data doesn't exist
        if(!form){
          nicotineDisplay=<p>loading</p>
        }
        //map through and count yes/no answers
        if(form.length){
        form.map((item)=>{
          let answer=item.answers[117]
         if(answer.answer==='Yes'){
             nicotineYes++
         }
         else{
             nicotineNo++
         }
        //  if(!answer.answer){
        //      methNo++
        // }
        console.log(nicotineYes, nicotineNo)

        //define display
        nicotineDisplay= 
        <Box mx='auto' width="75%" >
          <Card>
            <CardHeader 
              title={answer.text}
            />
            <CardContent>
              <Divider />
              <NicotinePieChartDetails />           
              <p>Nicotine Yes:{nicotineYes}</p>
              <p>Nicotine No: {nicotineNo}</p>
              <Divider />
              <p>This pie chart shows the percentage of people taking YourPath’s assessment who indicated that they had used nicotine products (cigarettes, vaping, chew, cigars, etc.), at some point in their life. </p>
            </CardContent>
          </Card>
        </Box>
        })
      }
      return nicotineDisplay;
    }

    return(
        <>
        {answerNicotine()}
        </>
    )
}
export default NicotineAllTime;
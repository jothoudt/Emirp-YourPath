import React from 'react';
import {useSelector} from 'react-redux';
//pass thru pie chart
import SexualOrientationPieChart from '../SexualOrientationPieChart/SexualOrientationPieChart';
//styling for card
import { 
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Typography
} from '@material-ui/core';
import Demographics from '../Demographics/Demographics';
import Box from '@material-ui/core/Box';
import SexualOrientationPieChartDetails from '../SexualOrientationPieChartDetails/SexualOrientationPieChartDetails';




function SexualOrientation(){
  //get info from the store
    const form = useSelector((store)=>store.form);
    //variables to target
    let heterosexual=0;
    let homosexual=0;
    let bisexual=0;
    let asexual=0;
    //conditional rendering of the chart
    const answer1 =()=>{
      let display=''
      console.log('in answer')
      ///if no form information display loading
      if(!form){
        display=<p>loading</p>
      }
      //if form information map 
      if(form.length){
        form.map((item)=>{
          let answer=item.answers[97]
        if(answer.answer === 'Heterosexual (straight)'){
          heterosexual++
        }
        else if (answer.answer === 'Homosexual') {
          homosexual++
        }
        else if (answer.answer === 'Bisexual') {
          bisexual++
        }
        else if (answer.answer === 'Asexual') {
          asexual++
        }
      console.log('in orientation:', heterosexual, homosexual, bisexual, asexual)
      display= 
      <Box mx='auto' width="75%" >
        <Card>
          <SexualOrientationPieChartDetails />
          <CardHeader 
              title={answer.text}
          />
          <CardContent>
            <Divider />
            <p>heterosexual: {heterosexual}</p>
            <p>homosexual: {homosexual}</p>
            <p>bisexual: {bisexual}</p>
            <p>asexual: {asexual}</p>
          </CardContent>
        </Card>
        </Box>
      })
    }
    return display;
  }
    return(
        <>
        <Demographics />
        {answer1()}
        </>

    )
}

export default SexualOrientation;
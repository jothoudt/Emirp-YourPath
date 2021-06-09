import React from 'react';
import {useSelector} from 'react-redux';
import { Pie } from 'react-chartjs-2';
import Box from '@material-ui/core/Box';
//function returns a resized pie chart
function OTCPieChartDetails () {
  //get data from the store
    const form = useSelector((store)=>store.form);
    //define the necessary variables
    let OTCTotal=form.length;
    let OTCYes=0;
    let OTCNo=0;
    let OTCYesDisplay= 0;
    let OTCNoDisplay= 0;
    //map through data from the store
    form.map((item)=>{
      //if api number exists proceed through conditionals
      if(item.answers[127]){
      //target a specific question number to return results from the api
        let answer=item.answers[127]
        //if answer.answer is yes add one to OTCYes
       if(answer.answer==='Yes'){
          OTCYes++
       }//end if
       //if answer.answer is no or no answer add one to OTCNo
       else{
          OTCNo++
      }//end else
    }//end if
    //if api number doesn't exist add one to OTCNo
    else{
      OTCNo++
    }//end else
      //display yes results as a percentage
      OTCYesDisplay = ((OTCYes / OTCTotal) * 100).toFixed(1);
      //display no results as a percentage
      OTCNoDisplay = ((OTCNo / OTCTotal) * 100).toFixed(1);
      })
      //data for the pie chart
    const data = {
        labels: ['Yes %', 'No %'],
        datasets: [
          {
            label: '# of Votes',
            data: [OTCYesDisplay, OTCNoDisplay],
            backgroundColor: [
              'rgba(167, 221, 205, .3)',
              'rgba(0, 73, 116, .2)',
            ],
            borderColor: [
              'rgba(0, 73, 116, 1)',
              'rgba(0, 73, 116, 1)',
            ],
            borderWidth: 1,
          },
        ],
    };
    //renders a title and a pie chart to the DOM
    return (
        <>
        <div className='header'>
            <h1 className='title'>Over-the-Counter</h1>
        </div>
        <Box mx="auto" width="40%">
            <Pie data={data} />
        </Box>

        </>
    )
}
  
  export default OTCPieChartDetails;
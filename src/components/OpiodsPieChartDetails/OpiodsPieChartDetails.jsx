import React from 'react';
import {useSelector} from 'react-redux';
import { Pie } from 'react-chartjs-2';
import Box from '@material-ui/core/Box';
  //returns a resized pie chart of opioid use
function OpiodsPieChartDetails () {
    const form = useSelector((store)=>store.form);
    //define necessary variables
    let opiodsTotal=form.length;
    let opiodsYes=0;
    let opiodsNo=0;
    let opiodsYesDisplay= 0;
    let opiodsNoDisplay=0;
    //map through data from the store
    form.map((item)=>{
      //target specific question number to return results from the api
        let answer=item.answers[123]
        //if answer.answer is yes add one to opiodsYes
       if(answer.answer==='Yes'){
           opiodsYes++
       }//end if
       //if answer.answer is no or no answer add one to opiodsNo
       else{
           opiodsNo++
      }//end else
      //display yes results as a percentage
        opiodsYesDisplay = ((opiodsYes / opiodsTotal) * 100).toFixed(1);
        //display no results as a percentage
        opiodsNoDisplay = ((opiodsNo / opiodsTotal) * 100).toFixed(1);
      })
      //data for the pie chart
    const data = {
        labels: ['Yes %', 'No %'],
        datasets: [
          {
            label: '# of Votes',
            data: [opiodsYesDisplay, opiodsNoDisplay],
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
    //render resized pie chart and title to the DOM
    return (
        <>
        <div className='header'>
            <h1 className='title'>Opioids</h1>
        </div>
        <Box mx="auto" width="40%">
            <Pie data={data} />
        </Box>
        </>
    )
}
  
  export default OpiodsPieChartDetails;
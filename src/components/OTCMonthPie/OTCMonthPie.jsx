import React from 'react';
import {useSelector} from 'react-redux';
import { Pie } from 'react-chartjs-2';
import Box from '@material-ui/core/Box';
//functiin returns a pie chart of over the counter substances use in the last month
function OTCMonthPie () {
    //get information from the store
    const form = useSelector((store)=>store.form);

    //define variables
    let OTCTotal=form.length;
    let OTCYes=0;
    let OTCNo=0;
    let OTCYesDisplay= 0;
    let OTCNoDisplay=0;

    //map through store info
    form.map((item)=>{
        //targets data set needed
        let answer=item.answers[143]
        //if the answer is yes add one to OTCYes
       if(answer.answer){
        OTCYes++
       }
       //otherwise undecided and no add one to OTCNo
       else{
        OTCNo++
      }
      //display yes results as a percentage
        OTCYesDisplay = ((OTCYes / OTCTotal) * 100).toFixed(1);
        //display no results as a percentage
        OTCNoDisplay = ((OTCNo / OTCTotal) * 100).toFixed(1);
      })
      
      //data for Pie Chart
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
    //render a title and a pie chart to dom
    return (
        <>
        <div className='header'>
            <h1 className='title'>Over the Counter use in the Last Month</h1>
        </div>
        <Box mx="auto" width="40%">
          <Pie data={data} />
        </Box>

        </>
    )
}
  
  export default OTCMonthPie;
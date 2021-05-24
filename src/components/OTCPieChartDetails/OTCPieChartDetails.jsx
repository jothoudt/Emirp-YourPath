import React from 'react';
import {useSelector} from 'react-redux';
import { Pie } from 'react-chartjs-2';
import Box from '@material-ui/core/Box';





  
function OTCPieChartDetails () {
    const form = useSelector((store)=>store.form);

    let OTCTotal=form.length;
    let OTCYes=0;
    let OTCNo=0;
    let OTCYesDisplay= 0;
    let OTCNoDisplay= 0;


    form.map((item)=>{
        let answer=item.answers[127]
       if(answer.answer==='Yes'){
          OTCYes++
       }
       else{
          OTCNo++
      }
      OTCYesDisplay = ((OTCYes / OTCTotal) * 100).toFixed(1);
      OTCNoDisplay = ((OTCNo / OTCTotal) * 100).toFixed(1);
      })

    const data = {
        labels: ['Yes %', 'No %'],
        datasets: [
          {
            label: '# of Votes',
            data: [OTCYesDisplay, OTCNoDisplay],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
            ],
            borderWidth: 1,
          },
        ],
    };
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
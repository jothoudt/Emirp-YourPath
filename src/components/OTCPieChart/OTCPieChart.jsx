import React from 'react';
import {useSelector} from 'react-redux';
import { Pie } from 'react-chartjs-2';




  
function HallucinogenPieChart () {
    const form = useSelector((store)=>store.form);

    let OTCTotal=form.length;
    let OTCYes=0;
    let OTCNo=0;
    let OTCYesDisplay= OTCYes / OTCTotal //figure out a way to get percentages


    form.map((item)=>{
        let answer=item.answers[127]
        OTCTotal++
       if(answer.answer==='Yes'){
          OTCYes++
       }
       else{
          OTCNo++
      }
      })

    const data = {
        labels: ['Yes', 'No'],
        datasets: [
          {
            label: '# of Votes',
            data: [OTCYes, OTCNo],
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
            <h1 className='title'>Over-the-Counter Drug Use</h1>
        </div>
        <Pie data={data} />
        </>
    )
}
  
  export default HallucinogenPieChart;
import React from 'react';
import {useSelector} from 'react-redux';
import { Bar } from 'react-chartjs-2';
import { LogarithmicScale } from 'chart.js';


function JusticeInvolvedBar () {
    // pulls down assessment results from the store
    const form = useSelector((store)=>store.form);

    // naming variables to track totals for each response category
    let none=0;
    let past=0;
    let awaitingSentencing=0;
    let drugCourt=0;
    let outOnBail=0;
    let probation=0;
    let parole=0;
    let workhouse=0;
    let declined=0;

 
    
      form.map((item)=>{
        let answer=item.answers[106]
        console.log( 'past services:', answer.answer );
        if ( answer.answer ) {
        let answerArray = answer.answer
        console.log( 'answer length:', answerArray.length );
        answerArray.map( ( itemAnswer )=>{  
          if(itemAnswer === 'No current or past legal issues'){
            none++
          }
          else if (itemAnswer === 'Past issues, no current') {
            past++
          }
          else if (itemAnswer === 'Awaiting sentencing') {
            awaitingSentencing++
          }
          else if (itemAnswer === 'Part of drug court or other treatment court') {
            drugCourt++
          }
          else if (itemAnswer === 'Out on bail') {
            outOnBail++
          }
          else if (itemAnswer === 'On probation') {
            probation++
          }
          else if (itemAnswer === 'On parole') {
            parole++
          }
          else if (itemAnswer === 'In the workhouse') {
            workhouse++
          }
      })  
    }
    else{
      declined++
    }
  })



    const data = {
        labels: [
          'No current or past legal issues', 
          'Past issues, no current', 
          'Awaiting sentencing', 
          'Part of drug court or other treatment court', 
          'Out on bail', 
          'On probation', 
          'On parole', 
          'In the workhouse', 
          'Declined'
        ],
        datasets: [
          {
            label: '# of responders',
            data: [
              none,
              past,
              awaitingSentencing,
              drugCourt,
              outOnBail,
              probation,
              parole,
              workhouse,
              declined
            ],
            backgroundColor: 'rgba(167, 221, 205, 1)',
          },
        ],
      };
      
      const options = {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                suggestedMax: 1,
                min: 1,
                
              },
            },
          ],
        },
      };
    return(
        <>
            <div className='header'>
            <h1 className='title'>Justice involved</h1>
            </div>
            <Bar data={data} options={options} />
        </>
    )
};

export default JusticeInvolvedBar;
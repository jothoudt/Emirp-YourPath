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
    let total = form.length;
    //map through data from the store
      form.map((item)=>{
        //target specific question number to return the results from the api
        let answer=item.answers[106]
        console.log( 'past services:', answer.answer );
        //if answer.answer exist proceed through the next set of conditionals and add one to the itemAnswer that matches
        if ( answer.answer ) {
        let answerArray = answer.answer
        console.log( 'answer length:', answerArray.length );
        answerArray.map( ( itemAnswer )=>{  
          if(itemAnswer === 'No current or past legal issues'){
            none++
          }//end if
          else if (itemAnswer === 'Past issues, no current') {
            past++
          }//end else if
          else if (itemAnswer === 'Awaiting sentencing') {
            awaitingSentencing++
          }//end else if
          else if (itemAnswer === 'Part of drug court or other treatment court') {
            drugCourt++
          }//end else if
          else if (itemAnswer === 'Out on bail') {
            outOnBail++
          }//end else if
          else if (itemAnswer === 'On probation') {
            probation++
          }//end else if 
          else if (itemAnswer === 'On parole') {
            parole++
          }//end else if
          else if (itemAnswer === 'In the workhouse') {
            workhouse++
          }//end else if
      })  
    }
    //if no answer or declined add one to declined
    else{
      declined++
    }//end else
  })
//display results as a percentage
  none = ((none / total) * 100).toFixed(1);
  past = ((past / total) * 100).toFixed(1);
  awaitingSentencing = ((awaitingSentencing / total) * 100).toFixed(1);
  drugCourt = ((drugCourt / total) * 100).toFixed(1);
  outOnBail = ((outOnBail / total) * 100).toFixed(1);
  probation = ((probation / total) * 100).toFixed(1);
  parole = ((parole / total) * 100).toFixed(1);
  workhouse = ((workhouse / total) * 100).toFixed(1);
  declined = ((declined / total) * 100).toFixed(1);
  //data for the bar chart
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
            label: '% of respondents',
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
      //render a title and a bar chart
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
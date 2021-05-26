import React from 'react';
import {useSelector} from 'react-redux';
import { Bar } from 'react-chartjs-2';
import { LogarithmicScale } from 'chart.js';


function GenderBar () {
  // pulls down assessment results from the store
  const form = useSelector((store)=>store.form);

  // naming variables to track totals for each response category
  let total=form.length;
  let male=0;
  let female=0;
  let transgender=0;
  let nonBinary=0;
  let declined=0;

  
  
    form.map((item)=>{
      let answer=item.answers[83]
      console.log( 'gender:', answer.answer );
      if ( answer.answer ) {
      let answerArray = answer.answer
      console.log( 'answer length:', answerArray.length );
      answerArray.map( ( itemAnswer )=>{  
        if(itemAnswer === 'Male'){
          male++
        }
        else if (itemAnswer === 'Female') {
          female++
        }
        else if (itemAnswer === 'Transgender') {
          transgender++
        }
        else if (itemAnswer === 'Non-binary') {
          nonBinary++
        }
    })  
  }
  else{
    declined++
  }
})

  male = ((male / total) * 100).toFixed(1);
  female = ((female / total) * 100).toFixed(1);
  transgender = ((transgender / total) * 100).toFixed(1);
  nonBinary = ((nonBinary / total) * 100).toFixed(1);
  declined = ((declined / total) * 100).toFixed(1);


  const data = {
      labels: [
        'Male', 
        'Female', 
        'Transgender', 
        'Non-binary',  
        'Declined'],
      datasets: [
        {
          label: '% of respondents',
          data: [
            male,
            female,
            transgender,
            nonBinary,
            declined,
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
          <h1 className='title'>Gender</h1>
          </div>
          <Bar data={data} options={options} />
      </>
  )
};

export default GenderBar;
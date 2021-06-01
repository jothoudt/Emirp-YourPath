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
  //map through data from the store
    form.map((item)=>{
      //target a specific question number to return results from the api
      let answer=item.answers[83]
      console.log( 'gender:', answer.answer );
      //if answer.answer exists map through next set of conditionals
      if ( answer.answer ) {
      let answerArray = answer.answer
      console.log( 'answer length:', answerArray.length );
      answerArray.map( ( itemAnswer )=>{  
        //i answer is male add one to male
        if(itemAnswer === 'Male'){
          male++
        }//end if
        //if answer is female add one to female
        else if (itemAnswer === 'Female') {
          female++
        }//end else if
        //if answer is transgender add one to transgender
        else if (itemAnswer === 'Transgender') {
          transgender++
        }//end else if
        //if answer is non-binary, add one to non-binary
        else if (itemAnswer === 'Non-binary') {
          nonBinary++
        }//end else if
    })  
  }
  //if no answer.answer, add one to declined
  else{
    declined++
  }
})
//display male results as a percentage
  male = ((male / total) * 100).toFixed(1);
//display female results as a percentage
  female = ((female / total) * 100).toFixed(1);
  //display transgender results as a percentage
  transgender = ((transgender / total) * 100).toFixed(1);
  //display nonBinary results as a percentage
  nonBinary = ((nonBinary / total) * 100).toFixed(1);
  //display declined results as a percentage
  declined = ((declined / total) * 100).toFixed(1);
  //data for the bar chart
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
    //render a bar chart with a title
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
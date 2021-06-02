import React from 'react';
import {useSelector} from 'react-redux';
import { Bar } from 'react-chartjs-2';
import { LogarithmicScale } from 'chart.js';
//function returns a bar chart of past services used
function PastServicesBar () {
    // pulls down assessment results from the store
    const form = useSelector((store)=>store.form);

    // naming variables to track totals for each response category
    let total=form.length;
    let psychWard=0;
    let detox=0;
    let residential=0;
    let outpatient=0;
    let mutualSupport=0;
    let therapy=0;
    let medicationAssisted=0;
    let prescribed=0;
    let soberHousing=0;
    let declined=0;
    //map through the data from the store
      form.map((item)=>{
        //target a specific question number to return the results from the api
        let answer=item.answers[113]
        console.log( 'past services:', answer.answer );
        //if answer.answer exists, proceed through the next set of conditionals, adding one to the variable in the matching conditional
        if ( answer.answer ) {
        let answerArray = answer.answer
        console.log( 'answer length:', answerArray.length );
        answerArray.map( ( itemAnswer )=>{  
          if(itemAnswer === 'A psych ward or a psychiatric hold'){
            psychWard++
          }//end if
          else if (itemAnswer === 'Detox') {
            detox++
          }//end else if
          else if (itemAnswer === 'Residential Treatment') {
            residential++
          }//end else if
          else if (itemAnswer === 'Outpatient treatment') {
            outpatient++
          }//end else if
          else if (itemAnswer === 'Attended mutual support meetings (AA, NA, SMART recovery, etc...)') {
            mutualSupport++
          }//end else if
          else if (itemAnswer === 'Attended individual mental health therapy') {
            therapy++
          }//end else if
          else if (itemAnswer === 'Medication-assisted treatment (i.e. methadone, Vivitrol/Naltrexone or Suboxone/buprenorphine)') {
            medicationAssisted++
          }//end else if
          else if (itemAnswer === 'Been prescribed medication for mental health issues (depression, anxiety, sleep, etc...)') {
            prescribed++
          }//end else if
          else if (itemAnswer === 'Sober Housing') {
            soberHousing++
          }//end else if
      })  
    }
    //if answer.answer doesn't exist or answer is declined add one to declined
    else{
      declined++
    }
  })
  //display results as percentages
  psychWard = ((psychWard / total) * 100).toFixed(1);
  detox = ((detox / total) * 100).toFixed(1);
  residential = ((residential / total) * 100).toFixed(1);
  outpatient = ((outpatient / total) * 100).toFixed(1);
  mutualSupport = ((mutualSupport / total) * 100).toFixed(1);
  therapy = ((therapy / total) * 100).toFixed(1);
  medicationAssisted = ((medicationAssisted / total) * 100).toFixed(1);
  prescribed = ((prescribed / total) * 100).toFixed(1);
  soberHousing = ((soberHousing / total) * 100).toFixed(1);
  declined = ((declined / total) * 100).toFixed(1);
  //data for the table
    const data = {
        labels: [
          'A psych ward or a psychiatric hold', 
          'Detox', 
          'Residential Treatment', 
          'Outpatient treatment', 
          'Attended mutual support meetings (AA, NA, SMART recovery, etc...)', 
          'Attended individual mental health therapy', 
          'Medication-assisted treatment (i.e. methadone, Vivitrol/Naltrexone or Suboxone/buprenorphine)', 
          'Been prescribed medication for mental health issues (depression, anxiety, sleep, etc...)', 
          'Sober Housing', 
          'Declined'],
        datasets: [
          {
            label: '% of respondents',
            data: [
              psychWard,
              detox,
              residential,
              outpatient,
              mutualSupport,
              therapy,
              medicationAssisted,
              prescribed,
              soberHousing,
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
      //render title and pie chart to the DOM
    return(
        <>
            <div className='header'>
            <h1 className='title'>All Services Used</h1>
            </div>
            <Bar data={data} options={options} />
        </>
    )
};

export default PastServicesBar;
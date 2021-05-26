import React from 'react';
import {useSelector} from 'react-redux';
import { Bar } from 'react-chartjs-2';
import { LogarithmicScale } from 'chart.js';


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

    
    
      form.map((item)=>{
        let answer=item.answers[113]
        console.log( 'past services:', answer.answer );
        if ( answer.answer ) {
        let answerArray = answer.answer
        console.log( 'answer length:', answerArray.length );
        answerArray.map( ( itemAnswer )=>{  
          if(itemAnswer === 'A psych ward or a psychiatric hold'){
            psychWard++
          }
          else if (itemAnswer === 'Detox') {
            detox++
          }
          else if (itemAnswer === 'Residential Treatment') {
            residential++
          }
          else if (itemAnswer === 'Outpatient treatment') {
            outpatient++
          }
          else if (itemAnswer === 'Attended mutual support meetings (AA, NA, SMART recovery, etc...)') {
            mutualSupport++
          }
          else if (itemAnswer === 'Attended individual mental health therapy') {
            therapy++
          }
          else if (itemAnswer === 'Medication-assisted treatment (i.e. methadone, Vivitrol/Naltrexone or Suboxone/buprenorphine)') {
            medicationAssisted++
          }
          else if (itemAnswer === 'Been prescribed medication for mental health issues (depression, anxiety, sleep, etc...)') {
            prescribed++
          }
          else if (itemAnswer === 'Sober Housing') {
            soberHousing++
          }
      })  
    }
    else{
      declined++
    }
  })



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
            label: '# of responders',
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
import React from 'react';
import {useSelector} from 'react-redux';
import { Bar } from 'react-chartjs-2';
import { LogarithmicScale } from 'chart.js';


function MentalHealthBar () {
    // pulls down assessment results from the store
    const form = useSelector((store)=>store.form);

    // naming variables to track totals for each response category
    let ptsd=0;
    let anxiety=0;
    let depression=0;
    let bipolar=0;
    let schizophrenia=0;
    let adhd=0;
    let eatingDisorder=0;
    let ocd=0;
    let personalityDisorder=0;
    let other=0;
    let declined=0;
    let total = form.length;
    //map through data from the store
      form.map((item)=>{
        //target specific question number to return results from the api
        let answer=item.answers[150]
        console.log( 'past services:', answer.answer );
        //if answer.answer exists proceed through the next set of conditionals. If itemAnswer matches string add one to the variable in that conditional
        if ( answer.answer ) {
        let answerArray = answer.answer
        console.log( 'answer length:', answerArray.length );
        answerArray.map( ( itemAnswer )=>{  
          if(itemAnswer === 'Post-Traumatic Stress Disorder or PTSD'){
            ptsd++
          }//end if
          else if (itemAnswer === 'Anxiety or Panic Attacks') {
            anxiety++
          }//end else if
          else if (itemAnswer === 'Depression') {
            depression++
          }//end else if
          else if (itemAnswer === 'Bipolar Disorder') {
            bipolar++
          }//end else if
          else if (itemAnswer === 'Schizophrenia') {
            schizophrenia++
          }//end else if
          else if (itemAnswer === 'Attention-deficit hyperactivity disorder (ADHD)') {
            adhd++
          }//end else if
          else if (itemAnswer === 'Eating disorder, including anorexia or bulimia') {
            eatingDisorder++
          }//end else if
          else if (itemAnswer === 'Obsessive-Compulsive Disorder') {
            ocd++
          }//end else if
          else if (itemAnswer === 'Borderline Personality Disorder') {
            personalityDisorder++
          }//end else if
          else if (itemAnswer === 'Other mental health issue') {
            other++
          }//end else if          
      })  
    }
    //if no answer or declined add one to declined
    else{
      declined++
    }
  })
  //display results as percentages
    ptsd = ((ptsd / total) * 100).toFixed(1);
    anxiety = ((anxiety / total) * 100).toFixed(1);
    depression = ((depression / total) * 100).toFixed(1);
    bipolar = ((bipolar / total) * 100).toFixed(1);
    schizophrenia = ((schizophrenia / total) * 100).toFixed(1);
    adhd = ((adhd / total) * 100).toFixed(1);
    eatingDisorder = ((eatingDisorder / total) * 100).toFixed(1);
    ocd = ((ocd / total) * 100).toFixed(1);
    personalityDisorder = ((personalityDisorder / total) * 100).toFixed(1);
    other = ((other / total) * 100).toFixed(1);
    declined = ((declined / total) * 100).toFixed(1);
    //data for the bar chart
    const data = {
        labels: [
          'Post-Traumatic Stress Disorder or PTSD', 
          'Anxiety or Panic Attacks', 
          'Depression',
          'Bipolar Disorder', 
          'Schizophrenia', 
          'Attention-deficit hyperactivity disorder (ADHD)', 
          'Eating disorder, including anorexia or bulimia', 
          'Obsessive-Compulsive Disorder', 
          'Borderline Personality Disorder', 
          'Other mental health issue', 
          'Declined'],
        datasets: [
          {
            label: '% of respondents',
            data: [
              ptsd,
              anxiety,
              depression,
              bipolar,
              schizophrenia,
              adhd,
              eatingDisorder,
              ocd,
              personalityDisorder,
              other,
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
      //renders title and a bar chart
    return(
        <>
            <div className='header'>
            <h1 className='title'>Mental health</h1>
            </div>
            <Bar data={data} options={options} />
        </>
    )
};

export default MentalHealthBar;
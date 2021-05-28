import React from 'react';
import {useSelector} from 'react-redux';
import { Bar } from 'react-chartjs-2';
import { LogarithmicScale } from 'chart.js';


function AllDrugsBar () {
    // pulls down assessment results from the store
    const form = useSelector((store)=>store.form);

    // naming variables to track totals for each response category
    let total=form.length;
    let marijuana=0;
    let marijuanaDisplay=0;
    let overTheCounter=0;
    let overTheCounterDisplay=0;
    let hallucinogen=0;
    let hallucinogenDisplay=0;
    let methamphetamine=0;
    let methamphetamineDisplay=0;
    let cocaine=0;
    let concaineDisplay=0;
    let inhalants=0;
    let inhalantsDisplay=0;
    let benzodiazepines=0;
    let benzodiazepinesDisplay=0;
    let otherOpiods=0;
    let otherOpiodsDisplay=0;
    let heroin=0;
    let heroinDisplay=0;
    let alcohol=0;
    let alcoholDisplay=0;
    let nicotine=0;
    let nicotineDisplay=0;
    let other=0;
    let otherDisplay=0;

    // form.map((item)=>{
    //     let answer=item.answers[119]
    //     if(answer.answer==='Yes'){
    //        marijuana++
    //     }
    //     marijuanaDisplay = ((marijuana / total) * 100).toFixed(1);
    //     })
    
    // form.map((item)=>{
    //     let answer=item.answers[127]
    //     if(answer.answer==='Yes'){
    //          overTheCounter++
    //     }
    //     overTheCounterDisplay = ((overTheCounter / total) * 100).toFixed(1);
    //     })
    
    // form.map((item)=>{
    //     let answer=item.answers[125]
    //     if(answer.answer==='Yes'){
    //         hallucinogen++
    //     }
    //     hallucinogenDisplay = ((hallucinogen / total) * 100).toFixed(1);
    //     }) 
    
    function getDrugs(counter, display, number) {
        counter=0;
        form.map((item)=>{
            let answer=item.answers[number]
            if(answer.answer==='Yes'){
                counter++
        }
          display = ((counter / total) * 100).toFixed(1);
        })
        console.log('this is the display:', display);
        return display;
    }
    



    const data = {
        labels: ['Marijuana', 'Over The Counter', 'Hallucinogens', 'Methamphetamine', 'Cocaine', 'Inhalants', 'Benzodiazepines', 'Other Opiods', 'Heroin', 'Alcohol', 'Nicotine', 'Other'],
        datasets: [
          {
            label: '% of Respondents',
            data: [getDrugs(marijuana, marijuanaDisplay, 119), getDrugs(overTheCounter, overTheCounterDisplay, 127), getDrugs(hallucinogen, hallucinogenDisplay, 125), getDrugs(methamphetamine, methamphetamineDisplay, 121), getDrugs(cocaine, concaineDisplay, 120), getDrugs(inhalants, inhalantsDisplay, 126), getDrugs(benzodiazepines, benzodiazepinesDisplay, 124), getDrugs(otherOpiods, otherOpiodsDisplay, 123), getDrugs(heroin, heroinDisplay, 122), getDrugs(alcohol, alcoholDisplay, 118) , getDrugs(nicotine, nicotineDisplay, 117), getDrugs(other, otherDisplay, 128)],
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
            <h1 className='title'>All Drugs Used</h1>
            </div>
            <Bar data={data} options={options} />
        </>
    )
};

export default AllDrugsBar;
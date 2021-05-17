import React from 'react';
import {useSelector} from 'react-redux';
import { Bar } from 'react-chartjs-2';
import { LogarithmicScale } from 'chart.js';

function AllDrugsLastMonth (){

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

    function getDrugs(counter, display, number) {
        counter=0;
        form.map((item)=>{
            let answer=item.answers[number]
            if(!answer){
              display=0;
            }
            else if(answer.answer){
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
            label: '# of Red Votes',
            data: [getDrugs(marijuana, marijuanaDisplay, 135), getDrugs(overTheCounter, overTheCounterDisplay, 143), getDrugs(hallucinogen, hallucinogenDisplay, 141), getDrugs(methamphetamine, methamphetamineDisplay, 1137), getDrugs(cocaine, concaineDisplay, 136), getDrugs(inhalants, inhalantsDisplay, 142), getDrugs(benzodiazepines, benzodiazepinesDisplay, 140), getDrugs(otherOpiods, otherOpiodsDisplay, 139), getDrugs(heroin, heroinDisplay, 138), getDrugs(alcohol, alcoholDisplay, 134) , getDrugs(nicotine, nicotineDisplay, 133), getDrugs(other, otherDisplay, 144)],
            backgroundColor: 'rgb(255, 99, 132)',
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
}

export default AllDrugsLastMonth;
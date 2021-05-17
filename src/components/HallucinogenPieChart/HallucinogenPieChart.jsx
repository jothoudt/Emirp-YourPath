import React from 'react';
import {useSelector} from 'react-redux';
import { Pie } from 'react-chartjs-2';

//Hallucinogen
//hallucinogen

  
function HallucinogenPieChart () {
    const form = useSelector((store)=>store.form);

    let hallucinogenTotal=form.length;
    let hallucinogenYes=0;
    let hallucinogenNo=0;
    let hallucinogenYesDisplay= 0;
    let hallucinogenNoDisplay=0;


    form.map((item)=>{
        let answer=item.answers[125]
        hallucinogenTotal++
       if(answer.answer==='Yes'){
          hallucinogenYes++
       }
       else{
          hallucinogenNo++
      }
      hallucinogenYesDisplay = ((hallucinogenYes / hallucinogenTotal) * 100).toFixed(1);
      hallucinogenNoDisplay = ((hallucinogenNo / hallucinogenTotal) * 100).toFixed(1);
      })

    const data = {
        labels: ['Yes %', 'No %'],
        datasets: [
          {
            label: '# of Votes',
            data: [hallucinogenYesDisplay, hallucinogenNoDisplay],
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
            <h1 className='title'>Use of Hallucinogens</h1>
        </div>
        <Pie data={data} />
        </>
    )
}
  
  export default HallucinogenPieChart;
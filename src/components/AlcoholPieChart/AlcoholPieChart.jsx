import React from 'react';
import {useSelector} from 'react-redux';
import { Pie } from 'react-chartjs-2';


function AlcoholPieChart () {
    const form = useSelector((store)=>store.form);

    

    let alcoholTotal=form.length;
    let alcoholYes=0;
    let alcoholNo=0;
    let alcoholYesDisplay= 0;
    let alcoholNoDisplay=0;


    form.map((item)=>{
        let answer=item.answers[118]
       if(answer.answer==='Yes'){
           alcoholYes++
       }
       else{
           alcoholNo++
      }
        alcoholYesDisplay = ((alcoholYes / alcoholTotal) * 100).toFixed(1);
        alcoholNoDisplay = ((alcoholNo / alcoholTotal) * 100).toFixed(1);
      })
      

    const data = {
        labels: ['Yes %', 'No %'],
        datasets: [
          {
            label: '# of Votes',
            data: [alcoholYesDisplay, alcoholNoDisplay],
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
            <h1 className='title'>Alcohol</h1>
        </div>
        <Pie data={data} />
        </>
    )
}
  
  export default AlcoholPieChart;
import React from 'react';
import {useSelector} from 'react-redux';
import { Pie } from 'react-chartjs-2';



  
function HeroinMonthPie () {
    const form = useSelector((store)=>store.form);

    

    let heroinTotal=form.length;
    let heroinYes=0;
    let heroinNo=0;
    let heroinYesDisplay= 0;
    let heroinNoDisplay=0;


    form.map((item)=>{
        let answer=item.answers[138]
       if(answer.answer){
           heroinYes++
       }
       else{
           heroinNo++
      }
        heroinYesDisplay = ((heroinYes / heroinTotal) * 100).toFixed(1);
        heroinNoDisplay = ((heroinNo / heroinTotal) * 100).toFixed(1);
      })
      

    const data = {
        labels: ['Yes %', 'No %'],
        datasets: [
          {
            label: '# of Votes',
            data: [heroinYesDisplay, heroinNoDisplay],
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
            <h1 className='title'>Heroin Use(with in last month)</h1>
        </div>
        <Pie data={data} />
        </>
    )
}
  
  export default HeroinMonthPie;
import React from 'react';
import {useSelector} from 'react-redux';
import { Pie } from 'react-chartjs-2';



  
function OpiodsPieChart () {
    const form = useSelector((store)=>store.form);

    

    let opiodsTotal=form.length;
    let opiodsYes=0;
    let opiodsNo=0;
    let opiodsYesDisplay= 0;
    let opiodsNoDisplay=0;


    form.map((item)=>{
        let answer=item.answers[123]
       if(answer.answer==='Yes'){
           opiodsYes++
       }
       else{
           opiodsNo++
      }
        opiodsYesDisplay = ((opiodsYes / opiodsTotal) * 100).toFixed(1);
        opiodsNoDisplay = ((opiodsNo / opiodsTotal) * 100).toFixed(1);
      })
      

    const data = {
        labels: ['Yes %', 'No %'],
        datasets: [
          {
            label: '# of Votes',
            data: [opiodsYesDisplay, opiodsNoDisplay],
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
            <h1 className='title'>Opioids</h1>
        </div>
        <Pie data={data} />
        </>
    )
}
  
  export default OpiodsPieChart;
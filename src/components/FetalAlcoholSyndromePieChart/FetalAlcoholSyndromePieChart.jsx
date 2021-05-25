import React from 'react';
import {useSelector} from 'react-redux';
import { Pie } from 'react-chartjs-2';



  
function FASChart () {
    const form = useSelector((store)=>store.form);

    

    let fasTotal=form.length;
    let fasYes=0;
    let fasNo=0;
    let fasYesDisplay= 0;
    let fasNoDisplay=0;


    form.map((item)=>{ 
        let answer=item.answers[108]
       if(answer.answer==='Yes'){
           fasYes++
       }
       else{
           fasNo++
      }
        fasYesDisplay = ((fasYes / fasTotal) * 100).toFixed(1);
        fasNoDisplay = ((fasNo / fasTotal) * 100).toFixed(1);
      })
      

    const data = {
        labels: ['Yes %', 'No %'],
        datasets: [
          {
            label: '# of Votes',
            data: [fasYesDisplay, fasNoDisplay],
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
            <h1 className='title'>FAS Diganoses</h1>
        </div>
        <Pie data={data} />
        </>
    )
}
  
  export default FASChart;
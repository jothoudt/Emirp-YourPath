import React from 'react';
import {useSelector} from 'react-redux';
import { Pie } from 'react-chartjs-2';



  
function NicotinePieChart () {
    const form = useSelector((store)=>store.form);

    

    let nicotineTotal=form.length;
    let nicotineYes=0;
    let nicotineNo=0;
    let nicotineYesDisplay= 0;
    let nicotineNoDisplay=0;


    form.map((item)=>{
        let answer=item.answers[117]
       if(answer.answer==='Yes'){
           nicotineYes++
       }
       else{
           nicotineNo++
      }
        nicotineYesDisplay = ((nicotineYes / nicotineTotal) * 100).toFixed(1);
        nicotineNoDisplay = ((nicotineNo / nicotineTotal) * 100).toFixed(1);
      })
      

    const data = {
        labels: ['Yes %', 'No %'],
        datasets: [
          {
            label: '# of Votes',
            data: [nicotineYesDisplay, nicotineNoDisplay],
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
            <h1 className='title'>Nicotine</h1>
        </div>
        <Pie data={data} />
        </>
    )
}
  
  export default NicotinePieChart;
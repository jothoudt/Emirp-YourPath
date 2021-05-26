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
              'rgba(167, 221, 205, .3)',
              'rgba(0, 73, 116, .2)',
            ],
            borderColor: [
              'rgba(0, 73, 116, 1)',
              'rgba(0, 73, 116, 1)',
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
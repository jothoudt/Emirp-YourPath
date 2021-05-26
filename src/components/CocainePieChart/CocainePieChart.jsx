import React from 'react';
import {useSelector} from 'react-redux';
import { Pie } from 'react-chartjs-2';

//Cocaine
//cocaine

  
function CocainePieChart () {
    const form = useSelector((store)=>store.form);

    let cocaineTotal=form.length;
    let cocaineYes=0;
    let cocaineNo=0;
    let cocaineYesDisplay= 0;
    let cocaineNoDisplay=0;


    form.map((item)=>{
        let answer=item.answers[120]
       if(answer.answer==='Yes'){
        cocaineYes++
       }
       else{
        cocaineNo++
      }
      cocaineYesDisplay = ((cocaineYes / cocaineTotal) * 100).toFixed(1);
      cocaineNoDisplay = ((cocaineNo / cocaineTotal) * 100).toFixed(1);
      })

    const data = {
        labels: ['Yes %', 'No %'],
        datasets: [
          {
            label: '# of Votes',
            data: [cocaineYesDisplay, cocaineNoDisplay],
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
            <h1 className='title'>Cocaine</h1>
        </div>
        <Pie data={data} />
        </>
    )
}
  
  export default CocainePieChart;
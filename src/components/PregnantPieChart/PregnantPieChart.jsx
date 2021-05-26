import React from 'react';
import {useSelector} from 'react-redux';
import { Pie } from 'react-chartjs-2';



  
function PregnantPieChart () {
    const form = useSelector((store)=>store.form);

    

    let pregnantTotal=form.length;
    let pregnant=0;
    let pregnantDisplay=0;
    let notPregnant=0;
    let notPregnantDisplay=0;
    let notSure=0;
    let notSureDisplay=0;



    form.map((item)=>{
        let answer=item.answers[103]
        if(answer.answer==='Yes'){
            pregnant++
        }
        else if(answer.answer==='No'){
            notPregnant++
        }
        else if(answer.answer==='Not Sure'){
            notSure++
        }
        pregnantDisplay = ((pregnant / pregnantTotal) * 100).toFixed(1);
        notPregnantDisplay = ((notPregnant / pregnantTotal) * 100).toFixed(1);
        notSureDisplay = ((notSure / pregnantTotal) * 100).toFixed(1);
      })
      

    const data = {
        labels: ['Pregnant %', 'Not Pregnant %', 'Not Sure %'],
        datasets: [
          {
            label: '# of Votes',
            data: [pregnantDisplay, notPregnantDisplay, notSureDisplay],
            backgroundColor: [
              'rgba(167, 221, 205, .3)',
              'rgba(0, 73, 116, .2)',
              'rgba(218, 204, 242, .2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'red',
              'blue',
            ],
            borderColor: [
              'rgba(0, 73, 116, 1)',
              'rgba(0, 73, 116, 1)',
              'rgba(0, 73, 116, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
              'black',
              'black',
            ],
            borderWidth: 1,
          },
        ],
    };
      
    return (
        <>
        <div className='header'>
            <h1 className='title'>Pregnant</h1>
        </div>
        <Pie data={data} />
        </>
    )
}
  
  export default PregnantPieChart;
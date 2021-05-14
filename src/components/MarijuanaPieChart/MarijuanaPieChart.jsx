import React from 'react';
import {useSelector} from 'react-redux';
import { Pie } from 'react-chartjs-2';



  
function MarijuanaPieChart () {
    const form = useSelector((store)=>store.form);

    let marijuanaTotal=form.length;
    let marijuanaYes=0;
    let marijuanaNo=0;
    let marijuanaYesDisplay= marijuanaYes / marijuanaTotal //figure out a way to get percentages


    form.map((item)=>{
        let answer=item.answers[119]
        marijuanaTotal++
       if(answer.answer==='Yes'){
           marijuanaYes++
       }
       else{
           marijuanaNo++
      }
      })

    const data = {
        labels: ['Yes', 'No'],
        datasets: [
          {
            label: '# of Votes',
            data: [marijuanaYes, marijuanaNo],
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
            <h1 className='title'>Marijuana Use</h1>
        </div>
        <Pie data={data} />
        </>
    )
}
  
  export default MarijuanaPieChart;
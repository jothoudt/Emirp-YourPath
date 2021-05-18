import React from 'react';
import {useSelector} from 'react-redux';
import { Pie } from 'react-chartjs-2';



  
function InhalantsMonthPie () {
    //get information from the store
    const form = useSelector((store)=>store.form);

    //define variables
    let inhalantTotal=form.length;
    let inhalantYes=0;
    let inhalantNo=0;
    let inhalantYesDisplay= 0;
    let inhalantNoDisplay=0;

    //map through store info
    form.map((item)=>{
        //targets data set needed
        let answer=item.answers[142]
        //if the answer is yes
       if(answer.answer){
        inhalantYes++
       }
       //otherwise undecided and no equal No
       else{
        inhalantNo++
      }
      inhalantYesDisplay = ((inhalantYes / inhalantTotal) * 100).toFixed(1);
      inhalantNoDisplay = ((inhalantNo / inhalantTotal) * 100).toFixed(1);
      })
      
      //data for Pie Chart
    const data = {
        labels: ['Yes %', 'No %'],
        datasets: [
          {
            label: '# of Votes',
            data: [inhalantYesDisplay, inhalantNoDisplay],
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
    //render to dom
    return (
        <>
        <div className='header'>
            <h1 className='title'>Inhalants used in the Last Month</h1>
        </div>
        <Pie data={data} />
        </>
    )
}
  
  export default InhalantsMonthPie;
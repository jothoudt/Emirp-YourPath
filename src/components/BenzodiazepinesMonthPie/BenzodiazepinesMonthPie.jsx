import React from 'react';
import {useSelector} from 'react-redux';
import { Pie } from 'react-chartjs-2';



  
function BenzodiazepinesMonthPie () {
    //get information from the store
    const form = useSelector((store)=>store.form);

    //define variables
    let benzodiazepinesTotal=form.length;
    let benzodiazepinesYes=0;
    let benzodiazepinesNo=0;
    let benzodiazepinesYesDisplay= 0;
    let benzodiazepinesNoDisplay=0;

    //map through store info
    form.map((item)=>{
        //targets data set needed
        let answer=item.answers[140]
        //if the answer is yes
       if(answer.answer){
        benzodiazepinesYes++
       }
       //otherwise undecided and no equal No
       else{
        benzodiazepinesNo++
      }
      benzodiazepinesYesDisplay = ((benzodiazepinesYes / benzodiazepinesTotal) * 100).toFixed(1);
      benzodiazepinesNoDisplay = ((benzodiazepinesNo / benzodiazepinesTotal) * 100).toFixed(1);
      })
      
      //data for Pie Chart
    const data = {
        labels: ['Yes %', 'No %'],
        datasets: [
          {
            label: '# of Votes',
            data: [benzodiazepinesYesDisplay, benzodiazepinesNoDisplay],
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
            <h1 className='title'>Benzodiazepines used in the Last Month</h1>
        </div>
        <Pie data={data} />
        </>
    )
}
  
  export default BenzodiazepinesMonthPie;
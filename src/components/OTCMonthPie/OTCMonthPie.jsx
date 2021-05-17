import React from 'react';
import {useSelector} from 'react-redux';
import { Pie } from 'react-chartjs-2';



  
function OTCMonthPie () {
    //get information from the store
    const form = useSelector((store)=>store.form);

    //define variables
    let OTCTotal=form.length;
    let OTCYes=0;
    let OTCNo=0;
    let OTCYesDisplay= 0;
    let OTCNoDisplay=0;

    //map through store info
    form.map((item)=>{
        //targets data set needed
        let answer=item.answers[143]
        //if the answer is yes
       if(answer.answer){
        OTCYes++
       }
       //otherwise undecided and no equal No
       else{
        OTCNo++
      }
        OTCYesDisplay = ((OTCYes / OTCTotal) * 100).toFixed(1);
        OTCNoDisplay = ((OTCNo / OTCTotal) * 100).toFixed(1);
      })
      
      //data for Pie Chart
    const data = {
        labels: ['Yes %', 'No %'],
        datasets: [
          {
            label: '# of Votes',
            data: [OTCYesDisplay, OTCNoDisplay],
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
            <h1 className='title'>Over the Counter use in the Last Month</h1>
        </div>
        <Pie data={data} />
        </>
    )
}
  
  export default OTCMonthPie;
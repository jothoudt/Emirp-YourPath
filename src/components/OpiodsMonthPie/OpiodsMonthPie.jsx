import React from 'react';
import {useSelector} from 'react-redux';
import { Pie } from 'react-chartjs-2';



  
function OpiodsMonthPie () {
    //get information from the store
    const form = useSelector((store)=>store.form);

    //define variables
    let opiodsTotal=form.length;
    let opiodsYes=0;
    let opiodsNo=0;
    let opiodsYesDisplay= 0;
    let opiodsNoDisplay=0;

    //map through store info
    form.map((item)=>{
        //targets data set needed
        let answer=item.answers[139]
        //if the answer is yes
       if(answer.answer){
        opiodsYes++
       }
       //otherwise undecided and no equal No
       else{
        opiodsNo++
      }
      opiodsYesDisplay = ((opiodsYes / opiodsTotal) * 100).toFixed(1);
      opiodsNoDisplay = ((opiodsNo / opiodsTotal) * 100).toFixed(1);
      })
      
      //data for Pie Chart
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
    //render to dom
    return (
        <>
        <div className='header'>
            <h1 className='title'>Opioids used in the Last Month</h1>
        </div>
        <Pie data={data} />
        </>
    )
}
  
  export default OpiodsMonthPie;
import React from 'react';
import {useSelector} from 'react-redux';
import { Pie } from 'react-chartjs-2';



  
function MethMonthPie () {
    //get information from the store
    const form = useSelector((store)=>store.form);

    //define variables
    let MethTotal=form.length;
    let MethYes=0;
    let MethNo=0;
    let MethYesDisplay= 0;
    let MethNoDisplay=0;

    //map through store info
    form.map((item)=>{
        //targets data set needed
        let answer=item.answers[137]
        //if the answer is yes
       if(answer.answer){
        MethYes++
       }
       //otherwise undecided and no equal No
       else{
        MethNo++
      }
        MethYesDisplay = ((MethYes / MethTotal) * 100).toFixed(1);
        MethNoDisplay = ((MethNo / MethTotal) * 100).toFixed(1);
      })
      
      //data for Pie Chart
    const data = {
        labels: ['Yes %', 'No %'],
        datasets: [
          {
            label: '# of Votes',
            data: [MethYesDisplay, MethNoDisplay],
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
            <h1 className='title'>Meth use in the Last Month</h1>
        </div>
        <Pie data={data} />
        </>
    )
}
  
  export default MethMonthPie;
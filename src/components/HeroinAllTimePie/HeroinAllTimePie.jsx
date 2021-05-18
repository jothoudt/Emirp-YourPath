import React from 'react';
import {useSelector} from 'react-redux';
import { Pie } from 'react-chartjs-2';



//function to return pie chart for lifetime meth use
function HeroinAllTimePie () {
    //select items from the store
    const form = useSelector((store)=>store.form);

    //define variables
    let heroinTotal=form.length;
    let heroinYes=0;
    let heroinNo=0;
    let heroinYesDisplay= 0;
    let heroinNoDisplay=0;

    //map through the store data
    form.map((item)=>{
        let answer=item.answers[122]
        //if answer is yes add one to yes
       if(answer.answer==='Yes'){
        heroinYes++
       }
       //if answer is no or undecided add one to no
       else{
        heroinNo++
      }
      //display in percentages
      heroinYesDisplay = ((heroinYes / heroinTotal) * 100).toFixed(1);
      heroinNoDisplay = ((heroinNo / heroinTotal) * 100).toFixed(1);
      })
      
      //data for pie chart
    const data = {
        labels: ['Yes %', 'No %'],
        datasets: [
          {
            label: '# of Votes',
            data: [heroinYesDisplay, heroinNoDisplay],
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
            <h1 className='title'>Heroin Use Lifetime</h1>
        </div>
        <Pie data={data} />
        </>
    )
}
  
  export default HeroinAllTimePie;
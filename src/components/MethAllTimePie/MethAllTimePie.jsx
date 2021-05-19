import React from 'react';
import {useSelector} from 'react-redux';
import { Pie } from 'react-chartjs-2';



//function to return pie chart for lifetime meth use
function MethAllTimePie () {
    //select items from the store
    const form = useSelector((store)=>store.form);

    //define variables
    let methTotal=form.length;
    let methYes=0;
    let methNo=0;
    let methYesDisplay= 0;
    let methNoDisplay=0;

    //map through the store data
    form.map((item)=>{
        let answer=item.answers[121]
        //if answer is yes add one to yes
       if(answer.answer==='Yes'){
        methYes++
       }
       //if answer is no or undecided add one to no
       else{
        methNo++
      }
      //display in percentages
      methYesDisplay = ((methYes / methTotal) * 100).toFixed(1);
      methNoDisplay = ((methNo / methTotal) * 100).toFixed(1);
      })
      
      //data for pie chart
    const data = {
        labels: ['Yes %', 'No %'],
        datasets: [
          {
            label: '# of Votes',
            data: [methYesDisplay, methNoDisplay],
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
            <h1 className='title'>Methamphetamine</h1>
        </div>
        <Pie data={data} />
        </>
    )
}
  
  export default MethAllTimePie;
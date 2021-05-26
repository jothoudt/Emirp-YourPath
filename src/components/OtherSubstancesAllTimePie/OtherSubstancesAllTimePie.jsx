import React from 'react';
import {useSelector} from 'react-redux';
import { Pie } from 'react-chartjs-2';



//function to return pie chart for lifetime other substance use
function OtherSubstanceAllTimePie () {
    //select items from the store
    const form = useSelector((store)=>store.form);

    //define variables
    let otherSubstanceTotal=form.length;
    let otherSubstanceYes=0;
    let otherSubstanceNo=0;
    let otherSubstanceYesDisplay= 0;
    let otherSubstanceNoDisplay=0;

    //map through the store data
    form.map((item)=>{
        let answer=item.answers[128]
        //if answer is yes add one to yes
       if(answer.answer==='Yes'){
        otherSubstanceYes++
       }
       //if answer is no or undecided add one to no
       else{
        otherSubstanceNo++
      }
      //display in percentages
      otherSubstanceYesDisplay = ((otherSubstanceYes / otherSubstanceTotal) * 100).toFixed(1);
      otherSubstanceNoDisplay = ((otherSubstanceNo / otherSubstanceTotal) * 100).toFixed(1);
      })
      
      //data for pie chart
    const data = {
        labels: ['Yes %', 'No %'],
        datasets: [
          {
            label: '# of Votes',
            data: [otherSubstanceYesDisplay, otherSubstanceNoDisplay],
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
    //render to dom
    return (
        <>
        <div className='header'>
            <h1 className='title'>Other Substances</h1>
        </div>
        <Pie data={data} />
        </>
    )
}
  
  export default OtherSubstanceAllTimePie;
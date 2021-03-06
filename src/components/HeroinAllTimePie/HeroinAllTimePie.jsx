import React from 'react';
import {useSelector} from 'react-redux';
import { Pie } from 'react-chartjs-2';



//function to return pie chart for lifetime heroin use
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
      //if api number exists proceed through conditionals
      if(item.answers[122]){
      //target a specific question number to return results from DOM
        let answer=item.answers[122]
        //if answer is yes add one to yes
        if(answer.answer==='Yes'){
          heroinYes++
        }//end if
        //if answer is no or undecided add one to no
        else{
          heroinNo++
        }//end else
      }
      //if api number does exist add one to heroinNo++
      else{
        heroinNo++
      }//end else
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
    //render a title and pie chart to the DOM
    return (
        <>
        <div className='header'>
            <h1 className='title'>Heroin</h1>
        </div>
        <Pie data={data} />
        </>
    )
}
  
  export default HeroinAllTimePie;
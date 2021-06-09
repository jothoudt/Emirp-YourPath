import React from 'react';
import {useSelector} from 'react-redux';
import { Pie } from 'react-chartjs-2';

//function that returns a pie chart for all time nicotine use
function NicotinePieChart () {
  //get data from the store
    const form = useSelector((store)=>store.form);
    //define necessary variables
    let nicotineTotal=form.length;
    let nicotineYes=0;
    let nicotineNo=0;
    let nicotineYesDisplay= 0;
    let nicotineNoDisplay=0;
    //map through data from the store
    form.map((item)=>{
      //if api number exists proceed through conditionals
      if(item.answers[117]){
      //target specific question number to return results from the api
        let answer=item.answers[117]
        //if answer.answer is yes add one to nicotineYes
        if(answer.answer==='Yes'){
          nicotineYes++
        }//end if
        //if answer.answer doesn't exist add one to nicotineNo
        else{
           nicotineNo++
        }//end else
      }//end if
      //if api number doesn't exist add one to nicotineNo
      else{
        nicotineNo++
      }//end else
      //display yes results as a percentage
        nicotineYesDisplay = ((nicotineYes / nicotineTotal) * 100).toFixed(1);
        //display no results as a percentage
        nicotineNoDisplay = ((nicotineNo / nicotineTotal) * 100).toFixed(1);
      })
      //data for the pie chart
    const data = {
        labels: ['Yes %', 'No %'],
        datasets: [
          {
            label: '# of Votes',
            data: [nicotineYesDisplay, nicotineNoDisplay],
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
    //render title and a pie chart to DOM
    return (
        <>
        <div className='header'>
            <h1 className='title'>Nicotine</h1>
        </div>
        <Pie data={data} />
        </>
    )
}
  
  export default NicotinePieChart;
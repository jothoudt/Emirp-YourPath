import React from 'react';
import {useSelector} from 'react-redux';
import { Pie } from 'react-chartjs-2';
//function returns a pie chart of opioid usage all time
function OpiodsPieChart () {
  //get data from the store
    const form = useSelector((store)=>store.form);
    //define variables
    let opiodsTotal=form.length;
    let opiodsYes=0;
    let opiodsNo=0;
    let opiodsYesDisplay= 0;
    let opiodsNoDisplay=0;
    //map through the data from the store
    form.map((item)=>{
      //target specific question number to return results from the api
        let answer=item.answers[123]
        //if answer.answer is yes, add one to opiodsYes
       if(answer.answer==='Yes'){
           opiodsYes++
       }//end if
       //if answer.answer is no or undecided add one to opiodsNo
       else{
           opiodsNo++
      }
      //display yes results as a percentage
        opiodsYesDisplay = ((opiodsYes / opiodsTotal) * 100).toFixed(1);
        //display no results as a percentage
        opiodsNoDisplay = ((opiodsNo / opiodsTotal) * 100).toFixed(1);
      })
      //data for the table
    const data = {
        labels: ['Yes %', 'No %'],
        datasets: [
          {
            label: '# of Votes',
            data: [opiodsYesDisplay, opiodsNoDisplay],
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
    //returns a title and a pie chart
    return (
        <>
        <div className='header'>
            <h1 className='title'>Opioids</h1>
        </div>
        <Pie data={data} />
        </>
    )
}
  
  export default OpiodsPieChart;
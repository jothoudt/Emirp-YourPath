import React from 'react';
import {useSelector} from 'react-redux';
import { Pie } from 'react-chartjs-2';
  //function returns a pie chart of over the counter substance use all time
function OTCPieChart () {
  //get data from the store
    const form = useSelector((store)=>store.form);
    //define the necessary variables
    let OTCTotal=form.length;
    let OTCYes=0;
    let OTCNo=0;
    let OTCYesDisplay= 0;
    let OTCNoDisplay= 0;
    //map through data from the store
    form.map((item)=>{
      //target specific question number to return results from the api
        let answer=item.answers[127]
        //if answer.answer is yes add one to OTCYes
       if(answer.answer==='Yes'){
          OTCYes++
       }//end if
       //if answer.answer is no or no answer add one to OTCNo
       else{
          OTCNo++
      }//end else
      //display yes results as a percentage
      OTCYesDisplay = ((OTCYes / OTCTotal) * 100).toFixed(1);
      //display no results as a percentage
      OTCNoDisplay = ((OTCNo / OTCTotal) * 100).toFixed(1);
      })
      //data for the table
    const data = {
        labels: ['Yes %', 'No %'],
        datasets: [
          {
            label: '# of Votes',
            data: [OTCYesDisplay, OTCNoDisplay],
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
    //return title and a pie chart
    return (
        <>
        <div className='header'>
            <h1 className='title'>Over-the-Counter</h1>
        </div>
        <Pie data={data} />
        </>
    )
}
  
  export default OTCPieChart;
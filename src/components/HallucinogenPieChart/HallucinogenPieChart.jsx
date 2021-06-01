import React from 'react';
import {useSelector} from 'react-redux';
import { Pie } from 'react-chartjs-2';
  
//function to return hallucinogen pie chart for all time use
function HallucinogenPieChart () {
  //get data from the store
    const form = useSelector((store)=>store.form);
    //define necessary variables
    let hallucinogenTotal=form.length;
    let hallucinogenYes=0;
    let hallucinogenNo=0;
    let hallucinogenYesDisplay= 0;
    let hallucinogenNoDisplay=0;
    //map through data from the store
    form.map((item)=>{
      //target specific number to return the results from the api
        let answer=item.answers[125]
        //if answer.answer is yes add one to hallucinogenYes
       if(answer.answer==='Yes'){
          hallucinogenYes++
       }//end if
       //if answer.answer is no or no answer add one to hallucinogenNo
       else{
          hallucinogenNo++
      }//end else
      //display yes results as a percentage
      hallucinogenYesDisplay = ((hallucinogenYes / hallucinogenTotal) * 100).toFixed(1);
      //display no results as a percentage
      hallucinogenNoDisplay = ((hallucinogenNo / hallucinogenTotal) * 100).toFixed(1);
      })
//data for the pie chart
    const data = {
        labels: ['Yes %', 'No %'],
        datasets: [
          {
            label: '# of Votes',
            data: [hallucinogenYesDisplay, hallucinogenNoDisplay],
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
            <h1 className='title'>Hallucinogens</h1>
        </div>
        <Pie data={data} />
        </>
    )
}
  
  export default HallucinogenPieChart;
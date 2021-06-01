import React from 'react';
import {useSelector} from 'react-redux';
import { Pie } from 'react-chartjs-2';

//returns a pie chart for the counts of users that used cocaine in their lifetime
function CocainePieChart () {
  //get info from the stre
    const form = useSelector((store)=>store.form);
    //define variables
    let cocaineTotal=form.length;
    let cocaineYes=0;
    let cocaineNo=0;
    let cocaineYesDisplay= 0;
    let cocaineNoDisplay=0;
    //map through information from the store
    form.map((item)=>{
      //target a specific question to get answers from the api
        let answer=item.answers[120]
        //if answer.answer is Yes add one to cocaineYes
       if(answer.answer==='Yes'){
        cocaineYes++
       }//end if
       //if answer is no or no answer add one to cocaineNo
       else{
        cocaineNo++
      }//end else
      //display yes results as a percentage
      cocaineYesDisplay = ((cocaineYes / cocaineTotal) * 100).toFixed(1);
      //display no results as a percentage
      cocaineNoDisplay = ((cocaineNo / cocaineTotal) * 100).toFixed(1);
      })
      //data for the pie chart
    const data = {
        labels: ['Yes %', 'No %'],
        datasets: [
          {
            label: '# of Votes',
            data: [cocaineYesDisplay, cocaineNoDisplay],
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
    //renders a title and a pie chart to the DOM
    return (
        <>
        <div className='header'>
            <h1 className='title'>Cocaine</h1>
        </div>
        <Pie data={data} />
        </>
    )
}
  
  export default CocainePieChart;
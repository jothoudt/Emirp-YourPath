import React from 'react';
import {useSelector} from 'react-redux';
import { Pie } from 'react-chartjs-2';
import PastServicesBar from '../PastServicesBar/PastServicesBar';
//function that returns inhalant pie chart for all time use 
function InhalantsPieChart () {
  //get data from the store
    const form = useSelector((store)=>store.form);
    //define the necessary variables
    let total=form.length;
    let yes=0;
    let no=0;
    let yesDisplay= 0;
    let noDisplay=0;
    //map through the data from the store
    form.map((item)=>{
      //target a specific question number to return results from the api
        let answer=item.answers[126]
        //if answer.answer is yes add one to yes
       if(answer.answer==='Yes'){
           yes++
       }//end if 
       //if answer.answer is no or no answer add one to no
       else{
           no++
      }//end else
      //display yes results as a percentage
        yesDisplay = ((yes / total) * 100).toFixed(1);
        //return no results as a percentage
        noDisplay = ((no / total) * 100).toFixed(1);
      })
      //data for the pie chart
    const data = {
        labels: ['Yes %', 'No %'],
        datasets: [
          {
            label: '# of Votes',
            data: [yesDisplay, noDisplay],
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
    //render title and pie chart to DOM
    return (
        <>
        <div className='header'>
            <h1 className='title'>Inhalants</h1>
        </div>
        <Pie data={data} />
        </>
    )
}
  
  export default InhalantsPieChart;
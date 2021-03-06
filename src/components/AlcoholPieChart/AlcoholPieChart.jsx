import React from 'react';
import {useSelector} from 'react-redux';
import { Pie } from 'react-chartjs-2';


function AlcoholPieChart () {
  //get info from the store
    const form = useSelector((store)=>store.form);

    //variables to target
    let alcoholTotal=form.length;
    let alcoholYes=0;
    let alcoholNo=0;
    let alcoholYesDisplay= 0;
    let alcoholNoDisplay=0;

    //map through store information
    form.map((item)=>{
    if(item.answers[118]){
      //targets specific question
        let answer=item.answers[118]
        //iff the answer is yes add one to yes
       if(answer.answer==='Yes'){
           alcoholYes++
       }
       //otherwise if unanswered or No add one to no
       else{
           alcoholNo++
      }
    }
    else{
      alcoholNo++
    }
      //display alcohol yes as a percentage
        alcoholYesDisplay = ((alcoholYes / alcoholTotal) * 100).toFixed(1);
      //display alcohol no as a percentage
        alcoholNoDisplay = ((alcoholNo / alcoholTotal) * 100).toFixed(1);
      })
      //data for the chart
    const data = {
        labels: ['Yes %', 'No %'],
        datasets: [
          {
            label: '# of Votes',
            data: [alcoholYesDisplay, alcoholNoDisplay],
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
    //return title and chart
    return (
        <>
        <div className='header'>
            <h1 className='title'>Alcohol</h1>
        </div>
        <Pie data={data} />
        </>
    )
}
  
  export default AlcoholPieChart;
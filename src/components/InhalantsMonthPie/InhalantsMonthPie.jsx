import React from 'react';
import {useSelector} from 'react-redux';
import { Pie } from 'react-chartjs-2';
import Box from '@material-ui/core/Box';

  //function that returns Inhalants used last month pie
function InhalantsMonthPie () {
    //get information from the store
    const form = useSelector((store)=>store.form);

    //define variables
    let inhalantTotal=form.length;
    let inhalantYes=0;
    let inhalantNo=0;
    let inhalantYesDisplay= 0;
    let inhalantNoDisplay=0;

    //map through store info
    form.map((item)=>{
        //targets data set needed
        let answer=item.answers[142]
        //if the answer is yes add one to inhalantYes
       if(answer.answer){
        inhalantYes++
       }//end if
       //otherwise undecided and no add one to inhalantNo
       else{
        inhalantNo++
      }//end else
      //display yes results as a percentage
      inhalantYesDisplay = ((inhalantYes / inhalantTotal) * 100).toFixed(1);
      //display no results as a percentage
      inhalantNoDisplay = ((inhalantNo / inhalantTotal) * 100).toFixed(1);
      })
      
      //data for Pie Chart
    const data = {
        labels: ['Yes %', 'No %'],
        datasets: [
          {
            label: '# of Votes',
            data: [inhalantYesDisplay, inhalantNoDisplay],
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
    //render a title and pie chart to dom
    return (
        <>
        <div className='header'>
            <h1 className='title'>Inhalants used in the Last Month</h1>
        </div>
        <Box mx="auto" width="40%">
          <Pie data={data} />
        </Box>
        </>
    )
}
  
  export default InhalantsMonthPie;
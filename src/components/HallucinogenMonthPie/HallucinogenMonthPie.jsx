import React from 'react';
import {useSelector} from 'react-redux';
import { Pie } from 'react-chartjs-2';
import Box from '@material-ui/core/Box';



  
function HallucinogenMonthPie () {
    //get information from the store
    const form = useSelector((store)=>store.form);

    //define variables
    let hallucinogenTotal=form.length;
    let hallucinogenYes=0;
    let hallucinogenNo=0;
    let hallucinogenYesDisplay= 0;
    let hallucinogenNoDisplay=0;

    //map through store info
    form.map((item)=>{
        //targets data set needed
        let answer=item.answers[141]
        //if the answer is yes add one to hallucinogenYes
       if(answer.answer){
        hallucinogenYes++
       }//end if
       //otherwise undecided or no add one to hallucinogenNo
       else{
        hallucinogenNo++
      }//end else
      //display yes results as a percentage
      hallucinogenYesDisplay = ((hallucinogenYes / hallucinogenTotal) * 100).toFixed(1);
      //display no results as a percentage
      hallucinogenNoDisplay = ((hallucinogenNo / hallucinogenTotal) * 100).toFixed(1);
      })
      
      //data for Pie Chart
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
            <h1 className='title'>Hallucinogens used in the Last Month</h1>
        </div>
        <Box mx="auto" width="40%">
        <Pie data={data} />
        </Box>
        </>
    )
}
  
  export default HallucinogenMonthPie;
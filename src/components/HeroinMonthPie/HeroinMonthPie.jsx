import React from 'react';
import {useSelector} from 'react-redux';
import { Pie } from 'react-chartjs-2';
import Box from '@material-ui/core/Box';
  //function that returns monthly pie chart for heroin usage
function HeroinMonthPie () {
  //get data from the store
    const form = useSelector((store)=>store.form);
    //define necessary variables
    let heroinTotal=form.length;
    let heroinYes=0;
    let heroinNo=0;
    let heroinYesDisplay= 0;
    let heroinNoDisplay=0;
    //map through data from the store
    form.map((item)=>{
      //target specific question number to return results from the api
        let answer=item.answers[138]
        //if answer.answer exists add one to heroinYes
       if(answer.answer){
           heroinYes++
       }//end if
       //if answer.answer doesn't exist add one to heroinNo
       else{
           heroinNo++
      }//end else
      //display yes results as percentage
        heroinYesDisplay = ((heroinYes / heroinTotal) * 100).toFixed(1);
        //return no results as a percentage
        heroinNoDisplay = ((heroinNo / heroinTotal) * 100).toFixed(1);
      })
      //data for the pie chart
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
    //render a title and Heroin Month Pie Chart to the Dom
    return (
        <>
        <div className='header'>
            <h1 className='title'>Heroin Use(with in last month)</h1>
        </div>
        <Box mx="auto" width="40%">
          <Pie data={data} />
        </Box>
        </>
    )
}
  
  export default HeroinMonthPie;